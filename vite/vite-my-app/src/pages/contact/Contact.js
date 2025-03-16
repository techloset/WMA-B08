import React from 'react'
import Textarea from '../../components/textarea/Textarea'
import Input from '../../components/input/Input'

export default function Contact() {
  return (
    <article className="contact active" data-page="contact">

    <header>
      <h2 className="h2 article-title">Contact</h2>
    </header>

    <section className="mapbox" data-mapbox>
      <figure>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199666.5651251294!2d-121.58334177520186!3d38.56165006739519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ac672b28397f9%3A0x921f6aaa74197fdb!2sSacramento%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1647608789441!5m2!1sen!2sbd"
          width="400" height="300" loading="lazy"></iframe>
      </figure>
    </section>

    <section className="contact-form">

      <h3 className="h3 form-title">Contact Form</h3>

      <form action="#" className="form" data-form>

        <div className="input-wrapper">
          <Input type="text" name="fullname" placeholder="Full name"/>
          <Input type="email" name="email" placeholder="Email address"/>
         
        </div>

         <Textarea/>

        <button className="form-btn" type="submit" disabled data-form-btn>
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>

      </form>

    </section>

  </article>
  )
}
