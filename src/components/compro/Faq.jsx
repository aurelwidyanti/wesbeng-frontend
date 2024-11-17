import React, { useState} from "react";

const Faq = () => {

  const [openIndex, setOpenIndex] = useState(null); // Menyimpan indeks pertanyaan yang terbuka

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqs = [
    {
      title: "How do I order?",
      desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
    },
    {
      title: "How can i make the payment?",
      desc: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too. We're not always in the position that we want to be at.",
    },
    {
      title: "How do I order?",
      desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
    },
    {
      title: "How can i make the payment?",
      desc: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too. We're not always in the position that we want to be at.",
    },
    {
      title: "How do I order?",
      desc: "We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams. If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don't appreciate the moment until it's passed.",
    },
    {
      title: "How can i make the payment?",
      desc: "It really matters and then like it really doesn't matter. What matters is the people who are sparked by it. And the people who are like offended by it, it doesn't matter. Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too. We're not always in the position that we want to be at.",
    },
  ];

  return (
    <div className="flex flex-col pt-12">
      <div className="faqHero text-center px-3">
        <h2 className="font-bold text-4xl text-gray-700">Frequently asked questions</h2>
        <p className="mt-4 text-gray-400">A lot of people don't appreciate the moment until it's passed. I'm not trying my hardest, and I'm not trying to do.</p>
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