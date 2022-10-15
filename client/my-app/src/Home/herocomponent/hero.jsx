import React from "react";
import { useState } from "react";
import "./hero.css"
import Popup from "../popupcomponent/popup";
const Hero =()=>{
const [popup,setpopup]=useState(false)

    return(
        <>
        <Popup popup={popup} close={()=>setpopup(false)}/>
        <div id="heropage-container">
            <div id="hero-container">
                <section id="functional-box">

                    <a href=""className="fn-box" id="date-box">
                    <i class="fa fa-calendar" aria-hidden="true"></i>
                    <p>Select Date</p>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>

                    <a href=""className="fn-box" id="filter-box">
                    <i class="fa fa-filter" aria-hidden="true"></i>
                    <p>Filters</p>
                    <i class="fa fa-chevron-down" aria-hidden="true"></i>
                    </a>

                    <button className="fn-box" id="delete-box">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    <p>Delete</p>
                    </button>

                    <button onClick={()=>setpopup(true)} className="fn-box" id="import-box">
                    <i class="fa fa-download" aria-hidden="true"></i>
                    <p>Import</p>
                    </button>

                    <a href=""className="fn-box" id="export-box">
                    <i class="fa fa-upload" aria-hidden="true"></i>
                    <p>Export</p>
                        
                    </a>
                </section>
                <section id="data-head-container">
                    <input id="check-box" type="checkbox"/>
                    <p>Name</p>
                    <p>|Designation</p>
                    <p>|Company</p>
                    <p>|Industry</p>
                    <p>|Email</p>
                    <p>|Phone number</p>
                    <p>|country</p>
                    <p>|Action</p>

                </section>
            </div>
        </div>
        </>
    )
}
export default Hero