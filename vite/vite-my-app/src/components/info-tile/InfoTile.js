import React from 'react'

export default function infoTile(props) {
  return (
    <li className="contact-item">

          <div className="icon-box">
            <ion-icon name={props.contact?.icon}></ion-icon>
          </div>

          <div className="contact-info">
            <p className="contact-title">{props.contact?.title}</p>

            <a href={props.contact?.value} className="contact-link">{props.contact?.value}</a>
          </div>

        </li>
  )
}
