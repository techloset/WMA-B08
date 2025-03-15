import React from 'react'

export default function ServiceCard(props) {
    return (
        <li className="service-item">

            <div className="service-icon-box">
                <img src={props.image} alt="Web development icon" width="40" />
            </div>

            <div className="service-content-box">
                <h4 className="h4 service-item-title">{props.title}</h4>

                <p className="service-item-text">
                   {props.description}
                </p>
             
            </div>

        </li>
    )
}
