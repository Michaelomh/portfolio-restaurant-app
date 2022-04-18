import Image from "next/image";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import Spacer from "../components/Spacer";
import { fadeIn } from "../components/FramerMotionVariants";

export default function ContactUs() {
  return (
    <Layout>
      <motion.section
        className="-z-10 md:block hidden"
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <Image
          width={1280}
          height={360}
          layout="responsive"
          alt="image of our food"
          src="/images/contact-us/contact1.jpg"
        />
      </motion.section>

      <Spacer height="100px" />
      <h1 className="header text-7xl  text-center ">Contact Us</h1>
      <Spacer height="100px" />

      <motion.section
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="container mx-auto md:w-1/2 w-full px-8"
      >
        <h2 className="header text-3xl text-red-700 pb-12">How can we help?</h2>
        <form className="flex flex-col">
          <select name="location" id="location" className="form__select">
            <option value="" disabled defaultValue>
              Select a Location
            </option>
            <option value="Location-1">Location 1</option>
            <option value="Location-2">Location 2</option>
            <option value="Location-3">Location 3</option>
          </select>

          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            placeholder="Full Name"
            className="form__input"
          />

          <input type="text" name="email" id="email" autoComplete="email" placeholder="email" className="form__input" />

          <textarea id="query" name="query" placeholder="How can we help?" className="form__input" rows={12} />

          <button
            type="submit"
            className="form__button"
            onClick={() => alert("Your request has been submitted. We would take 3-5 business days to respond to you.")}
          >
            SEND
          </button>
        </form>
      </motion.section>

      <Spacer height="150px" />
    </Layout>
  );
}
