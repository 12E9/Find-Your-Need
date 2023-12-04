import React from 'react'
import Carouselhome from './Carousel'
import Categories from './Categories'
import './Home.css'
export const Home = () => {
  return (
    <div >
        <Carouselhome/>
        <div className='home'>
          
         <h1>   Our Services</h1>
          <br></br>
          <div> <Categories /></div>
       
        </div>
        
    </div>
  )
}
