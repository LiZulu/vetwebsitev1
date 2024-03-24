import Image from "next/image";
import Animals from "@/components/Animal";
import Hero from "@/components/Hero";
import HealthTools from "@/components/HealthTools";
import Features from "@/components/Features";
import Services from "@/components/Services";
import GetApp from "@/components/GetApp";

export default function Home() {
  return (
    <>
      <Animals />
      <HealthTools />
      <Services />
      <GetApp />
    </>
  );
}
