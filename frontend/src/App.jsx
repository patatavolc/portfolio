import "./App.css";
import { useTranslation } from "react-i18next";
import Header from "./components/Header/Header.jsx";
import DotGrid from "./components/DotGrid/DotGrid.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import TextType from "./components/TextType/TextType.jsx";
import Button from "./components/Button/Button.jsx";
import { projectsData } from "./data.js";
import ProjectCard from "./components/ProjectCard/ProjectCard.jsx";
import Contact from "./components/Contact/Contact.jsx";

export default function App() {
  const { t } = useTranslation();
  const cv_path =
    "https://drive.google.com/file/d/1JK-HAtxQFx-RWY4-MckOc6Lx2Q1kkUXA/view?usp=sharing";

  const ExternalLinkIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-external-link"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6" />
      <path d="M11 13l9 -9" />
      <path d="M15 4h5v5" />
    </svg>
  );

  const CvIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-file-cv"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
      <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
      <path d="M13 11l1.5 6l1.5 -6" />
    </svg>
  );

  const MailIcon = (props) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
      <path d="M3 7l9 6l9 -6" />
    </svg>
  );

  return (
    <div className="relative min-h-screen">
      {/* Fondo global */}
      <div className="fixed inset-0 -z-10">
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#271e37"
          activeColor="#84dcc6"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>

      {/* Contenido */}
      <Header />
      <section className="relative z-10 flex flex-col justify-center text-white overflow-hidden mt-50 mb-50">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            <span className="block text-white">{t("hero.title")}</span>
            <span className="block bg-linear-to-r from-[#FAD4D8] to-[#FC440F] bg-clip-text text-transparent">
              {t("hero.subtitle")}
            </span>
          </h1>

          <div className="text-lg">
            <TextType
              text={[
                t("hero.typing.text1"),
                t("hero.typing.text2"),
                t("hero.typing.text3"),
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </div>

          <p className="mt-6 text-lg text-gray-400 max-w-l">
            {t("hero.description")}
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              text={t("hero.projectsBtn")}
              href="#projects"
              IconComponent={ExternalLinkIcon}
            />
            <Button
              text={t("hero.contactBtn")}
              href="#contact"
              IconComponent={MailIcon}
            />
          </div>
        </div>
      </section>

      <section
        id="about"
        className=" relative z-10 flex flex-col justify-center text-white overflow-hidden mt-85"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h1 className=" text-3xl md:text-5xl font-extrabold leading-tight">
            <span className="block bg-linear-to-r from-[#fad4d8] to-[#fc440f] bg-clip-text text-center text-transparent">
              {t("about.title")}
            </span>
          </h1>

          <p className="mt-5 text-lg text-gray-400 text-center text-wrap max-w-l mb-5">
            {t("about.description")}
          </p>
          <div className="flex justify-center">
            <Button
              text={t("about.cvBtn")}
              href={cv_path}
              external
              IconComponent={CvIcon}
            />
          </div>
        </div>
      </section>

      <section className=" relative z-10 flex flex-col justify-center text-white overflow-hidden mt-85">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className=" text-3xl md:text-5xl font-extrabold leading-tight">
            <span
              id="projects"
              className="block bg-linear-to-r from-[#fad4d8] to-[#fc440f] bg-clip-text  text-center text-transparent"
            >
              {t("projects.title")}
            </span>
          </h1>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 mt-8 items-stretch">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 flex flex-col justify-center text-white overflow-hidden mt-85">
        <div>
          <h1 className=" text-3xl md:text-5xl font-extrabold leading-tight">
            <span
              id="contact"
              className="block bg-linear-to-r from-[#fad4d8] to-[#fc440f] bg-clip-text  text-center text-transparent"
            >
              {t("contact.title")}
            </span>
          </h1>
          <Contact />
        </div>
      </section>
      {/* Botón de volver arriba */}
      <ScrollToTop />
    </div>
  );
}
