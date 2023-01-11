import React from 'react'
import HeroSection from './components/HeroSection'
import Services from './components/Services'
import FeatureProducts from './components/FeatureProducts'
import Trusted from './components/Trusted'
const Home = () => {

  const data = {
    name : 'Sujo Store'
  }
  return(

    <>
  <HeroSection myData={data}   />
  <FeatureProducts/>
  <Services/>
  <Trusted/>
  </>
    ) 
  }


export default Home