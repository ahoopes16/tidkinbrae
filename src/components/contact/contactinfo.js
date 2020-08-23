import React from 'react'
import ContactInfoItem from './contactinfoitem'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithubAlt, faStackOverflow } from '@fortawesome/free-brands-svg-icons'

export default function ContactInfo() {
  return (
    <div className='contact-info'>
      <p id='name'>Kevin "Alex" Hoopes</p>
      <div className='break'></div>

      <div className='contact-info-items'>
        <ContactInfoItem
          text='kevin.alex.hoopes@gmail.com'
          link='mailto:kevin.alex.hoopes@gmail.com'
          icon={faEnvelope}
        />

        <ContactInfoItem
          text='(417)-293-5107'
          link='tel:4172935107'
          icon={faPhoneAlt}
        />

        <ContactInfoItem
          text='GitHub Profile'
          link='https://github.com/ahoopes16'
          icon={faGithubAlt}
        />

        <ContactInfoItem
          text='StackOverflow Profile'
          link='https://stackoverflow.com/users/14123656/kevin-hoopes'
          icon={faStackOverflow}
        />
      </div>
    </div>
  )
}
