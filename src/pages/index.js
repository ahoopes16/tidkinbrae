import React from 'react'
import MainLayout from '../components/layouts/mainlayout'

export default function Home() {
  return (
    <MainLayout title='My Portfolio'>
      <h1 style={{ textAlign: 'center' }}>Welcome!</h1>

      <p>Hello, and welcome to my portfolio site.</p>
      <p>
        Please feel free to have a look around and stay as long as you'd like.
        There's plenty to learn about me; you can start by clicking on any of the links at the top of the page to get started.
      </p>

    </MainLayout>
  )
}
