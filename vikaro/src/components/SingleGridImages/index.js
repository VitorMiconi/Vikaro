import React from "react";

const SingleGridImages = ({ image1, image2, image3, image4, p }) => {
  return (
    <div className="w-full py-6 px-6 font-montserrat text-white">
      <div className="grid grid-cols-2 gap-6 w-full">
        <img src={image1} alt="1" className="w-full" />
        <img src={image2} alt="2" className="w-full" />
        <img src={image3} alt="3" className="w-full" />
        <img src={image4} alt="4" className="w-full" />
      </div>
      <div className="py-6"> 
        <p>{p}</p>
        <div className="flex w-full justify-end">
            <img src="./img/signature.svg"></img>
        </div>
      </div>
    </div>
  );
};

export default SingleGridImages;
