import { motion } from "motion/react";

const Reveal = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
}) => {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        y: 40,
        scale: 0.95,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;