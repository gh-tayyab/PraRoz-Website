'use client'
import Image from "next/image";
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Contact from "./components/Contact";
import Cards from "./components/Cards";

export default function Home() {
  useEffect(()=>{
    AOS.init({
        offset: 100,
        duration: 600,
        easing: "ease-in-sine",
        delay: 100,
    });
    AOS.refresh();
  }, [])
  return (
    <>
    <Hero />
    <Analytics />
    <Contact />
    <Cards />
    </>
  );
}
