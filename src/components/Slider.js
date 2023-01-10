import { useState } from "react";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

import Slide from "./Slide";

const data = [
  {
    id: 1,
    src: "https://i.ibb.co/XszmG02/camera.jpg",
    headline: "Upgrade Your Photography with a DSLR Camera",
    body: "Are you looking to take your e-commerce product photography to the next level? A DSLR camera is the way to go. With professional-grade image quality and a range of features, a DSLR will help you capture stunning, high-resolution images that will make your products stand out.",
    cta: "Shop DSLR cameras now",
    category: "cameras",
  },
  {
    id: 2,
    src: "https://i.ibb.co/mtc8v16/tv.jpg",
    headline: "Experience the future of TV with a smart TV",
    body: "Upgrade your entertainment experience with a smart TV. With access to a wide range of streaming services and apps, you'll be able to watch your favorite shows and movies in high definition. ",
    cta: "Shop TVs and upgrade now",
    category: "tvs",
  },
  {
    id: 3,
    src: "https://i.ibb.co/kmr5qQv/headphones.jpg",
    headline: "Enhance your listening experience",
    body: "Take your music, movies, and more to the next level with our headphones. Our selection offers a range of styles and features, including noise-cancelling technology, wireless connectivity, and comfortable designs for all-day wear.",
    cta: "Experience enhanced sound",
    category: "headphones",
  },
  {
    id: 4,
    src: "https://i.ibb.co/JqxDhvZ/console.jpg",
    headline: "Take your gaming to the next level",
    body: "Elevate your gaming experience with our selection of gaming consoles. From the latest models to classic systems, we have a console for every type of gamer. Our consoles offer advanced graphics, fast processing speeds, and a variety of exclusive games to choose from.",
    cta: "Shop consoles and play now",
    category: "consoles",
  },
  {
    id: 5,
    src: "//cdn.shopify.com/s/files/1/0274/5483/2778/collections/PG_Website_Brands_Smartwatches_f41b4054-8b21-4ce1-8531-7eb89c7e9f4f.jpg?v=1618234991",
    headline: "Stay connected with smart watches",
    body: "Stay connected and on top of your day with our smart watches. Our selection offers a range of styles and features, including fitness tracking, phone notifications, and voice assistants. These watches are the perfect combination of functionality and style.",
    cta: "Connect with a smart watch",
    category: "smart-watches",
  },
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevBtn = () => {
    setCurrentSlide(
      currentSlide === 0 ? data.length - 1 : (prevSlide) => prevSlide - 1
    );
  };

  const nextBtn = () => {
    setCurrentSlide(
      currentSlide === data.length - 1 ? 0 : (nextSlide) => nextSlide + 1
    );
  };
  return (
    <div className="slider-frame relative">
      <div
        className="slider"
        style={{ transform: `translateX(-${100 * currentSlide}vw)` }}
      >
        {data.map((item) => (
          <Slide item={item} key={item.id} />
        ))}
      </div>
      <div className="slider-btns absolute bottom-5 left-0 right-0 z-[1] text-2xl flex gap-5 m-auto w-fit">
        <button
          onClick={prevBtn}
          className="prevArrow h-12 w-10 flex justify-center items-center bg-violet-900 text-violet-200 border-none hover:bg-gray-900 hover:text-gray-200 duration-300 "
        >
          {<BsArrowLeftShort />}
        </button>
        <button
          onClick={nextBtn}
          className="nextArrow h-12 w-10 flex justify-center items-center bg-violet-900 text-violet-200 border-none hover:bg-gray-900 hover:text-gray-200 duration-300 "
        >
          {<BsArrowRightShort />}
        </button>
      </div>
    </div>
  );
};

export default Slider;
