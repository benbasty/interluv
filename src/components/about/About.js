import React from 'react'
import './About.css'
import pic from '../../assets/images/katepic.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className='about-pic'>
            <img src={pic} alt='coach'/>
        </div>
        <div className='about-description'>
            <h5>About Me</h5>
            <h1>KATE YES</h1>
            <div className='about-desc-parag'>
                <p>My mission is to assist self-aware individuals in taking a bold step forward, having faith in themselves, expressing their genuine opinions, and having a smooth experience with love. My mission is to assist self-aware individuals in taking a bold step forward, having faith in themselves, expressing their genuine opinions, and having a smooth experience with love.</p>
                <p>Your most powerful self is aware of your desires and can confidently communicate them while having faith in yourself. Your most powerful self is aware of your desires and can confidently communicate them while having faith in yourself.</p>
            </div>
        </div>
    </div>
  )
}

export default About