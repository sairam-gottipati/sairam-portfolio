import React, { useState, useRef } from "react";
import Typewriter from "typewriter-effect";
import { FaFilePdf, FaLinkedin } from "react-icons/fa";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import "./About.scss";

const baseUrl = import.meta.env.BASE_URL;

type Bubble = {
  name: string;
  src: string;
  style: {
    top: string;
    left: string;
    animationDuration: string;
    animationDelay: string;
  };
};

const techLogos = [
  { name: "React", src: `${baseUrl}assets/react.svg` },
  { name: "Node.js", src: `${baseUrl}assets/nodejs.svg` },
  { name: "AWS", src: `${baseUrl}assets/aws.svg` },
  { name: "GraphQL", src: `${baseUrl}assets/graphql.svg` },
  { name: "Docker", src: `${baseUrl}assets/docker.svg` },
  { name: "TypeScript", src: `${baseUrl}assets/typescript.svg` },
  { name: "Java", src: `${baseUrl}assets/java.svg` },
  { name: "Spring", src: `${baseUrl}assets/spring.svg` },
  { name: "Angular", src: `${baseUrl}assets/angular.svg` },
];

const generateGridPositions = (cols: number, rows: number) => {
  const positions = [];
  const gapX = 100 / cols;
  const gapY = 100 / rows;
  for (let i = 0; i < cols * rows; i++) {
    const col = i % cols;
    const row = Math.floor(i / cols);
    positions.push({
      top: `${row * gapY + Math.random() * 5}%`,
      left: `${col * gapX + Math.random() * 5}%`,
      animationDuration: `${8 + Math.random() * 4}s`,
      animationDelay: `${Math.random() * 3}s`,
    });
  }
  return positions;
};

const shuffleArray = <T,>(array: T[]): T[] => {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const About: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [poppingIndex, setPoppingIndex] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [scoreMessage, setScoreMessage] = useState<string | null>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const { width, height } = useWindowSize();

  const startGame = () => {
    const newPositions = generateGridPositions(3, 3);
    setBubbles(
      shuffleArray(techLogos).map((logo, i) => ({
        ...logo,
        style: newPositions[i],
      }))
    );
    setStartTime(null);
    setScoreMessage(null);
    setGameStarted(true);
    setShowConfetti(false);
  };

  const popBubble = (index: number) => {
    if (!startTime) setStartTime(Date.now());
    setPoppingIndex(index);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
    setTimeout(() => {
      setBubbles((prev) => {
        const updated = prev.filter((_, i) => i !== index);
        if (updated.length === 0 && startTime) {
          const duration = ((Date.now() - startTime) / 1000).toFixed(2);
          setScoreMessage(`🎉 You popped all logos in ${duration} seconds!`);
          setShowConfetti(true);
        }
        return updated;
      });
      setPoppingIndex(null);
    }, 200);
  };

  return (
    <section id="about">
      <div className="about-wrapper">
        <div className="about-text">
          <h1>👋 Hi, </h1>
          <h1>I'm Sai Ram Gottipati</h1>
          <div className="typewriter-text">
            <Typewriter
              options={{
                strings: [
                  "Senior Full-Stack Software Engineer",
                  "Building Scalable SaaS Platforms",
                  "React • Node.js • Python • AWS",
                  "AWS Certified Solution Architect 🚀",
                  "Production-Ready APIs & Systems",
                  "Performance, Reliability, and Scale"
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 25,
              }}
            />
          </div>

          <p>
          I’m a Full-Stack Software Engineer with over <strong>5+ years</strong> of experience who enjoys building things that are reliable, scalable, and genuinely pleasant to use. Over the years, I’ve worked across the stack—crafting clean, responsive user interfaces and building high-throughput backend services that run reliably in production on the cloud.

Most of my experience has been in SaaS environments, where I’ve owned features end to end—from early design conversations to deployment, monitoring, and iteration. I care deeply about performance, secure API design, system reliability, and writing code that teams can maintain and build on with confidence.

I’m especially comfortable working with modern frontend frameworks like{" "}
<strong>React.js</strong> and <strong>Next.js</strong>, alongside backend services built with{" "}
<strong>Node.js</strong>, <strong>Java</strong>, and <strong>TypeScript</strong>. Lately, I’ve been focused on improving observability, API resilience, and cloud infrastructure on{" "}
<strong>AWS</strong>, making sure applications don’t just work—but continue to work well as they scale.


          </p>

          <div className="button-group">
            <a
              href="https://www.linkedin.com/in/sairam-gottipati/"
              className="linkedin-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin style={{ marginRight: "8px" }} />
              LinkedIn
            </a>

            <a
              href={encodeURI(`${baseUrl}SAI RAM GOTTIPATI-fsd 01 (1).pdf`)}
              className="resume-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFilePdf style={{ marginRight: "8px" }} />
              My Resume
            </a>
          </div>
        </div>

        <div className="tech-bubble-game">
          <h2>👆 CLICK TO POP THE LOGO</h2>
          <div className="game-controls">
            {!gameStarted && (
              <button className="game-button" onClick={startGame}>
                Start Game
              </button>
            )}
            {scoreMessage && (
              <>
                <p className="score-message animate-score">{scoreMessage}</p>
                <button className="game-button" onClick={startGame}>
                  Restart Game
                </button>
              </>
            )}
          </div>

          {gameStarted && (
            <div className="bubble-area">
              {bubbles.map((bubble, index) => (
                <img
                  key={index}
                  src={bubble.src}
                  alt={bubble.name}
                  className={`bubble fade-in ${
                    poppingIndex === index ? "popping" : ""
                  }`}
                  style={{
                    top: bubble.style.top,
                    left: bubble.style.left,
                    animationDuration: bubble.style.animationDuration,
                    animationDelay: bubble.style.animationDelay,
                    position: "absolute",
                  }}
                  title={`Click to pop ${bubble.name}`}
                  onClick={() => popBubble(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {showConfetti && <Confetti width={width} height={height} />}
      <audio ref={audioRef} src={`${baseUrl}pop.mp3`} preload="auto" />
    </section>
  );
};

export default About;
