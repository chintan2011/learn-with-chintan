import './ContactInfo.css'
import React from 'react'
import my_icon from '../my_icon.jpeg'
import SocialInfo from './SocialInfo'

function ContactInfo() {
    return (
        <a href="https://chintansavalia-2a5ca.web.app">
            <div className="contact-info-container">
            <img src={my_icon} className="profile__picture" alt="logo"/>
            <p className="portfolio-text">Visit my Portfolio Here</p>
            <SocialInfo/>
        </div>
        </a>
    )
}
export default ContactInfo
