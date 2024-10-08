import React from "react";
import heroImage from "../assets/img/background.png";

const Hero = () => (
  <section
    className="hero bg-cover bg-center sm:h-screen flex justify-center items-center rounded-3xl sm:mx-12 sm:my-10"
    style={{ backgroundImage: `url(${heroImage})`, height: "712px" }}
  >
    <div className="flex flex-col sm:w-[1200px] sm:gap-8 text-white text-center">
      <h1 className="text-7xl font-bold">Wesbeng</h1>
      <p className="text-2xl font-normal mx-auto">
        Solusi cerdas untuk pengelolaan sampah anorganik. Lihat jadwal
        pengangkutan sampahmu,
        <br />
        belajar cara daur ulang, dan dapatkan reward menarik.
        <br />
        Bergabunglah bersama kami untuk lingkungan yang lebih bersih!
      </p>
    </div>
  </section>
);

export default Hero;
