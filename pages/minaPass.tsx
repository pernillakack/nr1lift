import { NextPage, GetServerSideProps } from 'next'
import { Workout } from '@/types/workout'
import { connectToDatabase } from '@/utils/db'
import Button from '@/components/button'
import style from '@/modules/buttons.module.css'


type Props = {
    workouts: Workout []
}

const onClick = ()=>{}

const MinaPass: NextPage<Props> = ({workouts}) => {
  return (
    <div className=' h-screen flex justify-center'>
  <div className=" bg-cover w-full flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://4599529af2.cbaul-cdnwnd.com/801f178300d1552abc2bf838876c8a02/200000001-58c0f58c11/liftstart.webp?ph=4599529af2')",
   maxWidth:700}}>
    <div className=''>
    <h1 className=' text-lg'>Mina Pass:</h1>
   
      {workouts.map((workout) => (
          <ul key={workout._id}> 
            <li className='flex justify-between py-2' >  
            <Button className={style.redButton} text={workout.name} onClick={onClick}></Button>
            </li>

          </ul>
        )
        ) 
      }
    </div>
    </div>
</div>
  )
}
export default MinaPass

export const getServerSideProps: GetServerSideProps<any> = async () => {
  await connectToDatabase()
  const res = await fetch('@/api')
  const workouts = await res.json()

  const serializedWorkouts = workouts.map((workout: { _id: { toString: () => any } }) => {
    return {
      ...workout,
      _id: workout._id.toString(),
    }
  })
  return {
    props: {
      workouts: serializedWorkouts,
    },
  }
}
