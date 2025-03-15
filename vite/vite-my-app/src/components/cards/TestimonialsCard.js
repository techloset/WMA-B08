import React from 'react'

export default function TestimonialsCard(props) {
  return (
    <li className="testimonials-item">
    <div className="content-card" data-testimonials-item>

      <figure className="testimonials-avatar-box">
        <img src={props.avatar} alt="Daniel lewis" width="60" data-testimonials-avatar/>
      </figure>

      <h4 className="h4 testimonials-item-title" data-testimonials-title>{props.name}</h4>

      <div className="testimonials-text" data-testimonials-text>
        <p>
        {props.review}
        </p>
      </div>

    </div>
  </li>
  )
}
