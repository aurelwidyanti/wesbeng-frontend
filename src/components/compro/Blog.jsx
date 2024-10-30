import { Carousel } from "flowbite-react";
// import { Card } from "flowbite-react";
import "../../assets/img/background.png";
import Card from "../ui/Card";

const Blog = () => {
  return (
    <div className="h-screen sm:h-[70vh] py-5">
      <Carousel className="flex items-cente" onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <Card />
        <Card />
        <Card />
      </Carousel>
    </div>
  );
};

export default Blog;