import Image from "next/image";
import { motion } from "framer-motion";

import { slideLeft, slideRight } from "../FramerMotionVariants";

export default function HomeSectionTwo() {
  return (
    <section className="flex flex-col md:flex-row my-4">
      <motion.div
        variants={slideLeft}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="w-full md:w-6/10 h-[250px] md:h-[700px] relative -z-10"
      >
        <h2 className="home__imageCaption bottom-28 left-10">Bavariyan Pretzel</h2>
        <h2 className="home__imageCaption top-64 right-10">Caprese Skewers</h2>
        <Image
          layout="fill"
          objectFit="cover"
          alt="image of our Bavariyan Pretzel and Caprese Skewers"
          src="/images/home/bavarianpretzel.jpg"
        />
      </motion.div>

      <motion.div
        variants={slideRight}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="w-full md:w-2/5 p-6 md:p-16 flex justify-center text-left flex-col"
      >
        <h1 className="header text-5xl">Damn Good,</h1>
        <h2 className="header text-2xl text-red-700 tracking-wider mt-4 mb-6">Honest Food</h2>
        <p>
          We make classic, American comfort food from scratch with the freshest, locally sourced ingredients. And we do
          it better than anyone else.
        </p>
      </motion.div>
    </section>
  );
}
