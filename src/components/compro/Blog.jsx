import { Carousel } from "flowbite-react";
// import { Card } from "flowbite-react";
import dummyImage from '../../assets/img/dummy-image.png';
import Card from "../ui/Card";

const Blog = () => {
  return (
    <div className="h-screen sm:h-full w-full p-5">
      <Carousel className="flex items-cente" onSlideChange={(index) => console.log('onSlideChange()', index)}>
        <Card 
        image={dummyImage}
        title="Title 1"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec nunc vel odio aliquet fermentum lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec nunc vel odio aliquet fermentum"
        />
        <Card 
        image={dummyImage}
        title="Title 2"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec nunc vel odio aliquet fermentum lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec nunc vel odio aliquet fermentum"
        />
        <Card
        image={dummyImage}
        title="Title 3"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec nunc vel odio aliquet fermentum "
        />
      </Carousel>
    </div>
  );
};

export default Blog;