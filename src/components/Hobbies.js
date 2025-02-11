import yoga_img from "../assets/Yoga_dp.jpeg";
import reading_img from "../assets/Book_dp.jpeg";
import art_craft_img from "../assets/Art_dp.jpeg";
import photography_img from "../assets/Photo_dp.jpeg";
import gardening_img from "../assets/Garden_dp.jpeg";

import Hobby from "./Hobby";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const Hobbies = () => {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const hobbiesData = [
    {
      title: "Yoga",
      description:
        "The mirror to look at ourselves from within",
      icon: yoga_img,
    },
    {
      title: "Reading",
      description:
        "Books : My best friend",
      icon: reading_img,
    },
    {
      title: "Art & Craft",
      description:
        "Handmade home decor items using waste materials",
      icon: art_craft_img,
    },
    {
      title: "Photography",
      description:
        "Capturing and freezing the true essence of nature",
      icon: photography_img,
    },
    {
      title: "Gardening",
      description:
        "There are always flowers for those who want to see them",
      icon: gardening_img,
    },
  ];

  return (
    <div
      id="hobbies"
      className="py-20 md:px-52 md:py-24 bg-white h-5/6 w-screen"
    >
      <div className="font-bold text-center text-2xl md:text-4xl">Hobbies</div>
      <div className="font-bold text-crimson text-center text-lg md:text-2xl">
        {" "}
        <span className="text-black"> ⎯ </span> what I love{" "}
        <span className="text-black"> ⎯ </span>{" "}
      </div>

      <div id="body">


      <Slider {...settings}>
          {
            hobbiesData.map((hobby) => (
              <Hobby key={hobby.title} hobbyData={hobby} />
            ))
          }
        </Slider>

      </div>
    </div>
  );
};

export default Hobbies;
