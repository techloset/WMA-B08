import React from 'react'
import ServiceCard from '../../components/cards/ServiceCard'
import Logo from '../../components/logo/Logo'
import TestimonialsCard from '../../components/cards/TestimonialsCard'
import { services, clientLogos, testimonials } from '../../constants/about.constant'
export default function About() {
 
  return (
    <article className="about  active" data-page="about">

      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media.
          I enjoy
          turning complex problems into simple, beautiful and intuitive designs.
        </p>

        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive.
          Moreover, I
          add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring
          across your
          message and identity in the most creative way. I created web design for many famous brand companies.
        </p>
      </section>


      <section className="service">

        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {
            services.map((item, index) => {
              return <ServiceCard key={index} image={item.image} title={item.title} description={item.description} />
            })
          }
        </ul>

      </section>




      <section className="testimonials">

        <h3 className="h3 testimonials-title">Testimonials</h3>

        <ul className="testimonials-list has-scrollbar">
          {
            testimonials.map((testimonial, index) => {
              return <TestimonialsCard key={index} name={testimonial.name} avatar={testimonial.avatar} review={testimonial.review} />
            }
            )
          }


        </ul>

      </section>




      <section className="clients">

        <h3 className="h3 clients-title">Clients</h3>

        <ul className="clients-list has-scrollbar">
          {
            clientLogos.map((logo, index) => {
              return <Logo key={index} logo={logo} />
            }
            )
          }

        </ul>

      </section>

    </article>
  )
}
