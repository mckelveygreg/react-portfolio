import React from "react";
import SocMeds from '../../components/SocMeds/SocMeds';
import "./style.css";

const LandingPage = props => {
  return (
    <section id="landingPage">
      <h1>Hi! I'm Greg McKelvey</h1>
      <p>I'm a web developer</p>
      <SocMeds />
    </section>
  );
};

export default LandingPage;
