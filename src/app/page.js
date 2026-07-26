import Image from "next/image";
import Bannersection from "./components/home-components/Bannersection";
import Categories from "./components/home-components/Categories";
import Card from "./components/home-components/Card";
import Carousel from "./components/home-components/Carousel";
import Cart from "./components/home-components/Cart";
import Testimonial from "./components/home-components/Testimonial";
import Register from "./components/home-components/Register";

export default function Home() {
  return (
    <>
      <Bannersection />
      <Card />
      <Categories />
      <Carousel />
      <Cart />
      <Testimonial />
    
    </>
  );
}
