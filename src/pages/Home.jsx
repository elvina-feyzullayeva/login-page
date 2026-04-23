import React from 'react'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <>
      <Navbar />
      <section className='flex justify-center items-center h-screen'>
        <h1 className='text-8xl font-bold text-blue-950'>Welcome!</h1>
      </section>
    </>
  )
}

export default Home