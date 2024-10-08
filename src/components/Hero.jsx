import React from 'react';
import heroImage from '../assets/img/hero.png';


const Hero = () => (
  <section
    className="hero bg-cover bg-center h-full flex justify-center items-center rounded-3xl mx-16 my-8"
    style={{ backgroundImage: `url(${heroImage})` }}
  >
    <div className="bg-black bg-opacity-60 p-8 rounded-lg text-white text-center">
      <h1 className="text-5xl font-bold mb-5">Wesbeng</h1>
      <p className="text-lg max-w-lg mx-auto">
        Solusi cerdas untuk pengelolaan sampah anorganik. Lihat jadwal
        pengangkutan sampahmu, belajar cara daur ulang, dan dapatkan reward
        menarik. Bergabunglah bersama kami untuk lingkungan yang lebih bersih!
      </p>
    </div>
  </section>
);

export default Hero;