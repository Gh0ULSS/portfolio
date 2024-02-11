import React, { useState, useEffect } from "react";

const FancyEffect2 = ({ initialText, typingCharacters }) => {
  const [text, setText] = useState(initialText);
  let interval = null;

  const handleMouse= () => {
    let iteration = 0;

    clearInterval(interval);

    interval = setInterval(() => {
      setText((prevText) =>
        prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return typingCharacters[Math.floor(Math.random() * typingCharacters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 65);
  };

  useEffect(() => {
    handleMouse();
    return () => clearInterval(interval);
  }, []);

  return (
    <h1>
      {text}
    </h1>
  );
};

export default FancyEffect2;
