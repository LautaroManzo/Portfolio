import adivinaLaPalabra from "../assets/images/adivinaLaPalabra.png";
import dolarinfohoy from "../assets/images/dolarinfohoy.png";
import teLoResumo from "../assets/images/teLoResumo.png";

// Ordenados de más reciente a más antiguo.
export const projects = [
  {
    id: 3,
    title: "Te lo resumo",
    date: "2026",
    description: "Resumidor con IA: subís un PDF, Word, texto, un link o un video de YouTube y devuelve un resumen claro, con un modo 'Plan de estudio' (mapa conceptual y preguntas). En producción uso Gemini, por su plan gratuito. Lo hice para inventar algo propio y aprender sobre arquitecturas de software; lo más difícil fue la transcripción de YouTube.",
    image: teLoResumo,
    alt: "Te lo resumo",
    techs: [".NET", "React", "Gemini", "Vercel"],
    github: "https://github.com/LautaroManzo/DocBrief",
    demo: "https://te-lo-resumo.vercel.app",
  },
  {
    id: 2,
    title: "Dólar info hoy",
    date: "2025",
    description: "Cotizaciones del dólar en tiempo real, con histórico y calculadora. Un flujo de n8n trae noticias de NewsAPI, las resume con Gemini y las guarda en Supabase, y un bot de Telegram manda las cotizaciones a diario. Lo hice para aprender Next.js y probar un deploy más ágil que en C#; lo más difícil fue encontrar APIs que devolvieran lo que necesitaba.",
    image: dolarinfohoy,
    alt: "Dólar info hoy",
    // Máximo 4: con más, el contenedor de chips parte en dos filas y a ciertos
    // anchos deja una sola cápsula huérfana en el segundo renglón. n8n y
    // Tailwind quedan fuera porque n8n ya se nombra en la descripción y Tailwind
    // no distingue nada. Next.js queda afuera por React: alguien que escanea
    // chips no infiere que Next.js implica React si no conoce esa relación.
    techs: ["React", "TypeScript", "Supabase", "Gemini"],
    github: "https://github.com/LautaroManzo/dolar-hoy-lm",
    demo: "https://www.dolarinfohoy.com.ar/",
  },
  {
    id: 1,
    title: "Adiviná la palabra",
    date: "2024",
    description: "Mi propia versión de Wordle: jugaba al original y quise hacer una con algunos cambios y modos nuevos. Fue de los primeros proyectos que hice, para aprender. Lo que más me costó fue el despliegue, que terminé resolviendo con Docker.",
    image: adivinaLaPalabra,
    alt: "Adiviná la palabra",
    techs: [".NET", "Razor", "PostgreSQL", "Docker"],
    github: "https://github.com/LautaroManzo/AdivinaLaPalabra",
    demo: "https://adivinalapalabra-fnb3.onrender.com/Aleatoria",
  },
];
