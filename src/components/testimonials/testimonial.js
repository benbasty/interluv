import React from 'react'
import { PropTypes } from 'prop-types'
import './testimonial.css'

const Testimonial = props => {
  return (
    <div className='testimonial'>
        <div className='content'>{props.content}</div>
        <div className='name'>{props.name}</div>
    </div>
  )
}

Testimonial.propTypes = {
    content: PropTypes.string,
    name: PropTypes.string
}

export default Testimonial