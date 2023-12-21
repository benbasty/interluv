import React from 'react'
import './bookingform.css'
import bookingFormImg from '../../assets/images/bookingfrm-nobg.png'
import { BiSolidMessageRounded } from "react-icons/bi";
import { MdPhoneIphone, MdEmail } from "react-icons/md";
import { FaFacebookF, FaYoutube, FaInstagram, FaTwitter} from "react-icons/fa";

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
            <div id='booking_form_main' className='container'>
                <div className='send_message'>
                    <div className='send_message_subtitle'>
                        <h1>Send a message</h1>
                        <BiSolidMessageRounded />
                    </div>
                    <div className='booking_content'>
                        <div className='service'>
                            <label for='services'>Select Service</label>
                            <select name='services' id='services'>
                                <option value='chose'>Please Choose</option>
                                <option value='coaching'>Date Coaching</option>
                                <option value='couples'>Couples Session</option>
                                <option value='male'>Male Consulting</option>
                                <option value='female'>Female Consulting</option>
                                <option value='partnership'>Media & Business Partnerships</option>
                            </select>
                        </div>
                        <div className='datetime'>
                            <label for='datetime'>Select Date and Time</label>
                            <div className='datetimeinputs'>
                                <input type="date" id="datetime" name="datetime" min={new Date().toISOString().split("T")[0]}/>
                                <input type="time" id="datetime" name="datetime" min="09:00" max="18:00" required />
                            </div>
                        </div>
                        <div className='personalInformation'>
                            <h1>Personal Information</h1>
                            <div className='name'>
                                <select name='nametitle'>
                                    <option value='chose'>Please Choose</option>
                                    <option value='mr'>Mr.</option>
                                    <option value='ms'>Ms.</option>
                                    <option value='mrs'>Mrs.</option>
                                    <option value='miss'>Miss.</option>
                                </select>
                                <input type="text" id="fullname" name="fullname" placeholder='Your Name'/>
                            </div>
                            <div className='emailnumber'>
                                <input type="email" id="email" name="email" placeholder='Your Email'/>
                                <input type="number" id="phone" name="phone" placeholder='Your Mobile Number'/>
                            </div>
                            <div className='textarea'>
                                <textarea id="subject" name="subject" rows="10" placeholder='How can we help?'/>
                            </div>
                            <div className='submitform'>
                                <input type='submit' value='Submit'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='contact_info'>
                    <h1>Contact Info</h1>
                    <div className='phone_contact'>
                        <MdPhoneIphone />
                        <p>+86 (123) 456-7890</p>
                    </div>
                    <div className='email_contact'>
                        <MdEmail />
                        <p>kate@katewebsite.com</p>
                    </div>
                    <div className='social_media_contact'>
                        <FaFacebookF />
                        <FaYoutube />
                        <FaInstagram />
                        <FaTwitter />
                    </div>

                </div>
            </div>

        </section>

    </>

  )
}

export default Bookingform