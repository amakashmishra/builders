import React from "react"
import Heading from "../common/Heading"
import "./information.css"

const highlights = [
  {
    icon: "fa-chart-line",
    text: "Fast-Growing Krishna Heritage Real Estate Market Expands",
  },
  {
    icon: "fa-leaf",
    text: "Krishna Heritage Offers a Green and Pollution-Free Living Environment",
  },
  {
    icon: "fa-ship",
    text: "Nhava-Seva Sea Port is 56 Km Away from Krishna Heritage",
  },
  {
    icon: "fa-plane-departure",
    text: "Navi Mumbai’s Upcoming International Airport is 39 Km from Krishna Heritage",
  },
  {
    icon: "fa-train",
    text: "Krishna Heritage Railway provides connectivity to Mumbai, Pune, Panvel, and Khopoli",
  },
  {
    icon: "fa-road",
    text: "National and state highways link Krishna Heritage to Mumbai, Pune, and Nashik",
  },
  {
    icon: "fa-mountain-sun",
    text: "Weekend getaways in Krishna Heritage include picnics, river rafting, trekking, and hiking",
  },
  {
    icon: "fa-building-circle-check",
    text: "Proposed Central Railway car shed land acquisition in Krishna Heritage is completed",
  },
  {
    icon: "fa-hotel",
    text: "ND Film Studio and luxury five-star hotels are in Krishna Heritage",
  },
  {
    icon: "fa-tree-city",
    text: "Explore Matheran Hill Station, scenic waterfalls, and historic forts in Krishna Heritage",
  },
  {
    icon: "fa-university",
    text: "Reliance to establish world-class university on 800 acres in Krishna Heritage",
  },
  {
    icon: "fa-ship",
    text: "RO-RO ferry service planned between Mumbai Bhaucha Dhakka and Uran Nava Seva",
  },
  {
    icon: "fa-train-subway",
    text: "Railway Harbour Line extension connects Panvel to Krishna Heritage through Mahape",
  },
  {
    icon: "fa-golf-ball-tee",
    text: "Located on Krishna Heritage Chauk Highway, 9 Aces Golf Greens Academy stands",
  },
  {
    icon: "fa-city",
    text: "NAINA covers 270 revenue villages including Krishna Heritage, Khalapur, and Pen",
  },
  {
    icon: "fa-star",
    text: "Celebrity farmhouses (Film Stars, Politicians, Cricketers) in Krishna Heritag and Khalapur",
  },
]

const Information = () => {
  return (
    <section className='team background'>
      <div className='container'>
        <Heading
          title='Why Krishna Heritage is the Perfect Choice'
          subtitle='Explore the booming real estate and lifestyle advantages of investing in Krishna Heritage.'
        />
        <div className='karjat-info grid2 mtop'>
          {highlights.map((item, index) => (
            <div className='info-box' key={index}>
              <i className={`fa-solid ${item.icon}`}></i>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Information
