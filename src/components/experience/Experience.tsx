import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaBolt,
  FaVial,
} from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import "./Experience.scss";

const experienceData = [
  {
    title: "Frontend Engineering",
    icon: (
      <>
        <FaReact /> + <RiNextjsFill />
      </>
    ),
    short: "React, Next.js, TypeScript, Redux Toolkit, Tailwind, performance....",
    details: (
      <ul>
        <li>Built production React/Next.js interfaces with TypeScript for SaaS platforms.</li>
        <li>Designed predictable state flows using Redux Toolkit and modern React patterns.</li>
        <li>Improved performance using code-splitting, lazy loading, and rendering optimizations.</li>
        <li>Focused on clean UI, responsive layouts, and reusable component systems.</li>
        <li>Instrumented client-side error visibility using tools like Sentry when needed.</li>
      </ul>
    ),
  },
  {
    title: "Backend APIs & Real-Time Systems",
    icon: <FaNodeJs />,
    short: "Node.js, Python, FastAPI, Django, REST, GraphQL, WebSockets, gRPC....",
    details: (
      <ul>
        <li>Built scalable backend services using Node.js and Python (FastAPI/Django).</li>
        <li>Designed secure APIs with OpenAPI/Swagger-style contracts and clean versioning patterns.</li>
        <li>Implemented real-time features using WebSockets and event-driven patterns where needed.</li>
        <li>Applied auth patterns like JWT-based RBAC and secure request validation.</li>
        <li>Focused on reliability with retries, rate limiting, and defensive API design.</li>
      </ul>
    ),
  },
  {
    title: "Cloud & Infrastructure",
    icon: <FaAws />,
    short: "AWS (EC2, S3, RDS, EKS), Terraform, CI/CD, Docker....",
    details: (
      <ul>
        <li>Deployed and operated services on AWS using EC2, S3, RDS, and EKS (Kubernetes).</li>
        <li>Provisioned repeatable environments using Terraform (modular IaC + state management).</li>
        <li>Containerized services with Docker for consistent builds and deployments.</li>
        <li>Supported CI/CD workflows using GitHub Actions and automated release pipelines.</li>
        <li>Hardened environments with IAM controls, secrets handling, and secure defaults.</li>
      </ul>
    ),
  },
  {
    title: "Data & Caching",
    icon: <FaDocker />,
    short: "PostgreSQL, MySQL, Redis (Pub/Sub, Lua), migrations, performance tuning....",
    details: (
      <ul>
        <li>Worked extensively with PostgreSQL and MySQL in production environments.</li>
        <li>Improved query performance using indexing, partitioning patterns, and materialized views.</li>
        <li>Used Redis for caching, Pub/Sub messaging, and Lua scripting for rate limiting.</li>
        <li>Supported zero-downtime migration strategies and safe rollout plans.</li>
        <li>Designed data access patterns that stay fast under load and easy to maintain.</li>
      </ul>
    ),
  },
  {
    title: "Observability & Reliability",
    icon: <FaBolt />,
    short: "Prometheus, Grafana, CloudWatch, ELK, dashboards, alerting, incident readiness....",
    details: (
      <ul>
        <li>Built dashboards and alerts using Prometheus + Grafana to improve visibility.</li>
        <li>Used CloudWatch and ELK-style logging to trace issues across services.</li>
        <li>Focused on improving uptime with rate limiting, safer deployments, and better monitoring.</li>
        <li>Reduced time-to-detect by improving metrics coverage and alert quality.</li>
        <li>Designed systems with “operability-first” thinking, not just feature delivery.</li>
      </ul>
    ),
  },
  {
    title: "Testing & Engineering Practices",
    icon: <FaVial />,
    short: "Jest, PyTest, TDD, code reviews, clean architecture, maintainability....",
    details: (
      <ul>
        <li>Wrote unit/integration tests using Jest (frontend) and PyTest (backend).</li>
        <li>Practiced TDD where it made sense, especially around critical workflows.</li>
        <li>Used code reviews and clean abstractions to keep the codebase maintainable.</li>
        <li>Focused on reducing regressions by improving test quality and coverage.</li>
        <li>Worked in Agile/Scrum environments with steady iteration and release discipline.</li>
      </ul>
    ),
  },
];

const Experience: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="experiance" className="experience-section">
      <h2>Areas of Expertise</h2>
      <p className="subtitle">
        Based on 5+ years building and scaling production SaaS platforms across React/Next.js,
        Node.js/Python services, and AWS infrastructure.
      </p>

      <div className="experience-grid">
        {experienceData.map((item, index) => {
          const isActive = activeIndex === index;
          const isHidden = activeIndex !== null && !isActive;

          return (
            <div
              key={index}
              className={`experience-card ${isActive ? "active" : ""} ${
                isHidden ? "hidden" : ""
              }`}
              onClick={() => {
                if (!isActive) setActiveIndex(index);
              }}
            >
              {isActive && (
                <button
                  className="close-button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(null);
                  }}
                >
                  <IoClose />
                </button>
              )}

              <div className="icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{isActive ? item.details : item.short}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
