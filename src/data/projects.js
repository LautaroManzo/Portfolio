import adivinaLaPalabra from "../assets/images/adivinaLaPalabra.png";
import workInProgress from "../assets/images/workInProgress.jpg";

export const projects = [
  {
    id: 1,
    title: "Adiviná la palabra",
    description: "Juego de adivinanza de palabras inspirado en Wordle.",
    image: adivinaLaPalabra,
    alt: "Adiviná la palabra",
    techs: [".NET Core", "PostgreSQL", "jQuery", "Bootstrap"],
    github: "https://github.com/LautaroManzo/AdivinaLaPalabra",
    demo: "https://adivinalapalabra-fnb3.onrender.com/Aleatoria",
    direction: "left",
  },
  {
    id: 2,
    title: "Próximamente",
    description: "Actualmente en desarrollo, estará disponible muy pronto.",
    image: workInProgress,
    alt: "En desarrollo",
    techs: [],
    github: null,
    demo: null,
    direction: "right",
    footer: "Actualización pendiente",
  },
];
