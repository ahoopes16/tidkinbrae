import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function ContactInfoItem({ icon, link, text }) {
    return (
        <Fragment>
            <FontAwesomeIcon className='icon' icon={icon} />
            <a
                className='contact-info-item'
                href={link}
                target='_blank'
                rel='noreferrer'
            >
                {text}
            </a>
            <div className='break'></div>
        </Fragment>
    )
}
