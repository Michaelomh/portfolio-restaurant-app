import Image from "next/image";
import { motion } from "framer-motion";

import { slideLeft, slideUp, slideRight } from "../../components/FramerMotionVariants";

export default function HomeSectionOne() {
  return (
    <section className="flex flex-col md:flex-row my-4">
      <motion.div
        variants={slideLeft}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="w-full md:w-1/4 h-[250px] md:h-[700px] relative -z-10"
      >
        <Image layout="fill" objectFit="cover" alt="Image of our bartender" src="/images/home/bartender.png" />
      </motion.div>

      <motion.div
        variants={slideUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="w-full md:w-1/4 p-6 md:p-12 flex justify-center flex-col break-words"
      >
        <h1 className="header text-5xl">Food and beer lovers come together</h1>
        <h2 className="header text-2xl text-red-700 tracking-wider mt-4">Life&apos;s just better at Blast</h2>
      </motion.div>
      <motion.div
        variants={slideRight}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="w-full md:w-1/2 h-[250px] md:h-[700px] relative -z-10"
      >
        <Image layout="fill" objectFit="cover" alt="Customers" src="/images/home/blastright.jpg" />
      </motion.div>
    </section>
  );
}
