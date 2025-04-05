import React from "react"
import Heading from "../common/Heading"
import "./video.css"

const Video = () => {
    return (
        <section className='video-section background'>
            <div className='container'>
                <Heading
                    title='Experience Krishna Heritage'
                    subtitle='Discover the charm, elegance, and structural excellence that defines Krishna Heritage.'
                />

                <div className='video-content'>
                    {/* Left: Video */}
                    <div className='video-left'>
                        <iframe
                            className='video-frame'
                            src='https://www.youtube.com/embed/YOUR_VIDEO_ID'
                            title='Krishna Heritage Walkthrough'
                            frameBorder='0'
                            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Right: About Content */}
                    <div className='video-right'>
                        <h3>About Krishna Heritage</h3>
                        <p>
                            Krishna Heritage is more than just a residential space — it's a vibrant community designed for comfort, quality living, and peace of mind.
                        </p>
                        <p>
                            Willy Trade Pvt Ltd is a dynamic and ambitious real estate development company, established to transform the landscape of Karjat. With a focus on innovation, quality, and customer satisfaction, we aim to deliver exceptional living and working spaces.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Video
