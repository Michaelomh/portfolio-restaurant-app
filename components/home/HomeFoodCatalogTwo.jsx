import Image from "next/image";
import { motion } from "framer-motion";

import { slideLeft, slideRight } from "../FramerMotionVariants";

export default function HomeFoodCatalogTwo() {
  return (
    <section className="flex flex-col md:flex-row mt-4">
      <motion.div
        variants={slideLeft}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="w-full md:w-5/12 h-[250px] md:h-[400px] relative mb-4 md:mr-4"
      >
        <h2 className="home__imageCaption bottom-10 left-10">Philly Cheesesteak</h2>
        <Image layout="fill" objectFit="cover" alt="image of our Philly Cheesesteak" src="/images/home/philly.jpg" />
      </motion.div>
      <motion.div
        variants={slideRight}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="w-full md:w-7/12 h-[250px] md:h-[400px] relative"
      >
        <h2 className="home__imageCaption bottom-10 left-10">BBQ Chicken</h2>
        <Image layout="fill" objectFit="cover" alt="image of our BBQ Chicken Pizza" src="/images/home/pizza.jpg" />
      </motion.div>
    </section>
  );
}
