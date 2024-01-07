import React from 'react'
import Slider from '../Slider/Slider'
import NavigateButtons from '../NavigateButtons/NavigateButtons'
import FilterProducts from '../FilterProducts/FilterProducts'
import ProductSection from '../ProductSection/ProductSection'
import Footer from '../Footer/Footer'

const Main = () => {
  return (
    <div>
        <Slider/>
        <NavigateButtons/>
        <FilterProducts/>
        <ProductSection/>
        <Footer/>
    </div>
  )
}

export default Main