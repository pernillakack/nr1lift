import TopNav from '@/components/topNav'
import { NextPage } from 'next'
import { useState } from 'react';
import MyContextProvider from '@/context/my-context-provider';
import { chosenExercise } from '@/functions/renderExercises'
import { TiPlus,TiMinus } from 'react-icons/ti'
import Button from '@/components/button';
import Link from 'next/link';
import style from '@/modules/buttons.module.css'


interface Props {}

const Exercises: NextPage<Props> = ({}) => {

const [selectedExercise, setSelectedExercise] = useState<string[]>([]);

const [isColored, setIsColored] = useState<{[key: string]: boolean}>({});
const handleExercise = (element: { nr: number; exercise: string; muscleGroup: string; }) => {
    // Spara det valda objektet i en Array
    const newExercise = `${element.exercise} ${element.muscleGroup}`;
    setSelectedExercise(prevState => [...prevState, newExercise]);
    //färga det valda kortets bakgrund grön
    setIsColored((prevState) => ({
      ...prevState,
    [element.nr]: !prevState[element.nr]}))
    // Sätt övningens värden i ExerciseContext
   // exerciseContext.setExercise(element.exercise);
    //exerciseContext.setMusclegroup(element.muscleGroup);
  }

  const exercises = chosenExercise()
  const handleClick = () => {
    console.log("Klickat gå vidare")
  }

  return (
  <div>
    <div className=" h-screen flex justify-center">
        <TopNav text={undefined}></TopNav>
        <h1>ÖVNINGARNA</h1>
        <ul>
        {exercises.map((element) => {
            return(
        <div className=' m-4'>
        <li key={`${element.nr}`}>
        <div onClick={() => handleExercise(element)} id='card' className={`flex justify-between px-4 py-4 h-20 ${isColored[element.nr] ?" bg-ourcolor-green" : " bg-ourcolor-white"} rounded-lg shadow-[4px 5px 15px rgba(0,0,0,0.07)] w-[342px] left-[20px] top-[20px]`}>
          <div id='info' className='block'>{`${element.exercise}`}
            <div id='muskelgrupp' className=' py-2 w-24 h-4 not-italic font-normal text-xs leading-4'>{`${element.muscleGroup}`}</div>
          </div>
          <div id='container plus' className='flex my-4 ml-1 mr-2'>
            <div><TiPlus className=' mb-8 w-[18px] h-[18px] top-[33px] left[297px]' /></div>
          </div>
        </div>
        </li>
        </div>
            )
        })}

        </ul>
        <div style={{
            position: 'fixed',
            bottom: '32px'
        }}>
            <Link href={"/set_reps"}>
                <Button className={style.redButton} text={"Gå vidare >"} onClick={handleClick}></Button>
            </Link>
        </div>
    </div>
    </div>    
    )
}

export default Exercises