import myImage from "../assets/background_image.jpg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div id="home" className="relative">
      <div className="">
        <img
          className="h-screen w-screen object-right md:object-cover"
          src={myImage}
          alt="background_image"
        />
      </div>

      <div className="absolute top-0 px-4 md:px-52 py-96 text-white">
        <p className="font-sans text-2xl py-1 md:text-4xl md:py-2">
          Hello, my name is
        </p>
        <p className="font-sans text-3xl py-1 font-bold md:text-6xl md:py-2">
          Shashikumar
        </p>
        <p className="font-sans text-2xl py-1 md:text-4xl md:py-2">
          And I'm a &nbsp;
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              2000,
              "Fullstack Developer",
              2000,
              "UX Designer",
              2000,
              "Freelancer",
              2000,
            ]}
            wrapper="span"
            speed={20}
            style={{ display: "inline-block" }}
            className="text-crimson font-sans font-bold text-2xl md:text-4xl"
            repeat={Infinity}
          />
        </p>
      </div>
    </div>
  );
};

export default Home;
