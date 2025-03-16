import React from 'react'

export default function Logo(props) {
    return (
        <li className={`${props.customClass} ? ${props.customClass} : 'clients-item'`}>
            <a href="#">
                <img src={props.logo} alt="client logo" />
            </a>
        </li>
    )
}
