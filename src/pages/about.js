import React from 'react'
import AboutSection1 from './about/sections/AboutSection1'
import AboutSection2 from './about/sections/AboutSection2.js'
import AboutSection3 from './about/sections/AboutSection3'
import Footer from '@/components/Footer'


function About() {
  return (
  <div>
    <AboutSection1 />
    <AboutSection2 />
    <AboutSection3 />  
    <Footer />
  </div>
  )
}

export default About