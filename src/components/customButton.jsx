import React, { Component, useState } from "react";
import reactDom from "react-dom";
import "./background.css";
import CustomModal from "./customModal";
import Button from "react-bootstrap/Button";
import Checkmark from "./assets/icon-check-mark.svg";
import Checked from "./assets/icon-bg-checked.svg";


export default function CustomButton(props) {
  const { id, img, active, setActive, seen} = props;
  const [alreadyClicked, setAlreadyClicked] = useState(false);


  function handleClick() {
    setActive(id);
    setAlreadyClicked(true);
  }

  function cancelClick() {
    //setAlreadyClicked(true);
    setActive(id);
  }

  return (
   
    <div class="customButton">
      <div>

        <button
          onClick={handleClick}
          onMouseLeave={cancelClick}
          id={id}
          img={img}
          className={
            active && id !== null
              ? "active"
              : alreadyClicked
              ? "alreadyClicked"
              :   seen.includes(id) 
              ? "seen"
              : "notClicked" 
          }
        >
          
          <img src={img} />
       
          <div
            className="checkButton"
            style={{ display: seen.includes(id)  ? "block" : "none" }}
          >
            <img src={Checkmark} alt="checked" />
          </div>
       
        </button>
         
      </div>
    </div>
   
  );
}
