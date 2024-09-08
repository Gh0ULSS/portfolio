import React from "react";
import Typewriter from "typewriter-effect";

function FancyEffect1() {
  return (
    <Typewriter
      options={{
        strings: [
          "Web Development",
          "Mobile Development",
          "System Administration",
          "Red Teaming",
          "Blue Teaming",
          "CTF Player"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default FancyEffect1;