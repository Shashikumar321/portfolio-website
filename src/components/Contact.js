import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  return (
    <div
      id="contact"
      className="pt-20 pb-10 md:px-52 md:pt-24 bg-black h-5/6 w-screen"
    >
      <div className="font-bold text-center text-white text-2xl md:text-4xl">
        Contact Me
      </div>
      <div className="font-bold text-crimson text-center text-lg md:text-2xl">
        {" "}
        <span className="text-white"> ⎯ </span> get in touch{" "}
        <span className="text-white"> ⎯ </span>{" "}
      </div>

      <div id="body" className="m-8 text-white md:flex md:justify-between">
        <div id="left-section" className="md:w-1/2">
          <div className="flex">
            <FontAwesomeIcon
              icon={faUser}
              className="m-2 mx-6 text-crimson text-3xl"
            />
            <div className="mb-4 md:mb-6">
              <h3 className="font-bold">Name</h3>
              <h2>Shashikumar N</h2>
            </div>
          </div>

          <div className="flex">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="m-2 mx-6 text-crimson text-3xl"
            />
            <div className="mb-4 md:mb-6">
              <h3 className="font-bold">Address</h3>
              <h2>Bangalore, India</h2>
            </div>
          </div>

          <div className="flex">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="m-2 mx-6 text-crimson text-3xl"
            />
            <div className="mb-4 md:mb-6">
              <h3 className="font-bold">Email</h3>
              <h2>shashikumaryn3@gmail.com</h2>
            </div>
          </div>

          <div className="flex">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="m-2 mx-6 text-crimson text-3xl"
            />
            <div className="mb-4 md:mb-6">
              <h3 className="font-bold">LinkedIn</h3>
              <h2>
                <a className="hover:text-crimson" href="https://www.linkedin.com/in/shashikumar-n-29aa12172">
                  Shashikumar N
                </a>
              </h2>
            </div>
          </div>

          <div className="flex">
            <FontAwesomeIcon
              icon={faGithub}
              className="m-2 mx-6 text-crimson text-3xl"
            />
            <div className="mb-4 md:mb-6">
              <h3 className="font-bold">Git</h3>
              <h2>
                <a className="hover:text-crimson" href="https://github.com/Shashikumar321">Shashikumar321</a>
              </h2>
            </div>
          </div>
        </div>

        <div id="right-section" className="md:w-1/2">
          <h2 className="font-bold text-2xl mt-20 md:mt-0 mb-4">Message me</h2>
          <div className="">
            <form
              action="https://getform.io/f/1d6053a4-837f-4083-a2bc-bc7758d7554f"
              method="POST"
            >
              <div className="md:flex">
                <input
                  className="bg-black my-2 mr-4 p-2 w-full md:w-1/2 border rounded-md"
                  type="text"
                  placeholder="Name"
                  required={true}
                  name="name"
                />
                <input
                  className="bg-black my-2 p-2 w-full md:w-1/2 border rounded-md"
                  type="text"
                  placeholder="email"
                  required={true}
                  name="email"
                />
              </div>
              <input
                className="bg-black my-2 mr-2 p-2 w-full border rounded-md"
                type="text"
                placeholder="Subject"
                required={true}
                name="subject"
              />
              <textarea
                className="bg-black my-2 mr-2 p-2 w-full border rounded-md"
                type="textarea"
                rows={4}
                placeholder="Message..."
                required={true}
                name="message"
              />
              <div>
                <button
                  type="submit"
                  className="mt-2 p-2 px-5 bg-crimson text-white font-sans rounded-md border-2 border-transparent hover:bg-white hover:text-crimson hover:border-crimson transition duration-300 ease-in-out"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div id="footer">
        <p className="pt-20 text-center text-white">
          Created by Shashikumar | 2025
        </p>
      </div>
    </div>
  );
};

export default Contact;
