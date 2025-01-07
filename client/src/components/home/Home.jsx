import React from "react";
import HomeHeader from "./HomeHeader";
import Features from "../features/Features";
import Footer from "./../Header&Footer/Footer";
import "./Home.css";
import Modals from "../Modals/Modals";
import RenderItems from "../RenderItems/RenderItems";

export default function Home() {
  return (
    <div>
      <HomeHeader />
      <Modals />
      <RenderItems/>
      <Features />
      <Footer />
    </div>
  );
}
