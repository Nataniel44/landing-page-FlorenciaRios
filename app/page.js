import Image from "next/image";
import ValentineCountdown from "./components/ValentineCountdown";
import { Italianno } from "next/font/google";
import WorkSample from "./components/WorkSample";
const italianno = Italianno({
  weight: "400",
  subsets: ["latin"],
});
export default function Home() {
  const workSamples = [
    {
      title: "Book XV",
      images: [
        { src: "/book1.jpg", alt: "Quinceañera en exteriores" },
        { src: "/book2.jpg", alt: "Pose elegante de quinceañera" },
        { src: "/book3.jpg", alt: "Quinceañera con flores" },
      ],
    },
    {
      title: "Acto Colación",
      images: [
        { src: "/acto1.jpg", alt: "Graduados celebrando" },
        { src: "/acto3.jpg", alt: "Ceremonia de graduación" },
      ],
    },
    {
      title: "Recepción",
      images: [
        { src: "/rece1.jpg", alt: "Decoración de recepción" },
        { src: "/rece2.jpg", alt: "Invitados en la recepción" },
      ],
    },
  ];

  return (
    <div className="dark:text-white">
      <main className="max-w-screen-md mx-auto md:p-5 flex flex-col gap-5 p-5">
        <header className="flex relative">
          <div className="border-solid w-72 h-72 md:w-72 md:h-72 rounded-full border-pink-400/35 border absolute -left-0 top-10"></div>
          <div className="border-solid w-72 h-72 rounded-full border-pink-400/10 border absolute -right-0 bottom-10"></div>
          <div className="border-solid w-72 h-72 rounded-full border-pink-400/10 border absolute -left-0 -bottom-16"></div>
          <div className="border-solid w-72 h-72 rounded-full border-pink-400/10 border absolute -right-0 -bottom-28"></div>
          <div className="z-30 flex justify-center items-center gap-10 md:flex-row flex-col w-full py-10">
            <div>
              <Image
                src="/flor.jpeg"
                alt="Florencia Rios"
                width={240}
                height={240}
                className="rounded-full aspect-square object-cover border border-pink-300"
              />
            </div>
            <div className="text-center md:text-start gap-1 flex flex-col ">
              <h1 className={` text-4xl font-extrabold md:text-5xl `}>
                Florencia Rios
              </h1>
              <h2>
                <span
                  className={`${italianno.className} text-pink-300 text-5xl font-bold md:text-6xl `}
                >
                  Fotografías
                </span>
              </h2>
              <a
                className="font-extrabold hover:text-pink-200 text-pink-300 uppercase text-lg md:text-xl underline mt-3"
                href="https://wa.me/+543755714107"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contacto
              </a>
            </div>
          </div>
        </header>

        <ValentineCountdown />

        <section className="flex flex-col bg-white/5 backdrop-blur-sm w-full items-center justify-center md:flex-row gap-5 rounded-lg p-5">
          <div className="flex-col flex items-start justify-center gap-3">
            <div className="w-full">
              <h2 className="text-4xl font-extrabold">Sobre Mí</h2>
              <div className="border border-white w-full"></div>
            </div>
            <p className="text-pretty text-lg">
              Me llamo Rios,{" "}
              <span className="font-bold text-pink-300">Florencia Belen</span>.
              Me apasiona la Fotografía y la creación de contenido audiovisual.
              <br /> <br /> Actualmente estoy cursando la carrera:{" "}
              <span className="font-bold text-pink-300">
                Medios Audiovisuales y Fotografía
              </span>
              , en la Facultad de Artes - UNAM. Cuento con experiencia en:
              Books, 15 años, Egresados, etc.
              <br />
            </p>
            <span className="font-bold text-pink-300 text-2xl">
              ¡Espero que te guste mi trabajo!
            </span>
          </div>
        </section>
        <section className="flex flex-col items-start justify-start gap-5">
          <div className="flex-col">
            <h2 className="text-4xl font-extrabold">Trabajos realizados</h2>

            {workSamples.map((sample, index) => (
              <WorkSample
                key={index}
                title={sample.title}
                images={sample.images}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
