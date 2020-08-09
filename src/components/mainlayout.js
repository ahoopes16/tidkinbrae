import React from 'react'
import Navbar from './navbar'
import ContactArea from './contactarea'
import ContentPageLayout from './contentpagelayout'

export default function MainLayout({ children }) {
    return (
        <div>
            <Navbar />
            <div className='content'>
                <ContactArea />
                <ContentPageLayout>
                    {children}
                </ContentPageLayout>
            </div>
        </div>
    )
}
