import Link from "next/link"


const TopNav = (props: { text: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | 
    React.ReactFragment | React.ReactPortal | null | undefined,   }) =>{
    return(
          <div className=" font-semibold bg-slate-50   fixed text-3xl gray tracking-normal text-left justify-center items-center  w-screen  top-0 h-20  flex space-x-10  mx-0 " >
       <Link href={"/exercises"}>  <button className="  flex justify-center mt-4 ">ÖVNINGAR</button></Link>
       <Link href={"/set_reps"}>  <button className="  flex justify-center mt-4 ">DITT PASS</button></Link>
    </div>
    )
}

export default TopNav

