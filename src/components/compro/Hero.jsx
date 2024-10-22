import heroImage from "../../assets/img/background.png";

import { useEffect, useState } from "react";

const Hero = () => {
  const [height, setHeight] = useState(window.innerWidth >= 640 ? '90vh' : '100vh');

  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerWidth >= 640 ? '90vh' : '100vh');
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section
      className="hero bg-cover bg-center flex justify-center items-center rounded-none sm:rounded-3xl sm:mx-12 sm:my-10"
      style={{
        backgroundImage: `url(${heroImage})`,
        height: height,
      }}
    >
      <div className="flex flex-col w-full sm:w-[1200px] gap-4 sm:gap-8 text-white text-center p-4 sm:p-0">
        <h1 className="text-4xl sm:text-7xl font-bold">Wesbeng</h1>
        <p className="text-base sm:text-2xl font-normal mx-auto">
          Solusi cerdas untuk pengelolaan sampah anorganik. Lihat jadwal
          pengangkutan sampahmu, {' '}
          <br className="hidden sm:block" />
          belajar cara daur ulang, dan dapatkan reward menarik.
          <br className="hidden sm:block" />
          {' '}Bergabunglah bersama kami untuk lingkungan yang lebih bersih!
        </p>
      </div>
    </section>
  );
};

export default Hero;
