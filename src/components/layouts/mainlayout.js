import React from 'react'
import Navbar from '../navbar'
import ContactArea from '../contact/contactarea'
import ContentPageLayout from './contentpagelayout'
import Title from '../title'

export default function MainLayout({ title, selectedTab, children }) {
    return (
        <div>
            <Navbar selectedTab={selectedTab} />
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
