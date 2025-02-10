const Experience = () => {
  return (
    <div
      id="experience"
      className="py-20 md:px-52 md:py-24 bg-white h-5/6 w-screen"
    >
      <div className="font-bold text-center text-2xl md:text-4xl">
        Experience
      </div>
      <div className="font-bold text-crimson text-center text-lg md:text-2xl">
        {" "}
        <span className="text-black"> ⎯ </span> where I have worked{" "}
        <span className="text-black"> ⎯ </span>{" "}
      </div>

      <div id="body" className="md:flex md:justify-between">
        <div id="left-section" className="m-8 md:w-1/2">
          <div className="flex justify-between">
            <h2 className="font-bold text-xl md:text-2xl">
              Carrier Technologies
            </h2>
            <h3>Oct 2022 - Present</h3>
          </div>
          <h3 className="text-crimson md:text-xl">Lead Engineer</h3>
          <ul className="font-sans text-justify text-md md:text-xl">
            <li>
              ● Developed and enhanced key features in the HVACpartners web
              application using the latest Angular framework to optimize
              performance and usability.
            </li>
            <li>
              ● Implemented new functionalities in the Connected Portal web
              application using React, improving user experience and system
              efficiency.
            </li>

            <li>
              ● Investigated and resolved production defects by identifying root
              causes and applying strategic solutions to maintain system
              stability.
            </li>
            <li>
              ● Conducted unit testing and collaborated on UX design, ensuring a
              seamless and engaging user interface.
            </li>

            <li>
              ● Led code reviews and actively participated in requirement
              analysis meetings, refining project objectives and deliverables.
            </li>

            <li>
              ● Mentored junior developers, enhancing team proficiency and
              fostering a culture of continuous learning.
            </li>
          </ul>
        </div>

        <div id="right-section" className="m-8 md:w-1/2">
          <div className="flex justify-between">
            <h2 className="font-bold text-xl md:text-2xl">MicroFocus</h2>
            <h3>Aug 2019 - Oct 2022</h3>
          </div>
          <h3 className="text-crimson md:text-xl">Software Engineer</h3>
          <ul className="font-sans text-justify text-md md:text-xl">
            <li>
              ● Developed core features for Identity Console and Identity
              Repository, two enterprise-level Identity Management applications,
              using Angular, HTML, CSS, and Docker.  
            </li>
            <li>
              ● Integrated CI/CD pipelines
              with Jenkins, ensuring seamless automation and deployment
              processes.
            </li>

            <li>
              ● Conducted thorough code reviews and implemented unit,
              integration, and end-to-end (E2E) testing to enhance code quality
              and maintainability.
            </li>
            <li>
              ● Designed and implemented a Linux Standalone Installer for the Identity Console application using shell scripting, simplifying installation for end users.
            </li>

            <li>
              ● Built a cross-platform desktop application using Electron, enabling users unfamiliar with Docker to access Identity Console effortlessly.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
