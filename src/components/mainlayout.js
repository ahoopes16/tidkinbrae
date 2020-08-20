import React from 'react'
import Navbar from './navbar'
import ContactArea from './contactarea'
import ContentPageLayout from './contentpagelayout'
import Title from './title'

export default function MainLayout({ title, children }) {
    return (
        <div>
            <Navbar />
            <div className='content'>
                <ContactArea />
                <Title>{title}</Title>
                <ContentPageLayout>
                    {children}
                </ContentPageLayout>
            </div>
        </div>
    )
}
