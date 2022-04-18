import Image from "next/image";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import { fadeIn, slideRight } from "../components/FramerMotionVariants";

export default function GiftCards() {
  return (
    <Layout>
      <section className="mt-12 container mx-auto px-8 md:py-8 md:px-4">
        <h1 className="header text-5xl text-red-700">Be a friend who knows</h1>
        <h2 className="header text-7xl md:text-9xl">
          how to give <br />a good gift
        </h2>
      </section>

      <section className="flex flex-col md:flex-row mx-auto py-8 px-4">
        <motion.span
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="text-1xl w-full md:w-1/3 p-8 md:p-24 leading-8"
        >
          Flowers and balloons are out. Food and beer are in. For every birthday, holiday, wedding adn celebration,
          treat your friends and family to the gift of great food and 26+ self-pour taps.
        </motion.span>

        <motion.div
          variants={slideRight}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="w-full md:w-2/3 h-[250px] md:h-[500px] relative -z-10"
        >
          <Image layout="fill" objectFit="cover" alt="Customers" src="/images/gift-cards/gift-1.png" />
        </motion.div>
      </section>

      <h1 className="header text-1xl  text-center tracking-[4px] pb-16">At Participating locations</h1>
    </Layout>
  );
}
