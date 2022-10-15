import React from "react";
import "./hero.css"
const Hero =()=>{
    return(
        <>
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

                    <a href=""className="fn-box" id="delete-box">
                    <i class="fa fa-trash" aria-hidden="true"></i>
                    <p>Delete</p>
                    </a>

                    <a href=""className="fn-box" id="import-box">
                    <i class="fa fa-download" aria-hidden="true"></i>
                    <p>Import</p>

                    </a>
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