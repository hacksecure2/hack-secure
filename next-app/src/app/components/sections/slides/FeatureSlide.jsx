import React from "react";

const FeatureSlide = ({ data }) => {
  if (!data) {
    console.log("slide", data);
    return null;
  }

  return (
    <div>
      <h3>{data.head}</h3>
      <h4>{data.title}</h4>
      <p>{data.description}</p>
    </div>
  );
};

export default FeatureSlide;