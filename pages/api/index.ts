import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from "@/utils/db"
import { Workout } from "@/types/workout"

export default async function handler(
req: NextApiRequest,
res: NextApiResponse<Workout[] | string>
) {
try {
 const db = await connectToDatabase()

 switch (req.method) {
 case "GET": {
 // Hämta alla dokument från db
 const workouts = await db.collection("workout").find().toArray()

 const convertedWorkouts: Workout[] = workouts.map((workoutDoc) => {
 return {
 _id: workoutDoc._id as unknown as string,
 musclegroup: workoutDoc.musclegroup as string,
 sets: workoutDoc.sets as number,
 reps: workoutDoc.reps as number,
 exercise: workoutDoc.exercise as string,
 weight: workoutDoc.weight as number,
 name: workoutDoc.name as string,
 nr: workoutDoc.nr as number
}
 })
 if (convertedWorkouts.length === 0) {
 console.log("PRETTY EMPTY DUDE")
 res.status(200).json("EMPTY")
 } else {
 res.status(200).json(convertedWorkouts)
 }
 break
 }
 case "POST": {

 }
 default: {
 // Return a 405 Method Not Allowed error for all other HTTP methods
 res.setHeader("Allow", ["GET", "POST"])
 res.status(405).end(`Method ${req.method} Not Allowed`)
 break
 }
 }
 } catch (error) {
 throw new Error("Something went wrong " + error)
 }
}