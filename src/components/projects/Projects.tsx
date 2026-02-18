import React, { useState } from "react";
import "./Projects.scss";
import { IoClose } from "react-icons/io5";

const projects = [
  {
    title: "JavaScript Games",
    description: "Fun browser-based games using HTML5 Canvas and JS logic.",
    link: "https://github.com/your-username/js-games",
  },
  {
    title: "AWS S3 Intergartion",
    description: "I designed an application for uploading files into S3 bUcket",
    link: "https://github.com/sujithsadineni/File-Upload-S3",
  },
  {
    title: "House Renting website",
    description:
      "replica version on Sulekha.com with clean UI and More Advance Search Algorithm",
    link: "https://github.com/your-username/dev-tools",
  },
  {
    title: "Portfolio Website",
    description: "Interactive personal portfolio built with React + SCSS.",
    link: "https://sujithsadineni.github.io/Portfolio/",
  },
  {
    title: "GitHub Automation",
    description: "Automate GitHub workflows using custom Actions.",
    link: "https://github.com/your-username/github-automation",
  },
  {
    title: "MyPosts.com",
    description:
      " I designed a application for user interactive posts with autentication and authorization",
    link: "https://github.com/sujithsadineni/Full-Stack",
  },
];

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="projects-3d">
      <h2>🚀 Featured Projects</h2>
      <div className="project-cards">
        {projects.map((project, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={index}
              className={`project-card ${isActive ? "active" : ""}`}
              onClick={() => setActiveIndex(isActive ? null : index)}
            >
              <div className="card-inner">
                <div className="card-front">
                  <h3>{project.title}</h3>
                </div>
                <div className="card-back">
                  <button
                    className="close-button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(null);
                    }}
                  >
                    <IoClose />
                  </button>
                  <p>{project.description}</p>
                  <div className="Project-links">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
