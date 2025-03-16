import React from 'react'

export default function PortfolioCard(props) {
  return (
    <li className="project-item  active" data-filter-item data-category="web development">
    <a href="#">

      <figure className="project-img">
        <div className="project-item-icon-box">
          <ion-icon name="eye-outline"></ion-icon>
        </div>

        <img src={props.image} alt="finance" loading="lazy" />
      </figure>

      <h3 className="project-title">{props.title}</h3>

      <p className="project-category">{props.category}</p>

    </a>
  </li>
  )
}
