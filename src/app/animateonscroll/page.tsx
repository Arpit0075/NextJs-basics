"use client";
import styles from "./animateonscroll.module.css";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

const Animateonscroll = () => {
  let section1Ref = useRef<HTMLElement>(null);
  let section2Ref = useRef<HTMLElement>(null);
  let section3Ref = useRef<HTMLElement>(null);
  let section4Ref = useRef<HTMLElement>(null);

  const { scrollYProgress: scrollProgress3 } = useScroll({
    target: section3Ref,
    offset: ["0.5 1", "1 1"],
  });

  const { scrollYProgress: scrollProgress4 } = useScroll({
    target: section4Ref,
    offset: ["0.5 1", "1 1"],
  });

  const { scrollYProgress: scrollProgress1 } = useScroll({
    target: section1Ref,
    offset: ["0.5 1", "1 1"],
  });

  const { scrollYProgress: scrollProgress2 } = useScroll({
    target: section2Ref,
    offset: ["0.5 1", "1 1"],
  });
  const opacityProgress3 = useTransform(scrollProgress3, [0.3, 1], [0.5, 1]);
  const scaleProgress3 = useTransform(scrollProgress3, [0, 1], [0.5, 1]);

  const opacityProgress4 = useTransform(scrollProgress4, [0.3, 1], [0.5, 1]);
  const scaleProgress4 = useTransform(scrollProgress4, [0, 1], [0.5, 1]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <h1>Animate on Scroll</h1>
      <motion.section
        className={`${styles.section}`}
        ref={section1Ref}
        style={{ opacity: scrollProgress1, scale: scrollProgress1 }}
      >
        <p>Scroll down to see the magic</p>
        <p>More ........</p>
      </motion.section>
      <motion.section
        className={`${styles.section}`}
        ref={section2Ref}
        style={{ opacity: scrollProgress2, scale: scrollProgress2 }}
      >
        <p>Scroll down to see the magic</p>
        <p>More ........</p>
      </motion.section>
      <motion.section
        style={{ opacity: opacityProgress3, scale: scaleProgress3 }}
        className={`${styles.section}`}
        ref={section3Ref}
      >
        <p>Scroll down to see the magic</p>
        <p>More ........</p>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          molestiae, dolorum odio qui facere enim culpa illo dolores aut ratione
          assumenda! Blanditiis sed dolore veniam quidem earum excepturi,
          deserunt aliquid.
        </h3>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          molestiae, dolorum odio qui facere enim culpa illo dolores aut ratione
          assumenda! Blanditiis sed dolore veniam quidem earum excepturi,
          deserunt aliquid.
        </h3>
      </motion.section>
      <motion.section
        style={{ opacity: opacityProgress4, scale: scaleProgress4 }}
        className={`${styles.section}`}
        ref={section4Ref}
      >
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          molestiae, dolorum odio qui facere enim culpa illo dolores aut ratione
          assumenda! Blanditiis sed dolore veniam quidem earum excepturi,
          deserunt aliquid.
        </h3>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          molestiae, dolorum odio qui facere enim culpa illo dolores aut ratione
          assumenda! Blanditiis sed dolore veniam quidem earum excepturi,
          deserunt aliquid.
        </h3>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          molestiae, dolorum odio qui facere enim culpa illo dolores aut ratione
          assumenda! Blanditiis sed dolore veniam quidem earum excepturi,
          deserunt aliquid.
        </h3>
        <h3>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis
          molestiae, dolorum odio qui facere enim culpa illo dolores aut ratione
          assumenda! Blanditiis sed dolore veniam quidem earum excepturi,
          deserunt aliquid.
        </h3>
      </motion.section>
    </motion.div>
  );
};

export default Animateonscroll;
