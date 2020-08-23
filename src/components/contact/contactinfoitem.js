import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactInfoItem({ icon, link, text }) {
    return (
        <Fragment>
            <FontAwesomeIcon className='icon' icon={icon} />
            <a target='_blank' href={link} className='contact-info-item'>
                {text}
            </a>
            <div className='break'></div>
        </Fragment>
    )
}
