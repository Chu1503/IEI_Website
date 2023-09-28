import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import React, { useState, useEffect } from "react";
import Loader from "../components/Loader";
import About from "../components/About";
import Events from "../components/Events";
import Team from "../components/Team";
import Gallery from "../components/Gallery";
import AboutVIT from "../components/AboutVIT";

// export default function Home() {
const Home: NextPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    };
    fakeDataFetch();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden">
      <Navbar />

      {/* EXPERIMENT WITH SNAP LATER  */}

      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="aboutvit">
        <AboutVIT />
      </section>

      <section id="events">
        <Events />
      </section>

      <section id="team">
        <Team />
      </section>

      <section id="gallery">
        <Gallery />
      </section>

      <section id="gallery">
        <Footer />
      </section>
    </div>
  );
};

export default Home;
