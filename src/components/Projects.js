import ProjectComp from "./ProjectComp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faPeoplePulling,
  faTv,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const Projects = () => {
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

  const projectData = [
    {
      title: "Food Ordering App",
      description:
        "A food ordering application created using ReactJS, Tailwindcss to order food from nearby restaurants",
      git_href: "https://github.com/Shashikumar321/namaste-react",
      url_href: "",
      icon: <FontAwesomeIcon icon={faUtensils} />,
    },
    {
      title: "Netflix-GPT",
      description:
        "AI-driven platform that curates and personalizes streaming recommendations using Gemini AI API's",
      git_href: "https://github.com/Shashikumar321/Netflix-GPT/tree/main/netflix-gpt",
      url_href: "https://netflix-gpt-db024.web.app",
      icon: <FontAwesomeIcon icon={faTv} />,
    },
    {
      title: "Portfolio Website",
      description:
        "A comprehensive portfolio website to showcase my skills, projects, experience and accomplishments",
      git_href: "https://github.com/Shashikumar321/portfolio-website",
      url_href: "",
      icon: <FontAwesomeIcon icon={faAddressCard} />,
    },
    {
      title: "YouTube",
      description: "a YouTube clone leveraging React, incorporating features like video playback",
      git_href: "https://github.com/Shashikumar321/my-youtube",
      url_href: "https://my-39459.web.app/",
      icon: <FontAwesomeIcon icon={faYoutube} />,
    },
    {
      title: "Tinder",
      description:
        "A FullStack web app built by me using node.js, mongoDB, Express, React",
      git_href: "https://github.com/Shashikumar321/devTinder",
      url_href: "http://51.21.169.189/",
      icon: <FontAwesomeIcon icon={faPeoplePulling} />,
    },
  ];

  return (
    <div
      id="projects"
      className="py-20 md:px-52 md:py-24 bg-black h-5/6 w-screen"
    >
      <div className="font-bold text-center text-white text-2xl md:text-4xl">
        Projects
      </div>
      <div className="font-bold text-crimson text-center text-lg md:text-2xl">
        {" "}
        <span className="text-white"> ⎯ </span> what I have done{" "}
        <span className="text-white"> ⎯ </span>{" "}
      </div>

      <div id="body" className="">
        <Slider {...settings}>
          {projectData.map((data) => (
            <ProjectComp key={data.title} projectData={data} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
