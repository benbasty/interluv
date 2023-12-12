import React from 'react'
import './About.css'
import pic from '../../assets/images/katepic.jpg'
import couple from '../../assets/images/couple.jpg'

const About = () => {
  return (
    <section>
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
        <div id='about-request'>
            <div className='head-request container'>
                <h4>What is your greatest aspiration for your romantic relationships?</h4>
            </div>
            <div className='request-description container'>
                <div className='request-text-area'>
                    <div className='request-text-ara-parag'>
                        <p>
                            Have you explored all options in trying to capture the attention of your loved one and are unsure of what to do next? Perhaps the best solution is to try a new approach.
                        </p>
                        <p>
                            While exploring techniques such as energy work and astrology may be enjoyable, it is important to realize that true change cannot occur until you alter your core beliefs about yourself, relationships, love and what you believe you deserve ?
                        </p>
                        <p>
                            Even after reading countless self-help books and completing various online dating courses, it may not have been the best advice for your specific situation.
                        </p>
                        <p>
                            This is where working with a coach like Kate can be transformative, as they can guide you through the process and provide alternative solutions. You are welcome to request a consultation now.
                        </p>
                    </div>
                    <div className='button-req'>
                        <button>REQUEST A CONSULTATION</button>
                    </div>

                </div>
                <div className='request-pic'>
                    <img src={couple} alt='couple'/>
                </div>
            </div>
        </div>
        <div className='empower'>
            <div className='empower_title container'>
                <h1>How can I empower you ?</h1>
            </div>
            <div className='empower_desc container'>
                <p>Connect with Kate to discover the pace at which you can improve your marriage, relationship, or dating life!</p>
            </div>
            <div className='empower_steps container'>
                <div className='empower_step'>
                    <h1>1</h1>
                    <h4>Explain Your Situation</h4>
                </div>
                <div className='empower_step'>
                    <h1>2</h1>
                    <h4>Get professional coaching</h4>
                </div>
                <div className='empower_step'>
                    <h1>3</h1>
                    <h4>Ongoing Support</h4>
                </div>
            </div>
            <div className='empower_button container'>
                <button>Book a consultation</button>
            </div>
        </div>
    </section>
  )
}

export default About