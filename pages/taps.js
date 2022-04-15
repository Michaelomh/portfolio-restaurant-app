import Image from "next/image";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import Spacer from "../components/Spacer";
import taps1 from "../assets/images/taps/taps-1.jpg";
import taps2 from "../assets/images/taps/taps-2.jpg";
import logo1 from "../assets/images/taps/taps-logo-1.png";
import logo2 from "../assets/images/taps/taps-logo-2.png";
import logo3 from "../assets/images/taps/taps-logo-3.png";
import { fadeIn, slideRight } from "../components/FramerMotionVariants";

export default function Taps() {
  return (
    <Layout>
      <section className="mt-12 container mx-auto py-8 px-4">
        <h1 className="header md:text-8xl text-7xl md:6xl">Locally sourced Beer</h1>
        <h2 className="header text-5xl  text-red-700">Served fresh</h2>
      </section>

      <section className="flex flex-col md:flex-row">
        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          className="w-full md:w-1/3 md:p-24 p-8"
        >
          <h3 className="header text-1xl text-red-700 tracking-[2px]">Self-pour</h3>
          <h2 className="header text-6xl mb-4 tracking-wider">Taps</h2>
          <span className="text-1xl leading-8">
            Local craft beer just hits different. We have over 23+ craft beers, ciders and wine on tap from local and
            regional breweries like Beaver Brewery, Acme Brewery, and ACME Brewing Co. With our self-pour tap
            technology, you don't have to wait for a bartender. Control your pour, so you can sample what you want or
            have a few pints of your favorite draft.
          </span>
        </motion.div>
        <motion.div
          variants={slideRight}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="w-full md:w-1/3  h-[600px] relative mr-4"
        >
          <Image layout="fill" objectFit="cover" src={taps1} />
        </motion.div>
        <motion.div
          variants={slideRight}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="w-full md:w-1/3 h-[600px] relative px-8"
        >
          <Image layout="fill" objectFit="cover" src={taps2} />
        </motion.div>
      </section>

      <Spacer height="150px" />

      <section className="container mx-auto py-8 px-4 text-center">
        <h1 className="header mb-1 text-5xl">Featured Breweries</h1>
        <h2 className="font-heading uppercase font-bold text-1xl text-red-700">Selection may vary by location</h2>

        <div className="flex flex-col md:flex-row container justify-between items-center md:mt-8 md:mb-12 ">
          <div className="my-8 md:my-0">
            <Image width={252} height={164} alt="featured breweries company 1" src={logo1} />
          </div>
          <div className="my-8 md:my-0">
            <Image width={206} height={156} alt="featured breweries company 2" src={logo2} />
          </div>
          <div className="my-8 md:my-0">
            <Image width={360} height={111} alt="featured breweries company 3" src={logo3} />
          </div>
        </div>
      </section>
    </Layout>
  );
}
