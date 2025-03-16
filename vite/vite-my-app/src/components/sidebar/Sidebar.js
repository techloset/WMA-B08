import React from 'react'
import Logo from '../logo/Logo'
import MyAvatar from '../../assets/images/my-avatar.png'
import InfoTile from '../info-tile/InfoTile'

export default function Sidebar() {

  const constactLists = [
    {icon: 'mail-outline', title: 'Email', value:'richard@example.com', link: ''},
    {icon: 'phone-portrait-outline', title: 'Phone', value:'+1 (213) 352-2795', link: 'tel:+12133522795'},
    {icon: 'calendar-outline', title: 'Birthday', value:'June 23, 1982', link: ''},
    {icon: 'location-outline', title: 'Location', value:'Sacramento, California, USA', link: ''},
  ] 
  return (
    <aside className="sidebar" data-sidebar>

    <div className="sidebar-info">

      <Logo logo={MyAvatar} customClass="avatar-box"/>

      <div className="info-content">
        <h1 className="name" title="Richard hanrick">Richard hanrick</h1>

        <p className="title">Web developer</p>
      </div>

      <button className="info_more-btn" data-sidebar-btn>
        <span>Show Contacts</span>

        <ion-icon name="chevron-down"></ion-icon>
      </button>

    </div>

    <div className="sidebar-info_more">

      <div className="separator"></div>

      <ul className="contacts-list">

       {constactLists.map((contact, index)=>{
        return <InfoTile key={index} contact={contact} />
       }
       )}


      </ul>

      <div className="separator"></div>

      <ul className="social-list">

        <li className="social-item">
          <a href="#" className="social-link">
            <ion-icon className = "socials-icons" name="logo-facebook"></ion-icon>
          </a>
        </li>

        <li className="social-item">
          <a href="#" className="social-link">
            <ion-icon className = "socials-icons" name="logo-twitter"></ion-icon>
          </a>
        </li>

        <li className="social-item">
          <a href="#" className="social-link">
            <ion-icon className = "socials-icons" name="logo-instagram"></ion-icon>
          </a>
        </li>

      </ul>

    </div>

  </aside>
  )
}
