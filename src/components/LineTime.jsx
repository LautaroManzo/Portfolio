import React from "react";

import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaCircle } from "react-icons/fa";

const LineTime = () => {

  const timelineItems = [
    {
      time: "Febrero 2023 - Presente",
      title: "Desarrollador .NET",
      body: "EMMSA IT Services",
    },
    {
      time: "Septiembre 2022 - Febrero 2023",
      title: "Pasante",
      body: "EMMSA IT Services",
    },
    {
      time: "2021 - 2023",
      title: "Técnico Superior en Programación",
      body: "UTN - Universidad Tecnológica Nacional",
    },
    {
      time: "Octubre 2020 - Diciembre 2020",
      title: "Curso de HTML5, CSS3 y JavaScript",
      body: "UTN BA - Facultad Regional Buenos Aires",
    },
    {
      time: "2019 - 2020",
      title: "Ayudante de Reparación y Pintura Automotriz",
      body: "Taller El Podio",
    },
    {
      time: "2013 - 2019",
      title: "Técnico en Automotores",
      body: "Escuela Técnica N°3 Domingo Faustino Sarmiento",
    }
  ];

  return (
    <div id="timeline" className="w-full p-2 backdrop-blur-[3px]">

        <div className="bg-[#4793AF] rounded-md mb-10 shadow-lg">
          <h2 className="text-[22px] sm:text-4xl font-bold text-white px-6 py-4">
            Formación y experiencia
          </h2>
        </div>
        
        <VerticalTimeline lineColor="#4793AF" className="!p-0">

          {timelineItems.map((item, index) => (

            <VerticalTimelineElement
              key={index} date={item.time}
              contentStyle={{
                padding: "1rem 1.5rem 1rem 1.5rem",
                borderRadius: "12px",
                background: "white",
                color: "black",
              }}
              contentArrowStyle={{ borderRight: "7px solid white" }}
              icon={<FaCircle color="#4793AF" />}
              iconStyle={{ boxShadow: "none" }}
            >
              <h2 className="font-bold">{item.title}</h2>
              <p className="!m-0">{item.body}</p>
            </VerticalTimelineElement>
          
          ))}

        </VerticalTimeline>

    </div>
  );

};

export default LineTime;