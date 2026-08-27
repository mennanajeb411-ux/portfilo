import React from "react";



function Header(){
      return(
        <nav className="nav">
           <ul className="elements">


            <li> <a href="#home"> Home</a></li>
            
            <li> <a href="#projects"> Projects</a></li>


             <li> <a href="#skills"> Skills</a></li>


             <li> <a href="#connect"> Let's Connect</a></li>


              <li className="logos">  
               <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
               <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
               <a href="#"><i class="fa-brands fa-instagram"></i></a> 
            </li>
            </ul>
            
       
    </nav>
      )
    
}

export default Header;