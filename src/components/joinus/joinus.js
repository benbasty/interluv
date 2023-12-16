import React from 'react'
import './joinus.css';

const Joinus = () => {
  return (
    <section id='joinus'>
      <div className='container joinuscontainer'>
        <div className='newsletter'>
              <h1>Join us on newsletter</h1>
              <p>
                  Interlove lets you easily stay in touch by updating you with what's going on recently. You can enter with your email and subscribe to our newsletter and lets get the fun started.
              </p>
          </div>
          <div className='email'>
              <div className='email_label'>
                <label for='email'>Email:</label>
                <input type='email' id='email'/>
              </div>
              <button>Send</button>
          </div>

      </div>
      <div className='copyright container'>
        <p>&copy; 2024 Interlove. Designed By Benbasty</p>
      </div>

    </section>
  )
}

export default Joinus