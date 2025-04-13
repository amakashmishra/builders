// src/components/EnquireNowButton.jsx
import React from 'react'
import { Link } from 'react-router-dom'
import './EnquireNowButton.css'

const EnquireNowButton = () => {
  return (
    <div className="enquiry-fixed">
      <Link to="/contact" className="enquire-now-btn">
        Enquire Now
      </Link>
    </div>
  )
}

export default EnquireNowButton
