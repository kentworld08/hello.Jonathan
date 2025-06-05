import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const fadeInOut = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  hidden: { opacity: 0, y: 50, transition: { duration: 0.6 } },
};

const SectionWrapper = (Component) => {
  return function WrappedComponent(props) {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.25,
      triggerOnce: false,
    });

    useEffect(() => {
      if (inView) {
        controls.start("visible");
      } else {
        controls.start("hidden");
      }
    }, [controls, inView]);

    return (
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={fadeInOut}
        style={{ marginBottom: "3rem" }}
      >
        <Component {...props} />
      </motion.section>
    );
  };
};

export default SectionWrapper;
