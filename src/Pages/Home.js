import React from 'react'
import Contact from '../Components/Contact'
import Footer from '../Components/Footer'
import Mailbox from '../Components/Mailbox'
import Navbar from '../Components/Navbar'

function Home() {
  return (
    <div>
        <Contact />
        <Navbar />
        Home
        <Mailbox />
        <Footer />
        <Contact />
    </div>
  )
}

export default Home