import adivinaLaPalabra from "../assets/images/adivinaLaPalabra.png";
import adivinaLaPalabra2 from "../assets/images/adivinaLaPalabra-2.png";
import adivinaLaPalabra4 from "../assets/images/adivinaLaPalabra-4.png";
import dolarinfohoy from "../assets/images/dolarinfohoy.png";
import dolarinfohoy2 from "../assets/images/dolarinfohoy-2.png";
import dolarinfohoy3 from "../assets/images/dolarinfohoy-3.png";
import dolarinfohoy4 from "../assets/images/dolarinfohoy-4.png";
import dolarinfohoy5 from "../assets/images/dolarinfohoy-5.png";
import teLoResumo from "../assets/images/teLoResumo.png";
import teLoResumo2 from "../assets/images/teLoResumo-2.png";
import teLoResumo3 from "../assets/images/teLoResumo-3.png";

// Ordenados de más reciente a más antiguo.
export const projects = [
  {
    id: 3,
    title: "Te lo resumo",
    date: "2026",
    description: "Resumidor con IA: subís un PDF, un link o un video de YouTube y devuelve un resumen claro, con un modo 'Plan de estudio' con mapa conceptual y preguntas. Lo hice para interiorizarme en arquitecturas de software. Lo más difícil fue la transcripción de YouTube.",
    images: [teLoResumo, teLoResumo2, teLoResumo3],
    alt: "Te lo resumo",
    techs: [".NET", "React", "Gemini", "Vercel"],
    github: "https://github.com/LautaroManzo/DocBrief",
    demo: "https://te-lo-resumo.vercel.app",
  },
  {
    id: 2,
    title: "Dólar info hoy",
    date: "2025",
    description: "Cotizaciones del dólar en tiempo real, con histórico y calculadora. Un flujo de n8n trae noticias, las resume con Gemini y las guarda en Supabase, y un bot de Telegram las manda a diario. Lo hice para aprender Next.js. Lo más difícil fue encontrar APIs que sirvieran.",
    images: [dolarinfohoy, dolarinfohoy5, dolarinfohoy2, dolarinfohoy3, dolarinfohoy4],
    alt: "Dólar info hoy",
    // Máximo 4: con más, el contenedor de chips parte en dos filas y a ciertos
    // anchos deja una sola cápsula huérfana en el segundo renglón. Next.js
    // queda afuera por React: alguien que escanea chips no infiere que
    // Next.js implica React si no conoce esa relación.
    techs: ["React", "n8n", "Supabase", "Gemini"],
    github: "https://github.com/LautaroManzo/dolar-hoy-lm",
    demo: "https://www.dolarinfohoy.com.ar/",
  },
  {
    id: 1,
    title: "Adiviná la palabra",
    date: "2024",
    description: "Mi propia versión de Wordle: jugaba al original y quise hacer una con algunos cambios y modos nuevos. Fue de los primeros proyectos que hice, para aprender. Lo que más me costó fue el despliegue, que terminé resolviendo con Docker.",
    images: [adivinaLaPalabra, adivinaLaPalabra2, adivinaLaPalabra4],
    alt: "Adiviná la palabra",
    techs: [".NET", "Razor", "PostgreSQL", "Docker"],
    github: "https://github.com/LautaroManzo/AdivinaLaPalabra",
    demo: "https://adivinalapalabra-fnb3.onrender.com/Aleatoria",
  },
];
