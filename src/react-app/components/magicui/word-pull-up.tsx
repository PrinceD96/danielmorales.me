import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface WordPullUpProps {
  words: string;
  className?: string;
  delayMultiple?: number;
}

export default function WordPullUp({
  words,
  className,
  delayMultiple = 0.05,
}: WordPullUpProps) {
  const letters = words.split("");

  const pullupVariant = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * delayMultiple,
      },
    }),
  };

  return (
    <div className="flex justify-center">
      {letters.map((letter, i) => (
        <motion.span
          key={i}
          variants={pullupVariant}
          initial="initial"
          animate="animate"
          custom={i}
          className={cn(
            "font-display text-center font-bold drop-shadow-sm",
            className
          )}
        >
          {letter === " " ? <span>&nbsp;</span> : letter}
        </motion.span>
      ))}
    </div>
  );
}
