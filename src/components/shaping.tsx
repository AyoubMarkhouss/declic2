import React, { useState } from "react";
import { motion } from "framer-motion";

const WaveEffectOnHover = () => {
  const text = "we shape the future";
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const handleHover = (index: number) => {
    setHoverIndex(index);
  };

  const handleMouseLeave = () => {
    setHoverIndex(null); // Reset wave effect when mouse leaves the text container
  };

  return (
    <div>
      <div className="flex justify-center py-10">
        <motion.div
          style={{
            display: "flex",
            gap: "0.1em",
            fontSize: "7rem",
            textAlign: "center",
            justifyContent: "center",
            fontWeight: 600,
          }}
          className="w-fit"
          onMouseLeave={handleMouseLeave} // Reset the effect when mouse leaves
        >
          {text.split("").map((char, index) => {
            // Calculate the distance from the hovered index and apply the wave strength
            const distance =
              hoverIndex !== null ? Math.abs(index - hoverIndex) : 0;
            const waveStrength = Math.max(0, 1 - distance * 0.2); // Decay effect based on distance from hovered letter
            const scale = 1 + waveStrength * 0.3; // Apply scaling to the hovered and nearby letters
            return (
              <motion.span
                key={index}
                onMouseEnter={() => handleHover(index)} // Trigger the hover effect
                style={{
                  display: "inline-block",
                  WebkitTextStroke:
                    hoverIndex === null ? "0em" : `${waveStrength * 0.05}em`, // Reduce stroke size by changing this factor
                  transform: `scale(${scale})`, // Apply scale effect
                  transition:
                    "transform 0.3s ease-out, WebkitTextStroke 0.3s ease-out", // Smooth wave animation for both scale and stroke
                }}
              >
                {char}
              </motion.span>
            );
          })}
        </motion.div>
      </div>
      <div className="grid grid-cols-3 px-10 gap-5">
        {content.map((g, i) => (
          <p key={i}>{g}</p>
        ))}
      </div>
    </div>
  );
};

export default WaveEffectOnHover;

const content = [
  "At the core of our inventive approach is the significance of cooperation. We strongly maintain that successful interaction and partnering closely with our clients are essential for achieving project goals. By proactively participating in discussion, we endeavor to genuinely comprehend our clients' requirements, goals, and ambitions. This thorough grasp enables us to produce a final outcome that not only corresponds to their distinctive vision but surpasses their anticipations. Jointly, we set out on a creative voyage to transform their concepts into a vivid actuality.",
  "we understand that a well-designed website is a powerful tool for businesses to attract and engage their target audience. We believe that every website should not only look visually appealing but also provide a seamless user experience and effectively convey the brand's message. With this philosophy in mind, we work closely with our clients to understand their unique requirements, brand identity, and target market, ensuring that every website we create is tailor-made to meet their specific needs.",
  "We maintain that exceptional aesthetics must be accompanied by outstanding functionality in both design and creation. We strive for excellence, even in the smallest details. Our objective is to provide designs that exceed your expectations while meeting all requirements.",
];
