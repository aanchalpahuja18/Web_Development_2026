import React from "react";
import "./UserCard.css"
import aanchal from "../assets/aanchal-image.jpg"

const UserCard = (props) => {
    return (
        <div id="user-container" style={props.style}>
            <h2 id="user-name">{props.name}</h2>
            <img src={props.image} alt="Aanchal" id="user-img"/>
            <p id="user-desc">{props.desc}</p>
        </div>
    )
}

export default UserCard