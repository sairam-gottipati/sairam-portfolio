import React from "react";
import "./ProfessionalExperience.scss";

const baseUrl = import.meta.env.BASE_URL;

const buildFallbackLogoDataUri = (companyName: string) => {
  const ignoredWords = new Set([
    "inc",
    "inc.",
    "llc",
    "ltd",
    "ltd.",
    "limited",
    "co",
    "co.",
    "company",
    "corp",
    "corp.",
    "corporation",
    "technologies",
    "technology",
  ]);

  const words = companyName
    .replace(/[^\p{L}\p{N}\s]/gu, "")
    .split(/\s+/)
    .filter(Boolean)
    .filter((word) => !ignoredWords.has(word.toLowerCase()));

  const initials = (words.length ? words : [companyName])
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" viewBox="0 0 140 140">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stop-color="#f7f7f7"/>
          <stop offset="1" stop-color="#eaeaea"/>
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="128" height="128" rx="16" fill="url(#bg)" stroke="#d0d0d0" stroke-width="4"/>
      <text x="70" y="80" text-anchor="middle" font-family="system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" font-size="44" font-weight="700" fill="#333">
        ${initials || "LOGO"}
      </text>
    </svg>
  `.trim();

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
};

const timeline = [
  {
    date: "Aug 2024 – Present",
    title: "Full-Stack Software Engineer",
    company: "Orion Path Technologies",
    logo: `public/op.png`,
    description:
      "Working on a multi-tenant SaaS platform with end-to-end ownership across frontend and backend. Building React-based user interfaces, designing scalable APIs with Node.js, and improving system performance, security, and observability on AWS.",
  },
  {
    date: "2023 – 2024",
    title: "Master of Science in Computer Science",
    company: "Sacred Heart University",
    logo: `public/shu.jpeg`,
    description:
      "Completed a Master’s degree in Computer Science with a focus on software engineering and distributed systems. Built full-stack projects using React and backend services with Python and Node.js.",
  },
  {
    date: "Feb 2019 – Aug 2023",
    title: "Software Engineer (Full Stack)",
    company: "Mindtree Ltd",
    logo: `public/md.png`,
    description:
      "Developed and maintained large-scale enterprise applications using React, Python, and Node.js. Built real-time features with FastAPI and Redis, optimized PostgreSQL performance, and supported zero-downtime database migrations in production systems.",
  },
  {
    date: "2014 – 2018",
    title: "Bachelor of Science in Computer Science",
    company: "KL University",
    logo: `public/klu.png`,
    description:
      "Graduated with a strong foundation in computer science fundamentals, including data structures, object-oriented programming, and web development. Gained early exposure to full-stack application development.",
  },
];


const ProfessionalExperience: React.FC = () => {
  return (
    <section id="journey" className="journey-section">
      <h2>My Journey</h2>
      <div className="timeline">
        {timeline.map((item, idx) => (
          <div
            key={idx}
            className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`}
          >
            <div className="content">
              <div className="date">{item.date}</div>
              <div className="card">
                <img
                  src={item.logo}
                  alt={`${item.company} logo`}
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.onerror = null;
                    target.src = buildFallbackLogoDataUri(item.company);
                  }}
                />
                <div>
                  <h3 className="company">{item.company}</h3>
                  <h3>{item.title}</h3>
                </div>
              </div>
              <p className="description">{item.description}</p>
            </div>
            <div className="dot" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProfessionalExperience;
