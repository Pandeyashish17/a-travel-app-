import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import GridLayout from "../components/GridLayout";
import Numbers from "../components/Numbers";
import HeadSection from "../components/HeadSection";
import LastSection from "../components/LastSection";
import Testimonials from "../components/Testimonials";
import { useEffect } from "react";
import axios from "axios";

export default function Home() {
  useEffect(() => {
    getCountry();
  }, []);

  const getCountry = () => {
    try {
      axios.get("https://restcountries.com/v3.1/all").then((res) => {
        console.log(res);
      });
    } catch (error) {}
  };
  return (
    <>
      <HeadSection title="Traversal" />
      <HeroSection />
      <Cards />
      <Numbers />
      <GridLayout />
      <LastSection />
      <Testimonials />
    </>
  );
}
