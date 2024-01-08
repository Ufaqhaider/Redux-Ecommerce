import React from 'react'
import Slider from '../Slider/Slider'
import NavigateButtons from '../NavigateButtons/NavigateButtons'
import ProductSection from '../ProductSection/ProductSection'
import Footer from '../Footer/Footer'

const Main = () => {
  return (
    <div>
        <Slider/>
        <NavigateButtons/>
        <ProductSection/>
        <Footer/>
    </div>
  )
}

export default Main