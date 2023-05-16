import React, { PropsWithChildren } from "react";
import Logo from "../assets/logo_with_text.svg";
import Head from "@docusaurus/Head";

export default function Home(): JSX.Element {
  return (
    <div className={"flex flex-1 flex-col space-y-12 md:justify-between"}>
      <Head htmlAttributes={{ class: "use-tailwind" }} children={undefined} />
      <Header />
      <HeroSection />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div
      className={
        "flex flex-row items-center justify-start px-6 py-6 lg:px-32 lg:py-10 xl:px-40"
      }
    >
      <Logo height={40} width={162} />
      <NavLinks />
      <Actions />
    </div>
  );
}

function NavLinks() {
  return (
    <div
      className={"ml-16 flex hidden flex-row items-center space-x-8 lg:flex"}
    >
      <NavLink>Funzionalità</NavLink>
      <NavLink>Integrazioni</NavLink>
      <NavLink>Prezzi</NavLink>
    </div>
  );
}

function NavLink(props: PropsWithChildren) {
  return (
    <div className={"cursor-pointer text-gray-500 hover:text-gray-800"}>
      {props.children}
    </div>
  );
}

function Actions() {
  return (
    <div
      className={"ml-auto flex hidden flex-row items-center space-x-8 sm:flex"}
    >
      <NavLink>Accedi</NavLink>
      <div
        className={
          "flex items-center justify-center rounded-full bg-blue-500 px-5 py-2 font-semibold text-white hover:bg-blue-600"
        }
      >
        Inizia qui
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <div
      className={
        "flex flex-col items-center justify-center space-y-9 text-center"
      }
    >
      <span className={"text-4xl font-bold md:text-6xl"}>
        La gestione <span className={"text-blue-500"}>in cloud</span>
        <br />
        pensata per il tuo business.
      </span>
      <div className={"flex px-6 md:text-lg"}>
        Raccogli gli ordini da più canali, riduci gli errori, automatizza
        l’organizzazione
        <br className={"hidden md:inline"} /> delle spedizioni e migliora la
        gestione delle relazioni con i tuoi clienti.
      </div>
      <div
        className={
          "flex items-center justify-center rounded-full border border-gray-500 px-5 py-2 text-gray-500"
        }
      >
        In arrivo nel 2024
      </div>
    </div>
  );
}

function Footer() {
  return <div className={"hidden h-32 bg-blue-500 md:inline-flex"} />;
}
