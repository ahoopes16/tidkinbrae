import React from 'react'
import ProfilePicPath from '../../assets/engaged.jpg'

export default function ProfilePic() {
    return (
        <img
            className='self-portrait'
            alt='Me (left) and my beautiful fiancee (right)'
            src={ProfilePicPath}
        />
    )
}
