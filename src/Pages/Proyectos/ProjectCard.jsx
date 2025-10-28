import { useState } from "react";

const ProjectCard = ({
  project,
  isActive,
  setActiveIndex,
  setIsAnyHovered,
}) => {
  const [hovered, setHovered] = useState(false);

  const cardStyle =
    hovered || isActive
      ? {
          backgroundImage: `url(${project.Image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }
      : {};

  const handleMouseEnterAnimation = () => {
    setHovered(true);
    setActiveIndex(project.index);
    setIsAnyHovered(true);
  };

  const handleMouseLeaveAnimation = () => {
    setHovered(false);
    setIsAnyHovered(false);
  };

  return (
    <div
      className={`card bg-base-100 w-md mx-6 shadow-sm h-44 rounded-xl transition-all duration-300 ${
        hovered || isActive ? "scale-105" : ""
      } relative`}
      onMouseEnter={handleMouseEnterAnimation}
      onMouseLeave={handleMouseLeaveAnimation}
      style={cardStyle}
    >
      <div
        className={`absolute inset-0 bg-base-100/60 rounded-xl transition-all duration-300 z-10 pointer-events-none`}
      ></div>
      <div className="card-body relative z-20 justify-center">
        <h2
          className={`card-title self-center ${
            hovered
              ? ""
              : "text-3xl font-extrabold text-base-content bg-base-300 rounded-lg p-6"
          }`}
        >
          {project.title}
        </h2>
        {hovered ? (
          <>
            <p className="text-center text-base-content">
              {project.description}
            </p>
            <div className="card-actions justify-center">
              <a
                href={project.link}
                className="btn btn-outline hover:bg-base-content hover:text-base-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.action}
              </a>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
