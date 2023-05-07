import Button from '@/components/button';
import TopNav from '@/components/topNav';
import { MyContext } from '@/context/my-context-provider';
import { NextPage } from 'next'
import Link from 'next/link';
import { useState, useContext } from 'react';
import style from './button.module.css'

interface Props {}

const Set_reps: NextPage<Props> = ({}) => {

    const [selectedWorkout, setSelectedWorkout] = useState <string[]>([]);

    const workoutContext = useContext(MyContext)
    const { exercise, musclegroup } = useContext(MyContext);

    const [name, setName] = useState("")
    const [reps, setReps] = useState(0)
    const [weight, setWeight] = useState()
    const [sets, setSets] = useState(0)

    const saveWorkout = (element: {exercise: string; musclegroup: string; reps: number; sets: number; name:string;}) => {
        const newWorkout = `${element.exercise} ${element.musclegroup} ${element.reps} ${element.sets} ${element.name}`;
  
        setSelectedWorkout(prevState => [...prevState, newWorkout]);
        console.log(saveWorkout)
    }

    const handleClick = async () => {
        // TODO: Lägga till objektet Workout upp till databasen
      // 1. Gör en consol.log för att visa upp datan som skrivits in i inputs
      const saveWorkout = {musclegroup, sets, reps, exercise, name}
      // 
      try {
        console.log(saveWorkout)
    const response = await fetch ('api/user/newWorkout', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(saveWorkout),
    });
    
    const data = await response.json();
    // Den här consolge.log läses inte av 
    console.log(" Hallå?")
    
      }catch(error){
        console.error(error);
      }
    }

  return (
  <div>
    <div className='h-screen block '>
   <TopNav text={undefined}></TopNav>
    <br />
      <form className=' py-12 flex justify-center'>
      <input 
      type="text" 
      id='name'
      value={name} 
      onChange={(e) => setName(e.target.value)} 
      
      required placeholder='Namnge ditt pass här...' 
      className=' flex w-50 h-6 text-center m-4'   ></input>
      </form> 
      <div className='flex m-4'>
    <div id='card' className='flex justify-between px-4 py-4 h-20 bg-white rounded-lg shadow-[4px 5px 15px rgba(0,0,0,0.07)]   w-[342px] left-[20px] top-[20px]'>
        <div id='container'>

            <div id='övning'className='flex'>{`${exercise}`}</div>
            <div id='muskelgrupp' className=' py-2 w-24 h-4 text-xs'>{`${musclegroup}`}</div>

        </div>

        <div className=''>
        <form id='inputs' className='flex justify-center'>
        <input type="text" value={sets} 
      onChange={(e) => setSets(parseInt(e.target.value))}   
       name='message' required placeholder='0' className=' ml-2 mr-2 w-6 rounded-full box-border border-2 shadow-lg text-center'></input>
            <div className=' text-center not-italic '> x </div>
            <input type='text' value={reps} 
      onChange={(e) => setReps(parseInt(e.target.value))}  name='message' required placeholder='0' className=' ml-2 mr-2 w-6 rounded-full box-border border-2 shadow-lg text-center'></input>
        </form>
        <div className=' flex'>
            <div id='sets' className=' py-2 ml-2 mr-2 not-italic font-normal text-xs'>Sets</div>
            <div id='reps' className=' py-2 ml-4 mr-2 text-xs'>Reps</div> 
        </div>
        </div>
        </div>
        </div>
    </div>
    <Link href="/minaPass">
  <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2">
    <Button className='style.redButton' text="Skapa pass >" onClick={handleClick} />
  </div>
</Link>

  </div>
  )
}

export default Set_reps