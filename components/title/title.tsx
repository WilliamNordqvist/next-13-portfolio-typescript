import { motion } from "framer-motion";
import React from "react";

export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.h1
      className=" text-center mb-14 text-4xl sm:text-6xl uppercase"
      initial={{ scale: 0 }}
      whileInView={{ scale: [0, 1.2, 1] }}
      transition={{ type: "spring", stiffness: 75, mass: 0.9, delay: .5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.h1>
  );
};
