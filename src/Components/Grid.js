import React from "react";
import './Grid.css'



export default function Grid(props) {
    return (<div className="container">
        <img className="grid--image" src={props.item.imageUrl} />
        <div className="grid--sec">
            <div className="grid--loc">{props.item.location}</div>
            <a href={props.item.googleMapsUrl}>View on Maps</a>
            <h3>{props.item.title}</h3>
            <div className="grid--date">{props.item.startDate}-{props.item.endDate}</div>
            <p className="grid--para">
                {props.item.description}
            </p>
        </div>


    </div>
    )
}