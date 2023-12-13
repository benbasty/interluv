import React from 'react'
import './galery.css'
import Kate1 from '../../assets/images/kate1.jpg'
import Kate2 from '../../assets/images/kate2.jpg'
import Kate3 from '../../assets/images/kate3.jpg'
import Kate4 from '../../assets/images/kate4.jpg'

const Galery = () => {
  return (
    <section id='galery'>
        <div className='pics'>
            <div><img src={Kate1} alt='kate'/></div>
            <div><img src={Kate2} alt='kate'/></div>
            <div><img src={Kate3} alt='kate'/></div>
            <div><img src={Kate4} alt='kate'/></div>
        </div>
    </section>
  )
}

export default Galery