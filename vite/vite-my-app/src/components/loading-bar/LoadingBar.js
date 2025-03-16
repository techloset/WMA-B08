import React from 'react'

export default function LoadingBar(props) {
  return (
    <li className="skills-item">

    <div className="title-wrapper">
      <h5 className="h5">{props.skill.title}</h5>
      <data value={props.skill.value}>{props.skill.value}%</data>
    </div>

    <div className="skill-progress-bg">
      <div className="skill-progress-fill" style={{width: `${props.skill.value}%`}}></div>
    </div>

  </li>
  )
}
