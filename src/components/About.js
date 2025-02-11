import aboutImage from "../assets/about_image.jpeg";
import resume from "../assets/Shashikumar_Resume.pdf"
import { TypeAnimation } from "react-type-animation";

const About = () => {

  return (
    <div id="about" className="py-20 md:px-52 md:py-24 bg-white h-5/6 w-screen">
      <div id="heading">
        <div className="font-bold text-center text-2xl md:text-4xl">
          About Me
        </div>
        <div className="font-bold text-crimson text-center text-lg md:text-2xl">
          {" "}
          <span className="text-black"> ⎯ </span> who am I{" "}
          <span className="text-black"> ⎯ </span>{" "}
        </div>
      </div>

      <div
        id="body"
        className="flex flex-col md:flex-row items-center md:justify-between py-4 md:pt-10"
      >
        <div id="left-section" className="md:w-1/2">
          <img
            className="w-52 md:w-72 md:mt-6 rounded-md"
            src={aboutImage}
            alt="About_section_image"
          />
        </div>

        <div className="md:w-1/2 mx-8 my-4 md:mx-0 md:my-0">
          <TypeAnimation
            sequence={[
              "I am a Frontend Developer.",
              2000,
              "I aim to become a Fullstack Developer.",
              2000,
            ]}
            wrapper="span"
            speed={30}
            style={{ display: "block" }}
            className="text-crimson font-sans font-bold text-xl md:text-2xl"
            repeat={Infinity}
          />
          <div id="right-section" className="font-sans text-justify text-md md:text-xl">
            Results-driven Senior Frontend Developer with extensive experience
            in designing, developing, and optimizing web applications using
            Angular, React, JavaScript, and TypeScript. Adept at building
            scalable, high-performance user interfaces that enhance user
            experience and engagement. Strong expertise in modern frontend
            frameworks, component-based architecture, and state management.
            Proficient in CI/CD pipelines, unit testing, and Agile
            methodologies, ensuring high-quality, maintainable code. Skilled in
            collaborating with cross-functional teams, conducting code reviews,
            and mentoring junior developers to drive technical excellence.
            Committed to continuous learning and innovation, leveraging the
            latest technologies to deliver seamless, responsive, and visually
            appealing web applications.
          </div>
          <div className="flex justify-center items-center md:justify-start">
              <a className="mt-6 p-4 px-7 bg-crimson hover:bg-white hover:text-crimson text-white font-sans rounded-md border-2 border-transparent hover:border-crimson transition duration-300 ease-in-out" href={resume} target="_blank">Download CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
