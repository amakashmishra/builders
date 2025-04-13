import React from "react";
import Heading from "../common/Heading";
import "./video.css";
import Logo from "../../assets/Images/Brown and Gold Luxury Real Estate Business Card_20250313_185004_0000.png";

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

                    {/* Right: Logo + Content */}
                    <div className='video-right'>
                        <div className='logo-text-split'>
                            <div className='logo-block'>
                                <img src={Logo} alt='Dev Group Logo' />
                            </div>
                            <div className='text-block'>
                                <h3>About Dev Group</h3>
                                <p>
                                    Dev group is a dynamic and ambitious real estate development company,
                                    established to transform the landscape of Karjat. With a focus on innovation,
                                    quality, and customer satisfaction, we aim to deliver exceptional living and working spaces.
                                </p>

                                <h4>Our Mission</h4>
                                <p>
                                    To create vibrant, sustainable, and inspiring communities, exceeding customer expectations
                                    through transparency, integrity, and excellence.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Video;
