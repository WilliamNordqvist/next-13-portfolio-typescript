"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Img from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";

type CardProps = {
  src: string;
  alt: string;
  onClick: () => void;
  name: string;
};

export const Card = ({ src, alt, onClick, name }: CardProps) => {
  const { isMobile, isDesktop } = useIsMobile();
  const [isHover, setHover] = useState(false);

  useEffect(() => {
    if (isMobile) {
      setHover(true);
    } else {
      setHover(false);
    }
  }, [isMobile]);

  return (
    <motion.div
      className=" border rounded-lg overflow-hidden relative border-white mx-0 sm:mx-2 my-2"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileHover={{ y: -5, boxShadow: "white 0px 25px 20px -20px" }}
      onHoverStart={isDesktop ? () => setHover(true) : undefined}
      onHoverEnd={isDesktop ? () => setHover(false) : undefined}
      viewport={{ once: true }}
    >
      <Img className="h-full" src={src} alt={alt} width={420} height={500} />
      <motion.div
        animate={{ y: isHover ? 0 : 300 }}
        transition={{ duration: 0.2 }}
        className="absolute top-0 left-0 h-full w-full bg-gradient-to-t from-black via-transparen to-transparent flex justify-end p-5 cursor-auto flex-col items-center"
      >
        <h3 className="mb-3 font-extralight text-white uppercase text-center">
          {name}
        </h3>
        <button
          className=" w-1/2 sm:w-1/3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded "
          onClick={onClick}
        >
          Read more
        </button>
      </motion.div>
    </motion.div>
  );
};
