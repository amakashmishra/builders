import React from "react";

const Card = () => {
  const configurations = [
    { type: '1 BHK', area: 'Available' },
    { type: '2 BHK', area: 'Available' },
    { type: 'Commercial Shops', area: 'Limited' },
  ];

  const handleWhatsAppClick = (type) => {
    const phoneNumber = "918087287499"; // Indian number with country code
    const message = `Hi, I am interested in your ${type} property. Please share more details.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className='content grid5 mtop'>
      {configurations.map((item, index) => (
        <div className='box shadow' key={index}>
          <h4 className='text-lg font-bold'>{item.type}</h4>
          <p className='text-sm text-gray-600 mb-2'>{item.area}</p>
          <button
            className='btn'
            onClick={() => handleWhatsAppClick(item.type)}
          >
            Enquire Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default Card;
