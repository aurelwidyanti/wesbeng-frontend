import { Carousel } from "flowbite-react";
import Card from "../ui/Card";
import blogData from "../../constant/educationContent"
import axios from "axios";
import { useEffect, useState } from "react";

const Blog = () => {
  // const [blogData, setBlogData] = useState([])

  // const fetchBlog = async () => {
  //   try {
  //     const response = await axios.get(
  //       "http://localhost:8000/api/v1/education-contents"
  //     )
  //     console.log(response.data)

  //     setBlogData(response.data.data)     
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   fetchBlog()
  // }, [])

  return (
    <div className="sm:h-full w-full p-5 mt-11 bg-gray-100">
      <div className="faqHero text-center px-3">
        <h2 className="font-bold text-4xl text-gray-700">Artikel Terbaru</h2>
        <p className="mt-4 text-gray-400">Baca artikel terbaru dari tim kami untuk mendapatkan informasi terkini seputar lingkungan hidup dan keberlanjutan.</p>
      </div>
      <Carousel className="flex items-center dark" onSlideChange={(index) => console.log('onSlideChange()', index)}>
        {blogData.map((blog, index) => (
          <Card 
            key={index}
            blog={blog}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Blog;