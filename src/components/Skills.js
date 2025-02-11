import SkillRating from "./SkillRating";

const Skills = () => {
  const skillsArray = [
    { name: "JavaScript", rating: 80 },
    { name: "Angular", rating: 80 },
    { name: "React", rating: 70 },
    { name: "TypeScript", rating: 80 },
    { name: "HTML, CSS, TailwindCss", rating: 90 },
    { name: "Jasime Karma, Jest, Cypress", rating: 70 },
    { name: "CI/CD, Jenkins, Docker, AWS", rating: 60 },
    { name: "Git, RestAPI, Postman, TestSigma", rating: 70 },
    { name: "NodeJS", rating: 50 },
    { name: "NextJS", rating: 10 },

  ];

  return (
    <div
      id="skills"
      className="py-20 md:px-52 md:py-24 bg-black h-5/6 w-screen"
    >
      <div className="font-bold text-center text-white text-2xl md:text-4xl">
        Skills
      </div>
      <div className="font-bold text-crimson text-center text-lg md:text-2xl">
        {" "}
        <span className="text-white"> ⎯ </span> what I know{" "}
        <span className="text-white"> ⎯ </span>{" "}
      </div>

      <div className="md:flex text-white">
        <div className="max-w-3xl mx-auto md:w-3/4 md:text-xl mt-10 space-y-4">
          {skillsArray.map((skill, index) => (
            <SkillRating key={index} skill={skill.name} rating={skill.rating} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
