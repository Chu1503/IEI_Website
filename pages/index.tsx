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
    <div className="bg-[rgb(11,8,33)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0 overflow-x-hidden">
      <Navbar />

      <section id="hero" className="snap-start">
        <Hero />
      </section>

      <section id="about" className="snap-center">
        <About />
      </section>

      <section id="events" className="snap-center">
        <Events />
      </section>

      <section id="team" className="snap-center">
        <Team />
      </section>

      <section id="gallery" className="snap-center">
        <Gallery />
      </section>

    </div>
  );
};

export default Home;
