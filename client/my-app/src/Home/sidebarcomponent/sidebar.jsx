import React from "react";
import "./sidebar.css"
 const Sidebar=()=>{
    return(
        <>
        <div id="side-container">
        <h1 id="logo">Logo</h1>
        <i id="" class="fa fa-th-large" aria-hidden="true"></i>
        <p id="dashboard">Dashboard</p><br></br>
        <a href="">
            <div id="all-contact-button">
            <i class="fa fa-address-card" aria-hidden="true"></i>
            <p id="total-contact">Total contacts |</p>
            </div>
        </a>
        <a id="logout" href="">
        <i class="fa fa-sign-in" aria-hidden="true"></i>
        <p id="logout-text">Log out</p>
        </a>
        </div>
        </>
    )
 }
 export default Sidebar