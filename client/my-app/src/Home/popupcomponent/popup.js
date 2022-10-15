import React from "react";
import axios from "axios";
import "./popup.css"
import { parse } from "papaparse"
import { useState } from "react";

const Popup = (props) => {
    let contacts=[]
    if(!props.popup){
        return null
    }
    return (
        <>
            <div id="drag-drop-box"
                onDragOver={(event) => {
                    event.preventDefault()
                    console.log("dragging over")
                }}

                onDrop={(event) => {
                    event.preventDefault()
                    Array.from(event.dataTransfer.files).map(async file => {
                        let text = await file.text()
                        // console.log(text)
                        let contactArr = parse(text).data
                        console.log(contactArr)
                        contactArr.map(ele=>{
                            // setcontact([...contacts,ele])
                            contacts.push(ele)
                        })
                    })
                    axios.post("http://localhost:8000/addContact",contacts)
                    .then((res)=>{
                        alert(res.data.message)})
                    .catch(e=>console.log(e))
                    contacts=[]
                }}
            >
                <h1>Drop here!</h1>
                <button onClick={props.close}>cancel</button>
            </div>

        </>
    )
}

export default Popup