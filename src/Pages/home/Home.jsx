import React, { useEffect } from 'react'
import "./home.css"
import MainHeader from '../../Components/MainHeader'
import Program from '../../Components/Program'
import About from "../about/About.jsx"
import Gallery from '../gallery/Gallery'
import Plans from '../plans/Plans'
import Trainers from '../trainers/Trainers'
import Contact from '../contact/Contact.jsx'


const Home = () => {



  return (
    <div>
      <MainHeader />
      <Program />
      <About />
      <Gallery />
      <Plans />
      <Trainers />
      <Contact />
    </div>
  )
}

export default Home