import { Carousel } from "flowbite-react";
import Card from "../ui/Card";
import blogData from "../../constant/educationContent"

const Blog = () => {
  return (
    <div className="h-screen sm:h-full w-full p-5">
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