import React from "react";
import "./ProfileCard.css"

const ProfileCard = (props) => {
    return (
        <div className="card">
            <img src={props.avatar_url} alt={props.name}  id="user-image"/>
            <h2 id="user-name">{props.name}</h2>
            <h4 id="user-role">{props.role}</h4>
            <p id="user-bio">{props.bio}</p>
        </div>
    )
}


export default ProfileCard;