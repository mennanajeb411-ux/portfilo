import{ React, useState,useEffect} from "react";
import { TypeAnimation } from "react-type-animation"

function Me(){


    <TypeAnimation
        sequence={
            [
                "frone end ", 2000,
                "Back end ", 2000,
                "web end ", 2000,
               
            ]
        }
        speed={50}
        repeat={Infinity}/>


    //   const [index,setindex]= useState(0)

    //   const words =[
    //     "frontioehgsdkvs",
    //     "aoeirgbhoialbnlk"
    //     ,"poihgioaebhoalndhenl"
    //   ]
    //   useEffect(()=>{

    //     const timer= setInterval(
    //         ()=>{
    //             setindex((index)=>(index+1)% words.length)
    //         },2000)

    //     return()=>clearInterval(timer)

    //     },[])

      

    return(
        
     <div className="mid">
        <div className="text">
        <h2>Welcome all in my portfoile</h2>
        <h1>Hi! Iam Menna Allah ,Iam {""}
            <TypeAnimation
        sequence={
            [
                "Front-End Developer ", 3000,
                "Back-End Developer ", 3000,
                "Web Developer ", 3000,
               
            ]
        }
        speed={-10}
        repeat={Infinity}/>


            <span id="text"> </span>
           </h1>

         <p>Hi everyone Iam web developer , front end</p>

         </div>



         <div className="img">
          <img src={`${process.env.PUBLIC_URL}/imgs/pngwing.com.png`} alt="my image" id="ani" />

         </div>
        
        
     </div>)
    
}
export default Me