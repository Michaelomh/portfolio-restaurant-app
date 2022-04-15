import Image from "next/image";
import { motion } from "framer-motion";

import { slideLeft, slideUp, slideRight } from "../FramerMotionVariants";
import beerPour from "../../assets/images/home/beerPour.jpg";
import beers from "../../assets/images/home/beers.jpg";

export default function HomeSectionThree() {
  return (
    <section className="flex flex-col md:flex-row my-4">
      <motion.div
        variants={slideLeft}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="w-full md:w-1/4 h-[350px] md:h-[700px] relative -z-10"
      >
        <Image layout="fill" objectFit="cover" src={beerPour} />
      </motion.div>
      <motion.div
        variants={slideUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="w-full md:w-1/4 p-6 md:p-12 flex justify-center text-left flex-col"
      >
        <h1 className="header text-5xl">Self-Pour</h1>
        <h2 className="header text-2xl text-red-700 tracking-wider  mt-4 mb-6">Local, Craft Beer</h2>
        <p>
          We’ve got variety on tap—with over 23 rotating, seasonal craft beers, cider and wines from regional, local and
          national breweries and wineries.
        </p>
      </motion.div>
      <motion.div
        variants={slideRight}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="w-full md:w-1/2 h-[300px] md:h-[700px] relative -z-10"
      >
        <Image layout="fill" objectFit="cover" src={beers} />
      </motion.div>
    </section>
  );
}
