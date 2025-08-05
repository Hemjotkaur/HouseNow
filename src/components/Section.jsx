import React from "react";
import "./Section.css";
import house from "../assets/Group 25.png";

const Section = () => {
  const cardData = [
    {
      image: house,
      title: "Buy a home",
      content:
        "Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.",
      button: "Buy Now",
    },
    {
      image: house,
      title: "Rent a home",
      content:
        "We’re creating a seamless online experience – from shopping on the largest rental network to applying and paying rent.",
      button: "Rent Now",
    },
    {
      image: house,
      title: "Sell a home",
      content:
        "No matter what path you take to sell your home, we can help you navigate a successful sale.",
      button: "Sell Now",
    },
  ];

  return (
    <div className="section">
      <div className="main_text">our services</div>
      <div className="heading_text_section">
        We have the most listings and constant updates.So <br />  you’ll never
        miss out.
      </div>

      <div className="card_list">
        {cardData.map((card, index) => (
          <div className="section_item_card" key={index}>
            <div className="main_logo">
              <img src={card.image} alt="" />
            </div>
            <div className="text">{card.title}</div>
            <div className="content">{card.content}</div>
            <div className="card_btn">
              <button>{card.button}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section;
