import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main";
import Footer from "../../Components/Footer/Footer";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
