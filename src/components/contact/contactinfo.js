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
          icon={faEnvelope}
          link='mailto:kevin.alex.hoopes@gmail.com'
          text='kevin.alex.hoopes@gmail.com'
        />

        <ContactInfoItem
          icon={faPhoneAlt}
          link='tel:4172935107'
          text='(417)-293-5107'
        />

        <ContactInfoItem
          icon={faGithubAlt}
          link='https://github.com/ahoopes16'
          text='GitHub Profile'
        />

        <ContactInfoItem
          icon={faStackOverflow}
          link='https://stackoverflow.com/users/14123656/kevin-hoopes'
          text='StackOverflow Profile'
        />
      </div>
    </div>
  )
}
