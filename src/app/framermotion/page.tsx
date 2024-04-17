"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bird from "@/app/Images/1.jpg";

function Framermotion() {
  return (
    <div className="flex flex-col items-center gap-10 mt-5">
      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "#fff",
        }}
        animate={{ rotate: 360 }}
        transition={{ ease: "linear", duration: 2, repeat: 2 }}
      />
      <motion.button
        className="bg-[#444]
      text-white
      rounded-sm p-[0.5rem]"
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}
      >
        Button
      </motion.button>

      <motion.div
        style={{
          width: 150,
          height: 150,
          borderRadius: 30,
          backgroundColor: "#fff",
        }}
        animate={{ y: [0, 50, 0] }}
        transition={{ ease: "linear", duration: 5, repeat: Infinity }}
      />
      <br />

      <div className="img-wrapper">
        <Image
          src={bird}
          width={200}
          height={200}
          alt="Picture of the bird"
          className="perspective-left"
        />
      </div>
      <div className="img-wrapper">
        <Image
          src={bird}
          width={200}
          height={200}
          alt="Picture of the bird"
          className="perspective-right"
        />
      </div>
    </div>
  );
}

export default Framermotion;
