"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import bird from "./Images/1.jpg";
import news from "./Images/3.jpg";
import new1 from "./Images/4.jpg";
import Image from "next/image";

let imgArray = [{ src: bird }, { src: new1 }, { src: news }];

export default function Home() {
  const [imgNo, setImgNo] = useState(0);

  const hanldeImageNext = () => {
    if (imgNo === imgArray.length - 1) {
      setImgNo(0);
    } else setImgNo((prev) => prev + 1);
  };

  const hanldeImagePrev = () => {
    if (imgNo === 0) {
      setImgNo(imgArray.length - 1);
    } else setImgNo((prev) => prev - 1);
  };

  const imgPosition = (index: number): string => {
    if (index === imgNo) {
      return "activeImg";
    } else if (index === imgNo - 1) {
      return "imgLeft perspective-left";
    } else if (index === imgNo + 1) {
      return "imgRight perspective-right";
    } else return "nonActiveImg";
  };

  return (
    <motion.main
      className="container mx-auto p-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <div className="flex p-10 gap-5 justify-center containerMain img-wrapper">
        {imgArray?.map((el, i) => {
          return (
            <Image
              key={i}
              className={imgPosition(i)}
              src={el.src.src}
              width={200}
              height={200}
              alt="Picture of the bird"
            />
          );
        })}
      </div>
      <div className="mt-20">
        <div className="flex justify-center gap-5 ">
          <button className="bg-gray-400 p-2" onClick={hanldeImagePrev}>
            Previous
          </button>
          <button className="bg-gray-400 p-2" onClick={hanldeImageNext}>
            Next
          </button>
        </div>
      </div>
    </motion.main>
  );
}
