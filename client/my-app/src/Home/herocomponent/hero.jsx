import React from "react";
import { useState,useEffect} from "react";
import "./hero.css"
import Popup from "../popupcomponent/popup";
import axios from "axios";
import Contacts from "../contacts/contact";
const Hero =()=>{
const [popup,setpopup]=useState(false)

    return(
        <>
        <Popup show={popup} close={()=>setpopup(false)}/>
        <div id="heropage-container">
            <div id="hero-container">
                <section id="functional-box">

                   

                    <a href=""className="fn-box" id="export-box">
                    {/* <i class="fa fa-upload" ></i> */}
                    <p>Add New</p>
                        
                    </a>
                </section>
                <section id="data-head-container">
                    
                    
                    <p>Activity</p>
                    <p>Status</p>
                    <p>Time Taken</p>
                    <p>Action</p>

                </section>
                <section>
                    <Contacts/>
                
                </section>
            </div>
            <div>
            {/* <button onClick={getcontact}>getme</button> */}
            </div>
              
        </div>
        </>
    )
}
export default Hero