import React from "react"
import Heading from "../common/Heading"
import "./information.css"

const highlights = [
  {
    icon: "fa-chart-line",
    text: "Fast-Growing Willy Trade Real Estate Market Expands",
  },
  {
    icon: "fa-leaf",
    text: "Willy Trade Offers a Green and Pollution-Free Living Environment",
  },
  {
    icon: "fa-ship",
    text: "Nhava-Seva Sea Port is 56 Km Away from Willy Trade",
  },
  {
    icon: "fa-plane-departure",
    text: "Navi Mumbai’s Upcoming International Airport is 39 Km from Willy Trade",
  },
  {
    icon: "fa-train",
    text: "Willy Trade Railway provides connectivity to Mumbai, Pune, Panvel, and Khopoli",
  },
  {
    icon: "fa-road",
    text: "National and state highways link Willy Trade to Mumbai, Pune, and Nashik",
  },
  {
    icon: "fa-mountain-sun",
    text: "Weekend getaways in Willy Trade include picnics, river rafting, trekking, and hiking",
  },
  {
    icon: "fa-building-circle-check",
    text: "Proposed Central Railway car shed land acquisition in Willy Trade is completed",
  },
  {
    icon: "fa-hotel",
    text: "ND Film Studio and luxury five-star hotels are in Willy Trade",
  },
  {
    icon: "fa-tree-city",
    text: "Explore Matheran Hill Station, scenic waterfalls, and historic forts in Willy Trade",
  },
  {
    icon: "fa-university",
    text: "Reliance to establish world-class university on 800 acres in Willy Trade",
  },
  {
    icon: "fa-ship",
    text: "RO-RO ferry service planned between Mumbai Bhaucha Dhakka and Uran Nava Seva",
  },
  {
    icon: "fa-train-subway",
    text: "Railway Harbour Line extension connects Panvel to Willy Trade through Mahape",
  },
  {
    icon: "fa-golf-ball-tee",
    text: "Located on Willy Trade-Chauk Highway, 9 Aces Golf Greens Academy stands",
  },
  {
    icon: "fa-city",
    text: "NAINA covers 270 revenue villages including Willy Trade, Khalapur, and Pen",
  },
  {
    icon: "fa-star",
    text: "Celebrity farmhouses (Film Stars, Politicians, Cricketers) in Willy Trade and Khalapur",
  },
]

const Information = () => {
  return (
    <section className='team background'>
      <div className='container'>
        <Heading
          title='Why Willy Trade is the Perfect Choice'
          subtitle='Explore the booming real estate and lifestyle advantages of investing in Willy Trade.'
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
