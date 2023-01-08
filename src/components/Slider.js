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
    src: "https://i.ibb.co/YbS7mL2/smart-watches.jpg",
    headline: "Stay connected with smart watches",
    body: "Stay connected and on top of your day with our smart watches. Our selection offers a range of styles and features, including fitness tracking, phone notifications, and voice assistants. These watches are the perfect combination of functionality and style.",
    cta: "Connect with a smart watch",
    category: "smart-watches",
  },
];

const Slider = () => {
  return (
    <div className="slider-frame relative">
      <div className="slider">
        {data.map((item) => (
          <Slide item={item} />
        ))}
      </div>
      <div className="slider-btns absolute bottom-5 left-0 right-0 m-auto w-fit">
        <button className="prevArrow">{<BsArrowLeftShort />}</button>
        <button className="nextArrow">{<BsArrowRightShort />}</button>
      </div>
    </div>
  );
};

export default Slider;
