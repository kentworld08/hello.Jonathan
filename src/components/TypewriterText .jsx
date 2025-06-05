import React, { useState, useEffect } from "react";

const TypewriterText = ({
  line1,
  line2,
  speed = 100,
  pauseBetweenLines = 1000,
  pauseAfterComplete = 2000,
}) => {
  const [displayedLine1, setDisplayedLine1] = useState("");
  const [displayedLine2, setDisplayedLine2] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState("line1"); // line1 → line2 → reset

  useEffect(() => {
    let timeout;

    if (phase === "line1" && index < line1.length) {
      timeout = setTimeout(() => {
        setDisplayedLine1((prev) => prev + line1[index]);
        setIndex(index + 1);
      }, speed);
    } else if (phase === "line1" && index === line1.length) {
      timeout = setTimeout(() => {
        setPhase("line2");
        setIndex(0);
      }, pauseBetweenLines);
    }

    if (phase === "line2" && index < line2.length) {
      timeout = setTimeout(() => {
        setDisplayedLine2((prev) => prev + line2[index]);
        setIndex(index + 1);
      }, speed);
    } else if (phase === "line2" && index === line2.length) {
      timeout = setTimeout(() => {
        setDisplayedLine1("");
        setDisplayedLine2("");
        setPhase("line1");
        setIndex(0);
      }, pauseAfterComplete);
    }

    return () => clearTimeout(timeout);
  }, [
    index,
    phase,
    line1,
    line2,
    speed,
    pauseBetweenLines,
    pauseAfterComplete,
  ]);

  return (
    <span className="font-medium text-white whitespace-pre-wrap">
      {displayedLine1} &nbsp;
      <br className="sm:block hidden" />
      {displayedLine2}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default TypewriterText;
