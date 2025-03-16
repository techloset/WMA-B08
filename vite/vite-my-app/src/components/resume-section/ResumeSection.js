import React from 'react'
import ResumeItem from '../resume-item/ResumeItem'

export default function ResumeSection(props) {
  return (
    <section className="timeline">

      <div className="title-wrapper">
        <div className="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 className="h3">{props.title}</h3>
      </div>

      <ol className="timeline-list">

        {props.items.map((item, index) => {
          return <ResumeItem key={index} title={item.title} date={item.date} description={item.description} />
        })}

      </ol>

    </section>
  )
}
