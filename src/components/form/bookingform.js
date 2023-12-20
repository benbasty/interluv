import React from 'react'
import './bookingform.css'
import bookingFormImg from '../../assets/images/bookingfrm-nobg.png'

const Bookingform = () => {
  return (
    <>
        <section id='bookingform'>
            <div className='container booking_frm_container'>
                <div className='booking_form_desc'>
                    <h1>Book A Consultation</h1>
                    <p>Don't hesitate to drop us a line.</p>
                    <p>Let's make some magic togeether.</p>
                </div>
                <div className='booking_form_img'>
                    <img src={bookingFormImg} alt='bkform'/>
                </div>
            </div>
        </section>
        <section id='emptyspace'>

        </section>
    </>

  )
}

export default Bookingform