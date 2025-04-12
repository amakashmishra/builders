import React from "react"
import Heading from "../common/Heading"
import "./AboutDetails.css"
import img from "../../assets/Images/Img1.jpg"

const AboutDetails = () => {
  return (
    <>
      <section className='about'>
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading
              title="Welcome to Krishna Heritage"
              subtitle="Discover premium builder flats designed for comfort, style, and modern living"
            />
            <p>Willy Trade Pvt Ltd is a dynamic and ambitious real estate development company, established to transform the landscape of Karjat. With a focus on innovation, quality, and customer satisfaction, we aim to deliver exceptional living and working spaces.</p>
            <p>To create vibrant, sustainable, and inspiring communities, exceeding customer expectations through transparency, integrity, and excellence.</p>

            <h3>Key Features</h3>
            <ul>
              <li>Prime locations</li>
              <li>Modern architecture</li>
              <li>Quality construction</li>
              <li>Amenities and services</li>
              <li>Transparent pricing</li>
            </ul>
          </div>
          <div className='right row'>
            <img src={img} alt='about' />
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutDetails
