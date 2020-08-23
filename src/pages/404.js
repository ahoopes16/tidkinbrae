import React from 'react'
import MainLayout from '../components/layouts/mainlayout'

export default function NotFound() {
    return (
        <MainLayout>
            <div className='not-found-content'>
                <h1>Woah there!</h1>
                <p>Looks like you've taken a wrong turn.</p>
                <p>No worries, just select a page up there to get back to the good stuff.</p>
            </div>
        </MainLayout>
    )
}
