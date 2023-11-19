import React from 'react'
import LandProSection1 from './landpro/sections/LandProSection1'
import LandProSection2 from './landpro/sections/LandProSection2'
import LandProSection3 from './landpro/sections/LandProSection3'
import LandProSection4 from './landpro/sections/LandProSection4'
import Section4 from "./home/sections/Section4"
import Footer from '@/components/Footer'


function Landpro() {
  return (
<div>
  <LandProSection1 />
  <LandProSection2 />
  <LandProSection3 />
  <LandProSection4 />
  <Section4 />
  <Footer />
</div>

  )
}

export default Landpro