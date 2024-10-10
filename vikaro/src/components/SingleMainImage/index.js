import React from "react";

const SingleMainImage = ({ image, p1, p2, p3 }) => {
  return (
    <div className="flex-grow flex flex-col justify-center py-6 px-6 mt-12">
      <img src={image} alt="Main" />
      <div className="flex flex-col gap-6 font-montserrat text-white py-6">
        <p>{p1}</p>
        <p>{p2}</p>
        <p>{p3}</p>
      </div>
    </div>
  );
};

export default SingleMainImage;
