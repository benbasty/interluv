import React from 'react'
import './header.css'
import Logo from '../../assets/images/interlove.png'
import { useState } from 'react'
import {FaTimes, FaBars} from 'react-icons/fa';
import video from '../../assets/videos/dancingcouple.mp4'

const Header = () => {
    //showing the hamburger menu is initially set to false
    const [showHamburger, setShowHamburger] = useState(false);
    // showNavBar on click
    const showNavBar = () => {
        setShowHamburger(!showHamburger);
    }
  return (
    <section id='header'>
        <nav id='navbar' className='container'>
            <div className='logo'>
                <a href="#logo"><img src={Logo} alt='logoInterlove'/></a>
            </div>
            <div className='links'>
                <ul className='menu_links'>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Let's Work Together</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
                <ul className='menu-languages'>
                    <li><a href="#english">EN</a></li>
                    <li><a href="#chinese">CH</a></li>
                    <li><a href="#russian">RU</a></li>
                </ul>
            </div>
            <div className='hamburger' onClick={showNavBar}>
                {showHamburger ?
                    (<FaTimes/>)
                    :
                    (<FaBars/>)
                }
            </div>
        </nav>
        <div id='hero-description' className='container'>
            <h3>Build authentic and <br/> <span>irresistible</span> self-assurance.</h3>
            <h4>Build your self-esteem, expand your social <br/>circle, attract your perfect mate to design <br/>the life you desire.</h4>
            <h4>As a dating coach, I can assist you in<br/> revealing your true self to establish genuine<br/> connections.</h4>
            <div className='takeAction'>
                <button className='start'><a href='#start'>Get Started</a></button>
                <button className='book'><a href='#book'>Book Now</a></button>
            </div>
        </div>
        <video width='100%' autoplay loop muted playsinline id="bckgrndVideo">
            <source src={video} type="video/mp4"/>
        </video>
    </section>
  )
}

export default Header