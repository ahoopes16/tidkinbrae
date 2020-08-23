import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

export default function ContactInfo() {
  return (
    <div className='contact-info'>
      <p id='name'>Kevin "Alex" Hoopes</p>
      <div className='break'></div>

      <div className='contact-info-items'>
        <FontAwesomeIcon className='icon' icon={faEnvelope} />
        <a target='_blank' href='mailto:kevin.alex.hoopes@gmail.com' className='contact-info-item'>kevin.alex.hoopes@gmail.com</a>
        <div className='break'></div>

        <FontAwesomeIcon className='icon' icon={faPhoneAlt} />
        <a target='_blank' href='tel:4172935107' className='contact-info-item'>(417)-293-5107</a>
        <div className='break'></div>

        <FontAwesomeIcon className='icon' icon={faGithubAlt} />
        <a target='_blank' href='https://github.com/ahoopes16' className='contact-info-item'>GitHub Profile</a>
        <div className='break'></div>

        <FontAwesomeIcon className='icon' icon={faStackOverflow} />
        <a target='_blank' href='https://stackoverflow.com/users/14123656/kevin-hoopes' className='contact-info-item'>StackOverflow Profile</a>
      </div>
    </div>
  )
}
