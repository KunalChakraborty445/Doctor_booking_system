import React from "react";
import Hero from "../components/Hero";
import AppointmentForm from "../components/AppointmentForm";

const Appointment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | MediTrack Medical Institute"}
        imageUrl={"/appointment_img.jpg"}
      />
      <AppointmentForm/>
    </>
  );
};

export default Appointment;
