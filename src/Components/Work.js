import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Choose a service to enhance the society",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "Fastest Delivery of the application",
    },
  ];
  return (
    <div className="work-section-wrapper" id="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How We Work</h1>
        <p className="primary-text">
        Exceptional service! Like the 'Naan Mudhalvan' scheme, your team truly prioritizes customers, providing top-notch support and assistance
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
