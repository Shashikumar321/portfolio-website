import React from "react";

const SkillRating = ({ skill, rating }) => {
  return (
    <div className="mx-8 items-center">
      <div className="flex justify-between">
        <span className="w-80 font-sans">{skill}</span>
        <span className="w-8 font-sans">{rating}%</span>
      </div>

      <div className="w-full mt-2 bg-gray-200 h-1 rounded-sm">
        <div
          className={`bg-crimson h-1 rounded-sm`}
          style={{ width: `${rating}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillRating;
