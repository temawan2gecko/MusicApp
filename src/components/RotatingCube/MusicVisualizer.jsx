import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./Card.css";

const Bubbles = () => {
  useEffect(() => {
    const bubbles = gsap.utils.toArray(".bubble");
    bubbles.forEach((bubble) => {
      gsap.to(bubble, {
        x: "random(-300, 300)",
        y: "random(-300, 300)",
        scale: "random(0.5, 1.5)",
        opacity: "random(0.5, 1)",
        duration: "random(2, 6)",
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }, []);

  const createBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 50; i++) {
      bubbles.push(<div key={i} className="bubble"></div>);
    }
    return bubbles;
  };

  return (
    <div className="card__wrapper">
      <h1 className="title card__title">Hello, this is my little music player	&#128400;</h1>
      <p>You can listen to some music in the trends music tab, as well as in the player on the right &#127925;</p>
      <div className="bubbles__wrapper">{createBubbles()}</div>
    </div>
  );
};

export default Bubbles;
