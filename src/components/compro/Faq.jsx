import React, { useState} from "react";

const Faq = () => {

  const [openIndex, setOpenIndex] = useState(null); // Menyimpan indeks pertanyaan yang terbuka

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
        title: "Bagaimana cara menabung sampah?",
        desc: "Untuk menabung sampah, Anda dapat memisahkan sampah organik dan anorganik di rumah. Setelah itu, bawa sampah anorganik yang dapat didaur ulang ke bank sampah Wesbeng. Tim kami akan menimbang dan mencatat nilai tabungan Anda berdasarkan berat dan jenis sampah yang disetorkan.",
    },
    {
        title: "Bagaimana cara mendapatkan penarikan saldo?",
        desc: "Saldo tabungan sampah Anda dapat ditarik kapan saja sesuai dengan jumlah yang tersedia. Silakan kunjungi kantor bank sampah Wesbeng dan ajukan permohonan penarikan. Tim kami akan memproses penarikan saldo Anda dengan cepat.",
    },
    {
        title: "Apakah jenis sampah yang bisa ditabung?",
        desc: "Jenis sampah yang dapat ditabung meliputi plastik, kertas, kaleng, kaca, dan logam lainnya yang dapat didaur ulang. Pastikan sampah dalam kondisi bersih dan kering sebelum disetorkan.",
    },
    {
        title: "Apakah ada biaya untuk menabung sampah?",
        desc: "Tidak ada biaya untuk menabung sampah di bank sampah Wesbeng. Sebaliknya, Anda akan mendapatkan nilai tabungan berdasarkan berat dan jenis sampah yang disetorkan.",
    },
    {
        title: "Bagaimana cara bergabung dengan bank sampah Wesbeng?",
        desc: "Anda dapat bergabung dengan bank sampah Wesbeng dengan mendaftarkan diri melalui aplikasi Wesbeng atau datang langsung ke kantor kami. Tim kami akan membantu proses pendaftaran dan memberikan informasi lebih lanjut tentang cara kerja bank sampah.",
    },
    {
        title: "Apa manfaat menabung sampah di Wesbeng?",
        desc: "Menabung sampah di Wesbeng membantu menjaga kebersihan lingkungan, mengurangi sampah yang berakhir di tempat pembuangan akhir, serta memberikan manfaat ekonomi melalui saldo tabungan yang dapat digunakan untuk berbagai keperluan.",
    },
];



  return (
    <div className="flex flex-col pt-12 sm:w-3/5 m-auto">
      <div className="faqHero text-center px-3">
        <h2 className="font-bold text-4xl text-gray-700">Pertanyaan yang Sering Diajukan</h2>
        <p className="mt-4 text-gray-400">Banyak orang baru menyadari pentingnya menjaga lingkungan setelah terlambat. Mari kita mulai berkontribusi dari sekarang untuk masa depan yang lebih baik.</p>
      </div>

      <div className="faqContent flex flex-col gap-4 mt-8 px-3">
        {faqs.map((faq, index) => (
          <div key={index} className="faqCard bg-white px-3">
            <h3
            className="font-bold text-xl text-gray-700 pb-4 border-b-[1px] cursor-pointer "
            onClick={() => toggleFAQ(index)}
            >
              {faq.title}
            </h3>
            {openIndex === index && (
            <p className={`text-gray-400 mt-2 pt-2 transition-[height] duration-500 ${
              openIndex === index ? "max-h-screen" : "max-h-0 overflow-hidden"
            }`}>{faq.desc}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq