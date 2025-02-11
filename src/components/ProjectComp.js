import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProjectComp = ({ projectData }) => {
  const { title, description, icon, git_href, url_href } = projectData;
  return (
    <div className="ml-16 md:ml-10 m-10 p-6 md:p-10 w-64 h-64 md:w-80 md:h-80 bg-[#222] shadow-sm text-center text-white hover:bg-crimson rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
      <span className="text-red-600 hover:text-white text-4xl md:text-5xl">
        {icon}{" "}
      </span>
      <h3 className=" py-3 font-bold font-sans md:text-xl">{title}</h3>
      <p className="text-sm md:text-md">{description}</p>
      <div className="m-6">
        <a className="m-3" href={git_href} target="_blank">
          <FontAwesomeIcon
            className="text-2xl hover:text-4xl cursor-pointer"
            icon={faGithub}
          />
        </a>

        {url_href !== "" && (
          <a
            className="m-3 text-lg underline hover:text-2xl cursor-pointer"
            href={url_href}
            target="_blank"
          >
            Try it out
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectComp;
