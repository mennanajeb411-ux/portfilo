// import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import First from "./1st";
import Second from "./2s";
import Third from "./3th";
import Contact from "../contact";




function Projects(){
    // const x=useNavigate()
    const [section,setsection]=useState("first")
    return(
        <div id="conw">
        <div id="projects">
            <div id="parent">
        <h2 className="">My Projects</h2>
        <p>My name is menna There is my 11th Projects</p>
       <div className="btns">
   <button 
     id="first-btn" 
     className={section === "first" ? "active" : ""}
     onClick={() => setsection("first")}
   >
     1st section
   </button>
   <button 
     id="second-btn" 
     className={section === "second" ? "active" : ""}
     onClick={() => setsection("second")}
   > 
     2nd Section
   </button>
   <button 
     id="third-btn" 
     className={section === "third" ? "active" : ""}
     onClick={() => setsection("third")}
   > 
     3rd Section
   </button>
</div>
        <div>
            {section==="first" && <><First/></>}
            {section==="second" && <Second/>}
            {section==="third"&& <><Third/> <Second/>  </>
          }
        </div>
       
       
        </div>
        
        
        </div>
        <div id="connect" >{section==="first"&& <Contact/>}</div>
       
        </div>
    )
}

export default Projects