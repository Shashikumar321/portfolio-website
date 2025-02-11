import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [bgColor, setBgColor] = useState("transparent");

  const handleNavBarClick = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleLinkClick = () => {
    setIsNavVisible(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setBgColor("#ed143d");
      } else {
        setBgColor("transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={
        bgColor === "transparent" && !isNavVisible
          ? "fixed top-0 left-0 z-10 w-full px-4 py-8 md:px-52"
          : "fixed top-0 left-0 z-10 w-full px-4 py-2 md:px-52"
      }
      style={{ backgroundColor: isNavVisible ? "black" : bgColor }}
    >
      <div className="flex justify-between">
        <div className="font-bold font-sans text-3xl md:pt-3 md:text-4xl text-white cursor-pointer">
          {!isNavVisible && (
            <>
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={handleLinkClick}
              >
                <span>portfo</span>
                <span
                  className={bgColor === "transparent" ? "text-crimson" : ""}
                >
                  lio.
                </span>{" "}
              </Link>
            </>
          )}
        </div>

        <div className="flex-wrap font-bold text-3xl text-white inline-block md:hidden">
          <button onClick={handleNavBarClick}>
            {isNavVisible ? <FontAwesomeIcon icon={faXmark} /> : <FontAwesomeIcon icon={faBars} />}
          </button>
        </div>

        <div
          className={
            isNavVisible
              ? "bg-black py-10 w-screen h-5/6 text-center font-bold inline-block"
              : "hidden md:inline-block"
          }
        >
          <ul className="pt-1 md:flex md:justify-between">
            <li className="py-4">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="font-sans text-lg text-white mx-2 hover:text-red-400  cursor-pointer"
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>

            <li className="py-4">
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="font-sans text-lg text-white mx-2 hover:text-red-400  cursor-pointer"
                onClick={handleLinkClick}
              >
                About
              </Link>
            </li>

            <li className="py-4">
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className="font-sans text-lg text-white mx-2 hover:text-red-400  cursor-pointer"
                onClick={handleLinkClick}
              >
                Skills
              </Link>
            </li>

            <li className="py-4">
              <Link
                to="experience"
                smooth={true}
                duration={500}
                className="font-sans text-lg text-white mx-2 hover:text-red-400  cursor-pointer"
                onClick={handleLinkClick}
              >
                Experience
              </Link>
            </li>

            <li className="py-4">
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className="font-sans text-lg text-white mx-2 hover:text-red-400  cursor-pointer"
                onClick={handleLinkClick}
              >
                Projects
              </Link>
            </li>

            <li className="py-4">
              <Link
                to="hobbies"
                smooth={true}
                duration={500}
                className="font-sans text-lg text-white mx-2 hover:text-red-400  cursor-pointer"
                onClick={handleLinkClick}
              >
                Hobbies
              </Link>
            </li>

            <li className="py-4">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="font-sans text-lg text-white mx-2 hover:text-red-400  cursor-pointer"
                onClick={handleLinkClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
