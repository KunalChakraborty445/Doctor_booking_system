import React, { useContext } from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
import Departments from "../components/Departments";

const Home = () => {
  return (
    <>
      <Hero
        title={
          "Welcome to MediTrack Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={"/hero_doctors.png"}
      />
      <Biography imageUrl={"/biography_img.jpg"} />
      <Departments />
      <MessageForm />
    </>
  );
};

export default Home;
