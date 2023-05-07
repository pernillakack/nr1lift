import { ReactNode, createContext,useState } from 'react'

interface ExerciseProviderProps {
    children: ReactNode
}

// Properties
interface ExerciseContextProps{
    id: string
    musclegroup: string
    sets: number
    reps: number
    exercise: string
    weight: number
    name: string
    nr: number
    setMusclegroup: (muscleGroup: string) => void
    setSets: (sets: number) => void
    setReps: (reps: number) => void
    setExercise: (exercise: string) => void
    setWeight: (weight: number) => void
    setName: (name:string) => void
    setNr: (nr:number) => void
}

const initialExerciseContext: ExerciseContextProps = {
    id: "",
    musclegroup: '',
    sets: 0,
    reps: 0,
    exercise: '',
    weight: 0,
    name: '',
    nr: 0,
    setMusclegroup: () => { },
    setSets: () => { },
    setReps: () => { },
    setExercise: () => { },
    setWeight: () => { },
    setName: () => { },
    setNr: () => {}
    
    
}
export const MyContext = createContext<ExerciseContextProps>(initialExerciseContext)

const MyContextProvider: React.FC<ExerciseProviderProps> = ({children}) => {

    //Finalize
    const [id, setId]  = useState<string>("")
    const [musclegroup, setMusclegroup] = useState<string>("")
    const [sets, setSets] = useState<number>(0)
    const [reps, setReps] = useState<number>(0)
    const [exercise, setExercise] = useState<string>("")
    const [weight, setWeight] = useState<number>(0)
    const [name, setName] = useState<string>("")
    const [nr, setNr] = useState<number>(0)
    
    //Connect
    const contextValue: ExerciseContextProps = {
        id,
        musclegroup,
        sets,
        reps,
        exercise,
        weight,
        name,
        nr,
        setMusclegroup: (musclegroup: string) => setMusclegroup(musclegroup),
        setSets: (sets: number) => setSets(sets),
        setReps: (reps: number) => setReps(reps),
        setExercise: (exercise: string) => setExercise(exercise),
        setWeight: (weight: number) => setWeight(weight),
        setName: (name: string) => setName(name),
        setNr: (nr: number) => setNr(nr)
    }
    return <MyContext.Provider value= {contextValue}
    children = {children}/>
  
}

export default MyContextProvider