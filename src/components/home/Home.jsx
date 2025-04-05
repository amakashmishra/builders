import React from "react"
import Awards from "./awards/Awards"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Location from "./location/Location"
// import Price from "./price/Price"
import Recent from "./recent/Recent"
// import Team from "./team/Team"
import Video from "../video/video"
import Information from "../Imfomation/Information"

const Home = () => {
  return (
    <>
      <Hero />
      <Featured />
      <Recent />
      <Awards />
      <Location />
      {/* <Team /> */}
      <Video />
      <Information />
      {/* <Price /> */}
    </>
  )
}

export default Home
