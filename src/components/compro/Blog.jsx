import { Carousel } from "flowbite-react";
import Card from "../ui/Card";
import blogData from "../../constant/educationContent"

const Blog = () => {
  return (
    <div className="h-screen sm:h-full w-full p-5 mt-8">
      <div className="faqHero text-center px-3">
      <h2 className="font-bold text-4xl text-gray-700">Artikel Terbaru</h2>
<p className="mt-4 text-gray-400">Baca artikel terbaru dari tim kami untuk mendapatkan informasi terkini seputar lingkungan hidup dan keberlanjutan.</p>
      </div>
      <Carousel className="flex items-center" onSlideChange={(index) => console.log('onSlideChange()', index)}>
        {blogData.map((blog, index) => (
          <Card 
            key={index}
            image={blog.image}
            title={blog.title}
            text={blog.text}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Blog;