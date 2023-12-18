import React from 'react'
import './form.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Form = () => {
  return (
    <section id='form'>
        <div className='container form_container'>
            <div className='form_desc'>
                <h1>Kate Yeskevich</h1>
                <h3>Dating Coach</h3>
                <p>500 Guangzhou Street</p>
                <p>Guangzhou, Guangdong China</p>
                <p>Tel: 123 456 7890</p>
                <p>info@katewebsite.com</p>
                <div className='social_media'>
                    <a href='#social'><FaFacebookF size={'2.5rem'}/></a>
                    <a href='#social'><FaTwitter size={'2.5rem'}/></a>
                    <a href='#social'><FaInstagram size={'2.5rem'}/></a>
                    <a href='#social'><FaYoutube size={'2.5rem'}/></a>
                </div>
            </div>
            <div className='form_questionnaire'>
                <h1>Get In Touch</h1>
                <form>
                    <label for="firstname">First name</label>
                    <input type="text" id="firstname" name="firstname"/>
                    <label for="lastname">Last name</label>
                    <input type="text" id="lastname" name="lastname"/>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email"/>
                    <label for="phone">Phone</label>
                    <input type="number" id="phone" name="phone"/>
                    <label for="subject">Message</label>
                    <textarea id="subject" name="subject" rows="9" cols="50" />
                    <input type='submit' value='Submit'/>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Form