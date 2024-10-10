import ProjectSquare from "../ProjectSquare"

import React from "react";

const SingleMoreProjects = ({ image, p1, p2, p3 }) => {
  return (
    <div className=" flex flex-col gap-6 py-6 px-6">
        <h2 className="font-lemon font-light text-white">VER OUTROS PROJETOS</h2>
        <div className="flex flex-col lg:flex-row justify-center gap-6">
            <ProjectSquare backgroundClass="bg-custom-pj-4">ELEVE</ProjectSquare>
            <ProjectSquare backgroundClass="bg-custom-pj-4">ASCEND</ProjectSquare>
            <ProjectSquare backgroundClass="bg-custom-pj-4">SOAR</ProjectSquare>
        </div>
    </div>
  );
};

export default SingleMoreProjects;
