import React from 'react'

export default function Logo(props) {
    return (
        <li className="clients-item">
            <a href="#">
                <img src={props.logo} alt="client logo" />
            </a>
        </li>
    )
}
