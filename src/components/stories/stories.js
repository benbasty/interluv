import React from 'react'
import coaching from '../../assets/images/coaching.jpg'
import './stories.css'

const Stories = () => {
  return (
    <section id='stories'>
        <div className='successStories'>
            <div className='showcasePic'>
                <img src={coaching} alt='coaching'/>
            </div>
            <div className='testimonials_success container'>
                <h1>Success stories</h1>
                <div className='test_success_story'>
                    <p>“Because of what I learned from Kate, I finally have the great marriage I have always wanted.”</p>
                    <h5>Alicia</h5>
                    <h6>Dec 13, 2022 </h6>
                </div>
                <div className='test_success_story'>
                    <p>“I cannot recommend strongly enough how powerful Kate Card's coaching is. If you are looking for a totally new perspective on dating, she's the one.”</p>
                    <h5>Paul</h5>
                    <h6>Feb 15, 2023 </h6>
                </div>
                <div className='test_success_story'>
                    <p>“My relationship is getting stronger everyday thanks to Kate's coaching. Having been through numerous relationships I can see now they lacked good communications skills.”</p>
                    <h5>Hillary</h5>
                    <h6>Aug 18, 2023 </h6>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Stories