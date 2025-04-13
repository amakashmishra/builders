import raiway from '../../assets/Images/raiway.jpg';
import expressway from '../../assets/Images/Mumbai-Pune-Expressway.jpg'
import airport from '../../assets/Images/airport.jpg'
import reliance from '../../assets/Images/reliance.jpg'
import dmart from '../../assets/Images/d-mart.jpg'

import plan1 from '../../assets/Images/plan1.jpg'
import plan2 from '../../assets/Images/pain2.jpg'
// import plan3 from '../../assets/Images/pain3.jpg'
// import plan4 from '../../assets/Images/pain4.jpg'
// import plan5 from '../../assets/Images/pain5.jpg'
// import plan6 from '../../assets/Images/pain6.jpg'

import img1 from '../../assets/Images/Img1.jpg'
import img2 from '../../assets/Images/img2.jpg'
import img3 from '../../assets/Images/img3.jpg'

import flat2 from '../../assets/Images/flat2.jpg'
import flat3 from '../../assets/Images/flat3.jpg'
import flat4 from '../../assets/Images/flat4.jpg'
import flat5 from '../../assets/Images/flat5.jpg'
import flat6 from '../../assets/Images/flat6.jpg'
import flat7 from '../../assets/Images/flat7.jpg'
import flat8 from '../../assets/Images/flat8.jpg'
import flat9 from '../../assets/Images/flat9.jpg'
import flat10 from '../../assets/Images/flat10.jpg'

// import loc1 from '../../assets/Images/loc1.jpg'
// import loc2 from '../../assets/Images/loc2.jpg'
// import loc3 from '../../assets/Images/loc3.png'
// import loc4 from '../../assets/Images/loc4.jpg'
// import loc5 from '../../assets/Images/loc5.jpg'
// import loc6 from '../../assets/Images/loc6.jpg'
// import loc7 from '../../assets/Images/loc7.jpg'
import loc8 from '../../assets/Images/loc8.jpg'
// import loc9 from '../../assets/Images/loc9.jpg'

import fir1 from '../../assets/Images/fir.jpg'
import fir2 from '../../assets/Images/fir1.jpeg'
// import fir3 from '../../assets/Images/fir2.jpg'
import fir4 from '../../assets/Images/fir3.webp'
import fir5 from '../../assets/Images/fir4.jpg'
import fir6 from '../../assets/Images/fir5.jpg'
import fir7 from '../../assets/Images/fir6.jpeg'

import sch from '../../assets/Images/sch.webp'
import sch1 from '../../assets/Images/sch1.jpg'
import sch2 from '../../assets/Images/sch2.webp'
import sch3 from '../../assets/Images/sch3.jpg'
import sch4 from '../../assets/Images/sch4.webp'

export const nav = [
  {
    text: "home",
    path: "/",
  },
  {
    text: "about",
    path: "/about",
  },
  {
    text: "services",
    path: "/services",
  },
  {
    text: "features",
    path: "/blog",
  },
  {
    text: "contact",
    path: "/contact",
  },
]
export const featured = [
  {
    cover: raiway,
    name: "Railway Station",
    total: "5 Min",
  },
  {
    cover: sch,
    name: "School",
    total: "5 Min",
  },
  {
    cover: sch1,
    name: "Hotel",
    total: "5 Min",
  },
  {
    cover: sch2,
    name: "Hospital",
    total: "5 Min",
  },
  {
    cover: dmart,
    name: "DMart",
    total: "5 Min",
  },
  {
    cover: expressway,
    name: "Mumbai Pune Expressway",
    total: "15 Min",
  },
  {
    cover: sch3,
    name: "Fire Station",
    total: "5 Min",
  },
  {
    cover: airport,
    name: "Navi Mumbai Airport",
    total: "30 Min",
  },
  {
    cover: sch4,
    name: "Garden & Play Area",
    total: "5 Min",
  },
  {
    cover: reliance,
    name: "Reliance Petrol Pump",
    total: "3 Min",
  },
]
export const list = [
  {
    id: 1,
    cover: img1,
    cover2: flat2,
    cover3: flat9,
    name: "Krishna Heritage",
    location: "Spacious 1bhk, 2bhk & Commercial Shops",
  },
  {
    id: 2,
    cover: img2,
    cover1: plan1,
    cover2: plan2,
    name: "Krishna Heritage",
    location: "Vaastu-Compliant Layouts",
  },
  {
    id: 3,
    cover: img3,
    cover1: flat7,
    cover2: flat8,
    name: "Krishna Heritage",
    location: "Premium Quality Construction",
  },
  {
    id: 4,
    cover: flat3,
    cover1: flat4,
    cover2: flat5,
    cover3: flat6,
    cover4: flat10,
    name: "Krishna Heritage",
    location: "Ample Parking Space",
  },
]
export const awards = [
  {
    icon: <i className="fa-solid fa-people-roof"></i>, // Represents community/family
    num: "100+",
    name: "Happy Families",
  },
  {
    icon: <i className="fa-solid fa-briefcase-clock"></i>, // Represents experience over years
    num: "5+ Years",
    name: "Trusted Service",
  },
  {
    icon: <i className="fa-solid fa-building-circle-check"></i>, // Represents quality construction
    num: "A+ Grade",
    name: "High-Quality Construction",
  },
  {
    icon: <i className="fa-solid fa-face-smile"></i>, // Represents satisfaction
    num: "98%",
    name: "Resident Satisfaction",
  },
];

export const location = [
  {
    id: 1,
    name: "Fire Security",
    Villas: "Fire alarms and extinguishers",
    Apartments: "Sprinklers and fire panels",
    Offices: "Fire system with exits",
    cover: fir1,
  },
  {
    id: 2,
    name: "Covered Car Parking",
    Villas: "Private parking space",
    Apartments: "Allotted parking spots",
    Offices: "Staff and visitor parking",
    cover: fir2,
  },
  {
    id: 4,
    name: "Power Back Up",
    Villas: "Inverter provision",
    Apartments: "Backup for common areas",
    Offices: "Full power backup",
    cover: fir4,
  },
  {
    id: 5,
    name: "24 X 7 Water Supply",
    Villas: "Overhead tank system",
    Apartments: "Dual water source",
    Offices: "Auto water supply",
    cover: loc8,
  },
  {
    id: 6,
    name: "Rain Water Harvesting",
    Villas: "Water collection pits",
    Apartments: "Central system setup",
    Offices: "Recharge setup in place",
    cover: fir5,
  },
  {
    id: 7,
    name: "24 X 7 Security",
    Villas: "CCTV and video door phone",
    Apartments: "Guards and cameras",
    Offices: "Secure entry system",
    cover: fir6,
  },
  {
    id: 8,
    name: "Lift",
    Villas: "Optional private lift",
    Apartments: "Backup-enabled lifts",
    Offices: "Commercial elevators",
    cover: fir7,
  },
];


export const team = [
  {
    list: "50",
    cover: "../images/customer/team-1.jpg",
    address: "Liverpool, Canada",
    name: "Sargam S. Singh",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    list: "70",
    cover: "../images/customer/team-2.jpg",
    address: "Montreal, Canada",
    name: "Harijeet M. Siller",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    list: "80",
    cover: "../images/customer/team-3.jpg",
    address: "Denever, USA",
    name: "Anna K. Young",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    list: "51",
    cover: "../images/customer/team-4.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    list: "42",
    cover: "../images/customer/team-5.jpg",
    address: "2272 Briarwood Drive",
    name: "Michael P. Grimaldo",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
  {
    list: "38",
    cover: "../images/customer/team-5.jpg",
    address: "Montreal, USA",
    name: "Adam K. Jollio",
    icon: [<i class='fa-brands fa-facebook-f'></i>, <i class='fa-brands fa-linkedin'></i>, <i class='fa-brands fa-twitter'></i>, <i class='fa-brands fa-instagram'></i>],
  },
]
export const price = [
  {
    plan: "Basic",
    price: "29",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "120GB CDN Bandwidth",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "5GB Cloud Storage",
      },
      { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Personal Help Support" },
      { change: "color", icon: <i class='fa-solid fa-x'></i>, text: "Enterprise SLA" },
    ],
  },
  {
    best: "Best Value",
    plan: "Standard",
    price: "49",
    ptext: "per user, per month",
    list: [
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "99.5% Uptime Guarantee",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "150GB CDN Bandwidth",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "10GB Cloud Storage",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "Personal Help Support",
      },
      {
        change: "color",
        icon: <i class='fa-solid fa-x'></i>,
        text: "Enterprise SLA",
      },
    ],
  },
  {
    plan: "Platinum",
    price: "79",
    ptext: "2 user, per month",
    list: [
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "100% Uptime Guarantee",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "200GB CDN Bandwidth",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "20GB Cloud Storage",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "Personal Help Support",
      },
      {
        icon: <i class='fa-solid fa-check'></i>,
        text: "Enterprise SLA",
      },
    ],
  },
]
export const footer = [
  {
    title: "All Sections",
    text: [{ list: "Home Page", path: "/" }, { list: "About Page", path: "/about" }, { list: "Service Page", path: "/services" }, { list: "Feature Page", path: "/blog" }, { list: "Contact Page", path: "/contact" }],
  }
]
