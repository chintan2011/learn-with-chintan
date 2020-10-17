import React from 'react'
import './SocialInfo.css'
import { SocialIcon } from 'react-social-icons';

function SocialInfo() {
  return (
    <div className="position__view">
      <div class="contactinfo">
        <SocialIcon url="https://www.linkedin.com/in/chintan-savalia/" />
        <SocialIcon url="https://github.com/chintan2011" bgColor="#00000" />
        <SocialIcon url="https://www.facebook.com/chintan2011" />
      </div>
    </div>
  )
}

export default SocialInfo
