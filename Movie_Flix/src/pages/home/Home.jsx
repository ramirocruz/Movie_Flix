import React from 'react'
import "./style.css"
import Banner from './banner/Banner'
import Trending from './trending/Trending'

const Home = () => {
  return (
    <div className='homePage'>
        <Banner/>
        <Trending />
        <div style={{height:1000}}></div>
    </div>
  )
}

export default Home