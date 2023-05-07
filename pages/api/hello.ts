// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Workout } from '@/types/workout'
import { connectToDatabase } from '@/utils/db'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Workout | string>
) {
  const newWorkout = req.body

  if(!newWorkout) {
    res.status(400).json("New workout not defined")
    return
  }
 
  if (req.method === "POST") {
    try {
      const workout: Workout = JSON.parse(JSON.stringify(newWorkout))

      if (Object.values(workout).some((value) => !value)) {
        res.status(400).json("Invalid user data")
        return
      }

      const db = await connectToDatabase()
    //  await db.collection("workout").insertOne(workout)

      res.status(200).json(workout)
    } catch(error) {
      console.error(error)
      res.status(500).json("Internal server error")
    }
  } else {
    res.status(405).send(`Method ${req.method} not allowed`)
  }
}
