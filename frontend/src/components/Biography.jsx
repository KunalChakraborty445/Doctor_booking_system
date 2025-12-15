import React from "react";

const Biography = ({ imageUrl }) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>Digital Solution for Smarter Healthcare</p>
          <p>
            Founded in 2004, our hospital has been committed to delivering
            high-quality, affordable, and compassionate healthcare to the
            community. What began as a small medical clinic has grown into a
            trusted healthcare institution equipped with modern facilities and
            experienced medical professionals. 
          </p>
          <p>
            We focus on patient-centered care
            by combining advanced medical technology with personalized
            treatment. Our hospital management system ensures accurate records,
            efficient workflows, and seamless coordination between doctors,
            staff, and patients. Over the years, we have earned the trust of
            thousands of patients through ethical practices, continuous
            improvement, and dedication to excellence in healthcare services.
          </p>
          
        </div>
      </div>
    </>
  );
};

export default Biography;
