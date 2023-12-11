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
                <ul className={showHamburger ? 'menu_links responsive-menu' : 'menu_links'}>
                    <li><a href="#home" onClick={() => setShowHamburger(false)}>Home</a></li>
                    <li><a href="#about" onClick={() => setShowHamburger(false)}>About</a></li>
                    <li><a href="#work" onClick={() => setShowHamburger(false)}>Let's Work Together</a></li>
                    <li><a href="#testimonials" onClick={() => setShowHamburger(false)}>Testimonials</a></li>
                    <li><a href="#contact" onClick={() => setShowHamburger(false)}>Contact</a></li>
                </ul>
                {/* <ul className='menu-languages'>
                    <li><a href="#english">EN</a></li>
                    <li><a href="#chinese">CH</a></li>
                    <li><a href="#russian">RU</a></li>
                </ul> */}
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
            <div className='description-block'>
                <h3>Build </h3>
                <h3>authentic & </h3>
                <h3>irresistible</h3>
                <h3>self-assurance.</h3>
                {/* <p>Build your self-esteem, expand your social circle. </p> */}
                <p>Attract your perfect mate and design the life you desire.</p>
                <p>As a dating coach, I can assist you in revealing your true self</p>
                {/* <p>To establish genuine connections.</p> */}
            </div>

            <div className='takeAction'>
                <button className='start'><a href='#start'>Get Started</a></button>
                <button className='book'><a href='#book'>Book Now</a></button>
            </div>
        </div>
        <div id="bckgrndVideo">
            <video width='100%' playsinline autoplay loop muted>
                <source src={video} type="video/mp4"/>
            </video>
        </div >
    </section>
  )
}

export default Header