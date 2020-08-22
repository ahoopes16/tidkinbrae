import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

export default function ContactArea() {
  return (
    <div className='contact-area'>
      <img className='self-portrait' alt='My beautiful face' src='https://i.pinimg.com/originals/0a/53/f6/0a53f615118c87ce9573f3d1f429e0eb.jpg' />

      <div className='contact-info'>
        <p id='name'>Kevin "Alex" Hoopes</p>
        <div className='break'></div>

        <div className='contact-info-items'>
          <FontAwesomeIcon className='icon' icon={faEnvelope} />
          <a href='mailto:kevin.alex.hoopes@gmail.com' className='contact-info-item'>kevin.alex.hoopes@gmail.com</a>
          <div className='break'></div>

          <FontAwesomeIcon className='icon' icon={faPhoneAlt} />
          <a href='tel:4172935107' className='contact-info-item'>(417)-293-5107</a>
          <div className='break'></div>

          <FontAwesomeIcon className='icon' icon={faGithubAlt} />
          <a href='https://github.com/ahoopes16' className='contact-info-item'>GitHub Profile</a>
          <div className='break'></div>

          <FontAwesomeIcon className='icon' icon={faStackOverflow} />
          <a href='https://stackoverflow.com/users/14123656/kevin-hoopes' className='contact-info-item'>Stack Overflow Profile</a>
        </div>
      </div>
    </div>
  )
}
