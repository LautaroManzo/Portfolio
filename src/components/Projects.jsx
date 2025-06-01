import React from "react";

import AdivinaLaPalabra from "./CProjects/AdivinaLaPalabra";
import InProgress from "./CProjects/InProgress";

const Projects = () => {
  return (
    <div id="projects" className="w-full flex flex-col items-center gap-6 p-2 pt-6 backdrop-blur-[3px]">

      <div className="bg-[#4793AF] rounded-md w-full max-w-6xl px-6 shadow-lg">
        <h2 className="text-[22px] sm:text-4xl font-bold text-white py-4">
          Proyectos
        </h2>
      </div>

      <div className="w-full flex flex-col items-center gap-8 px-6 sm:px-6">
        <AdivinaLaPalabra />
        <InProgress />
      </div>

    </div>
  );
};

export default Projects;