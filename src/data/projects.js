import adivinaLaPalabra from "../assets/images/adivinaLaPalabra.png";
import dolarinfohoy from "../assets/images/dolarinfohoy.png";

export const projects = [
  {
    id: 1,
    title: "Adiviná la palabra",
    description: "Juego de adivinanza de palabras inspirado en Wordle. El jugador tiene 6 intentos para descubrir la palabra del día, con feedback visual en cada intento.",
    image: adivinaLaPalabra,
    alt: "Adiviná la palabra",
    objectPosition: "center",
    techs: [".NET Core", "PostgreSQL", "jQuery", "Bootstrap"],
    github: "https://github.com/LautaroManzo/AdivinaLaPalabra",
    demo: "https://adivinalapalabra-fnb3.onrender.com/Aleatoria",
  },
  {
    id: 2,
    title: "Dólar info hoy",
    description: "Plataforma web con cotizaciones del dólar en tiempo real (oficial, blue, MEP, CCL, cripto y más), calculadora de conversión entre pesos y dólares, y sección de noticias económicas reales generadas automáticamente con IA.",
    image: dolarinfohoy,
    alt: "Dólar info hoy",
    techs: ["Next.js", "React", "Tailwind CSS", "N8N"],
    github: "https://github.com/LautaroManzo/dolar-hoy-lm",
    demo: "https://www.dolarinfohoy.com.ar/",
  },
  {
    id: 3,
    title: "Próximamente",
    description: "Un nuevo proyecto toma forma. Estará disponible próximamente.",
    image: null,
    alt: "En desarrollo",
    techs: [],
    github: null,
    demo: null,
  },
];
