import Head from "next/head";
import React, { useRef } from "react";
import Pulse from "react-reveal/Pulse";
import Jello from "react-reveal/Jello";
import Projects from "../components/projects";
export default function Home() {
  const aboutRef = useRef();
  const techRef = useRef();
  const projectRef = useRef();
  return (
    <div className="h-full w-full bg-gradient-radial from-[#1B2735] to-[#090A0F] relative">
      <Head>
        <title>My Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300&display=swap"
          rel="stylesheet"
        />
        <meta name="title" content="Harjot's Portfolio" />
        <meta
          name="description"
          content="My personal Portfolio. I am a web developer."
        />
        <meta name="keywords" content="web,react,next,js,css,html,portfolio" />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="1 days" />
        <meta name="author" content="Harjot Singh" />
      </Head>
      <img
        src="https://i.gifer.com/7V7.gif"
        className="absolute hidden lg:flex right-12 top-36 w-96 hue-rotate-[330deg] brightness-90 saturate-150 selection:caret-transparent "
        onContextMenu={(e) => e.preventDefault()}
        draggable="false"
      />

      <img
        src="http://pa1.narvii.com/7312/ecee77d81170a23dcfb4a927581f2cb925689bf2r1-600-848_00.gif"
        className="absolute sm:hidden w-full top-24 selection:caret-transparent rotate-180 opacity-40"
        onContextMenu={(e) => e.preventDefault()}
        draggable="false"
      />

      <div className="flex justify-between items-center pt-3 ">
        <h1 className="text-white pl-6 text-3xl selection:bg-[#6fb5b64e]">
          𝓱𝓪𝓻<span className="text-green-500 text-xs">⦿</span>𝓳𝓸𝓽
        </h1>
        <div className="space-x-3 pr-3 flex">
          <a href="https://github.com/ajuu-vroo">
            <img
              src="/static/GitHub-Mark-Light-64px.png"
              className="h-6 w-6 hover:scale-100 duration-300 scale-90 cursor-pointer selection:text-transparent"
              draggable="false"
            />
          </a>
          <a href="https://www.instagram.com/ajuu_vroo/">
            <img
              src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-background-hd-3.png"
              className="h-6 w-6 grayscale invert brightness-0 hover:grayscale-0 hover:invert-0 hover:brightness-100 cursor-pointer hover:scale-100 duration-300 scale-90 selection:text-transparent"
              draggable="false"
            />
          </a>
          <a href="https://www.linkedin.com/in/harjot-singh-25646b218/">
            <img
              src="https://www.freepnglogos.com/uploads/official-linkedin-logo----17.png"
              className="h-6 w-6 grayscale invert brightness-0 hover:grayscale-0 hover:invert-0 hover:brightness-100 cursor-pointer hover:scale-100 duration-300 scale-90 selection:text-transparent"
              draggable="false"
            />
          </a>
        </div>
      </div>
      <li className="text-white space-x-2 flex mt-5 justify-center md:-mt-6 md:space-x-6 font-ubuntu selection:bg-[#6fb5b64e] ">
        <div className="group cursor-pointer ">
          <ul
            className="font-medium text-[#ffffffcb]"
            onClick={() =>
              aboutRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            About Me
          </ul>
          <div className="h-[2px] rounded-full w-full bg-green-500   group-hover:flex scale-x-0 group-hover:scale-x-100 transition-all duration-[450ms] origin-left" />
        </div>

        <div className="h-6 w-[2px] bg-white" />
        <div className="group cursor-pointer">
          <ul
            className="font-medium text-[#ffffffcb]"
            onClick={() =>
              techRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Technologies
          </ul>
          <div className="h-[2px] rounded-full w-full bg-green-500 group-hover:flex scale-x-0 group-hover:scale-x-100 transition-all duration-[450ms] origin-left" />
        </div>

        <div className="h-6 w-[2px] bg-white" />
        <div className="group cursor-pointer">
          <ul
            className="font-medium text-[#ffffffcb]"
            onClick={() =>
              projectRef.current.scrollIntoView({ behavior: "smooth" })
            }
          >
            Live Projects
          </ul>
          <div className="h-[2px] rounded-full w-full bg-green-500 group-hover:flex scale-x-0 group-hover:scale-x-100 transition-all duration-[450ms] origin-left" />
        </div>
      </li>

      <div className="text-left pt-8 pl-6 text-3xl font-medium brightness-150 md:text-6xl md:pl-44 md:pt-28 md:w-[600px] lg:w-[900px] font-lato pr-4 selection:bg-[#6fb5b64e]">
        <Pulse>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#38495a]">
            HELLO,
          </h1>
          <h1 className="text-transparent bg-clip-text bg-gradient-to-b from-white to-[#38495a] pb-1">
            I am Harjot Singh.
          </h1>
        </Pulse>
        <h1 className="text-base text-[#94d1e2c6] mt-4 font-light tracking-wider pr-3 md:text-xl md:mt-10 selection:bg-[#6fb5b64e]">
          I am a Delhi-based(India) freelancer developer. <br />I am new yet
          possess a diverse set of skills ranging from front-end to back-end. I
          am quite fascinated by the flourishing JAM-stack technology and can
          build gorgeous-looking web-apps with NextJs for you. :)
        </h1>
        <a href="mailto: harjot9singh@gmail.com">
          <button className=" h-10 w-full rounded-full bg-gradient-to-r from-green-600 to-purple-600 text-white font-bold pb-1 hover:hue-rotate-90 transition-all ease-in-out duration-300 md:h-14 md:text-2xl md:w-52 mt-10">
            email me
          </button>
        </a>
        <a href="/resume.pdf">
          <button className="md:ml-10 h-10 w-full rounded-full border-white border-2 text-white font-bold pb-1 hover:hue-rotate-90 transition-all ease-in-out duration-300 md:h-14 md:text-2xl md:w-52 mt-10">
            view CV
          </button>
        </a>
      </div>
      <div
        className=" mt-[90px] h-screen pl-6 md:w-[600px] lg:w-[900px] md:pl-44"
        ref={aboutRef}
      >
        <h1 className="text-[#ffffffaf] text-3xl font-bold pt-3 font-lato selection:bg-[#6fb5b64e]">
          About Me
        </h1>
        <div className="h-1 w-44 bg-gradient-radial from-green-500 to-purple-500 rounded-full mt-1" />
        <h1 className="text-base text-[#bdd2d8d7] tracking-wider font-light pr-3 mt-4 md:text-xl md:mt-10 selection:bg-[#6fb5b64e]">
          I am a self-learned web developer. I started my journey in december
          2020 when it was lockdown in India. I started learning HTML & CSS.
          After a month of honing these skills, I dived into JavaScript and
          learnt basic JS followed by its frontend framework React. So far I am
          in <span className="font-bold text-green-500">love</span> with react
          and its{" "}
          <span className="font-bold text-green-500">'Production-ready'</span>{" "}
          version, NextJs.
        </h1>
        <h1 className="text-[#ffffffaf] text-2xl font-bold pt-8 font-lato selection:bg-[#6fb5b64e]">
          Why I chose NextJs over ReactJs
        </h1>
        <h1 className="text-base text-[#bdd2d8d7] tracking-wider font-light pr-3 mt-4 md:text-xl md:mt-10 selection:bg-[#6fb5b64e]">
          The problem with <span className="font-bold text-green-500">SEO</span>{" "}
          in React is that the application cannot be properly indexed by search
          engines.
          <span className="font-bold text-green-500">Next.js</span> is a React
          framework for building statically generated and server-rendered React
          applications. It comes with a lot of benefits to help us create and
          scale our applications, such as zero-configuration, automatic
          code-splitting, ready for production, static exporting, etc. With
          Next.js we can achieve a nice{" "}
          <span className="font-bold text-green-500">SEO</span> result with
          simple steps.{" "}
        </h1>
      </div>
      <div
        className="h-screen pl-6 w-80 md:w-[600px] lg:w-[900px] md:pl-44 -mt-20 lg:mt-0"
        ref={techRef}
      >
        <h1 className="text-[#ffffffaf] text-3xl font-bold pt-3 font-lato selection:bg-[#6fb5b64e]">
          Technologies
        </h1>
        <div className="h-1 w-44 bg-gradient-radial from-green-500 to-purple-500 rounded-full mt-1" />
        <h1 className="text-base text-[#bdd2d8d7] tracking-wider font-light pr-3 mt-4 md:text-xl md:mt-10 selection:bg-[#6fb5b64e]">
          I have used HTML, CSS and vanilla JS to make websites in good old way.
          But now I am tilted towards JS framework because they are fast in
          performance and much more easy to build complex structures.
        </h1>
        <div className="flex flex-col mt-10 space-y-10 selection:bg-[#6fb5b64e]">
          <div className="flex space-x-5">
            <Jello>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z"
                  clipRule="evenodd"
                />
              </svg>
              <div className="text-[#ffffffde] space-y-2">
                <h1 className="text-2xl font-ubuntu font-bold ">Front-End</h1>
                <h1>
                  Experience with
                  <br /> HTML5, CSS3, React, TailwindCSS.
                </h1>
              </div>
            </Jello>
          </div>
          <div className="flex space-x-5">
            <Jello>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z" />
                <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z" />
                <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z" />
              </svg>
              <div className=" space-y-2 text-[#ffffffde]">
                <h1 className="text-2xl font-ubuntu font-bold">Back-End</h1>
                <h1>
                  {" "}
                  Experience with <br /> Node.js, MongoDB, ExpressJs.
                </h1>
              </div>
            </Jello>
          </div>
          <div className="flex space-x-5">
            <Jello>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-.5a1.5 1.5 0 000 3h.5a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-.5a1.5 1.5 0 00-3 0v.5a1 1 0 01-1 1H6a1 1 0 01-1-1v-3a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H4a1 1 0 001-1V6a1 1 0 011-1h3a1 1 0 001-1v-.5z" />
              </svg>
              <div className="text-[#ffffffde] space-y-2">
                <h1 className="text-2xl font-ubuntu font-bold">JAM-Stack</h1>
                <h1>
                  Experience with <br /> NextJs, and headless CMS like
                  Contentful and Strapi.
                </h1>
              </div>
            </Jello>
          </div>
        </div>
      </div>
      <div className="h-full pl-6 -mt-20 lg:mt-0" ref={projectRef}>
        <h1 className="text-[#ffffffaf] text-3xl font-bold pt-3 font-lato selection:bg-[#6fb5b64e] md:pl-36">
          Projects
        </h1>
        <div className="h-1 md:ml-36 w-44 bg-gradient-radial from-green-500 to-purple-500 rounded-full mt-1" />
        <div className="grid grid-cols-1 gap-4 last:pb-4 pr-6 pt-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          <Projects
            title={"NewsStop - News app"}
            content={
              "My first project in NEXT.JS. A simple website which fetches JSON data from famous NewsAPI and displays the news form all over the world. Type in the given searchbox to find news of your choice."
            }
            techArray={["HTML5", "CSS3", "Next.js"]}
            sourceCode={"https://github.com/ajuu-vroo/Next-NewsStop"}
            liveCode={"https://newsstop.vercel.app/"}
            projectThumbnail={"/newsStop.png"}
          />
          <Projects
            title={"Hulu Clone"}
            content={
              "Made with React as the frontend framework, this is the front-end design of famous movie and TV shows streaming platform HULU."
            }
            techArray={["React.js", "TailwindCSS", "TMDB API"]}
            sourceCode={"https://github.com/ajuu-vroo/Hulu-clone"}
            liveCode={"https://hulu-ajuu.vercel.app/"}
            projectThumbnail={"/huluClone.png"}
          />
          <Projects
            title={"PokeDex-Pokemon info"}
            content={
              <p>
                Another WebApp which fetches data in JSON format from pokeApi.
                Try{" "}
                <a
                  target="_blank"
                  href="https://pokedex-ajuu.vercel.app/pokemon/384"
                  className="text-[#ffffffdc] hover:underline"
                >
                  https://pokedex-ajuu.vercel.app/pokemon/384
                </a>{" "}
                to find out about my favorite pokemon.
              </p>
            }
            techArray={["Next.js", "TailwindCSS", "PokeAPI"]}
            sourceCode={"https://github.com/ajuu-vroo/PokeDex-PokeMon"}
            liveCode={"https://pokedex-ajuu.vercel.app/"}
            projectThumbnail={"/pokedex.png"}
          />
          <Projects
            title={"Realtime Chat-App"}
            content={
              "This app lets users connect with each other in real-time using Socket.IO .The Back-end is made with a Node.js server. Open two tabs in your browser and try this app yourself. "
            }
            techArray={["NextJs with TailwindCSS", "Node.js", "Socket.io"]}
            sourceCode={"https://github.com/ajuu-vroo/NextJs-Chat-App"}
            liveCode={"https://chat-ajuu.vercel.app/"}
            projectThumbnail={"/chatApp.png"}
          />
          <Projects
            title={"Google Clone"}
            content={
              "Made a Google clone which shows search results by querying Google V1 SearchAPI.This is one of my first projects using React with vanilla CSS used entirely for front-end."
            }
            techArray={["React.js", "CSS3", "HTML5"]}
            sourceCode={"https://github.com/ajuu-vroo/Google-clone"}
            liveCode={"https://google-ajuu.vercel.app/"}
            projectThumbnail={"/googleClone.png"}
          />
          <Projects
            title={"AjjuStore-eCommerce WebApp"}
            content={
              "Fully responsive demo eCommerce site. The site provides authentication and requires users to sign in. The database used is MongoDB. Stripe payment gateway has been integrated for fully functional card payments."
            }
            techArray={["Next.js", "TailwindCSS", "Stripe.js"]}
            sourceCode={"https://github.com/ajuu-vroo/Ajuu-store"}
            liveCode={"https://ajuu-store.vercel.app/"}
            projectThumbnail={"/ajuuStore.png"}
          />
        </div>
        <hr className="my-16 mr-5 opacity-30" />
        <footer className="flex space-x-3 items-center justify-center selection:bg-[#6fb5b64e]">
          <h1 className="text-[#ffffff53]">Email:</h1>
          <h1 className="text-[#ffffff74]">harjot9singh@gmail.com</h1>
        </footer>
        <div className="space-x-8  flex items-center justify-center py-10">
          <a href="https://github.com/ajuu-vroo">
            <img
              src="/static/GitHub-Mark-Light-64px.png"
              className="h-6 w-6 hover:contrast-0 cursor-pointer selection:text-transparent"
              draggable="false"
            />
          </a>
          <a href="https://www.instagram.com/ajuu_vroo/">
            <img
              src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-background-hd-3.png"
              className="h-6 w-6 grayscale invert brightness-0 hover:grayscale-0 hover:invert-0 hover:brightness-100 cursor-pointer selection:text-transparent"
              draggable="false"
            />
          </a>
          <a href="https://www.linkedin.com/in/harjot-singh-25646b218/">
            <img
              src="https://www.freepnglogos.com/uploads/official-linkedin-logo----17.png"
              className="h-6 w-6 grayscale invert brightness-0 hover:grayscale-0 hover:invert-0 hover:brightness-100 cursor-pointer selection:text-transparent"
              draggable="false"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
