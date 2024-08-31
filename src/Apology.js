import React from 'react'
import {Navbar} from './components'
import './apology.css'

const Apology = () => {
  return (
    <div className='nav_apology_container'>
        <Navbar />
        <div className='apology'>
            <img src="https://api.memegen.link/images/custom/_/not_enough_info_about_movie.jpg?alt=https://i.imgur.com/CsCgN7Ll.png&width=400" alt='apology'/>
        </div>
    </div>
  )
}

export default Apology