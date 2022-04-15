import Image from "next/image";
import { motion } from "framer-motion";

import Layout from "../components/Layout";
import career1 from "../assets/images/careers/career-01.jpg";
import careerHero from "../assets/images/careers/career-hero.jpg";
import Spacer from "../components/Spacer";

import { fadeIn, slideLeft } from "../components/FramerMotionVariants";

export default function Careers() {
  return (
    <Layout>
      <motion.section variants={fadeIn} initial="initial" whileInView="whileInView" viewport={{ once: true }}>
        <Image height="350px" layout="responsive" className="-z-10" src={careerHero} />
      </motion.section>

      <Spacer height="75px" />
      <h1 className="header text-7xl text-center pb-16">Careers</h1>

      <section className="flex flex-col md:flex-row container mx-auto pb-24">
        <motion.div
          variants={slideLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="w-full md:w-1/2 md:pr-6 px-8"
        >
          <form className="flex flex-col">
            <select name="location" id="location" className="form__select">
              <option value="" disabled defaultValue>
                Select a Location
              </option>
              <option value="Location-1">Location 1</option>
              <option value="Location-2">Location 2</option>
              <option value="Location-3">Location 3</option>
            </select>

            <select name="position" id="position" className="form__select">
              <option value="" disabled defaultValue>
                Select a Position
              </option>
              <option value="server">Server</option>
              <option value="cook">Cook</option>
              <option value="pizza-artisan">Pizza Artisan</option>
              <option value="Prep">Prep</option>
              <option value="dishwasher">Dishwasher</option>
              <option value="cashier">Cashier</option>
            </select>

            <input
              type="text"
              name="name"
              id="name"
              autoComplete="name"
              placeholder="Full Name"
              className="form__input"
            />

            <input
              type="text"
              name="phone"
              id="phone"
              autoComplete="tel"
              placeholder="Phone Number"
              className="form__input"
            />

            <input
              type="text"
              name="email"
              id="email"
              autoComplete="email"
              placeholder="email"
              className="form__input"
            />

            <input
              type="text"
              name="address"
              id="address"
              autoComplete="address-level1"
              placeholder="address"
              className="form__input"
            />

            <input
              type="text"
              name="city"
              id="city"
              autoComplete="address-level2"
              placeholder="city"
              className="form__input"
            />

            <input
              type="text"
              name="state"
              id="state"
              autoComplete="address-level3"
              placeholder="state"
              className="form__input"
            />

            <input
              type="text"
              name="zip"
              id="zip"
              autoComplete="address-level4"
              placeholder="zip"
              className="form__input"
            />
            <h1 className="header  text-left pb-8 tracking-[4px]">Upload Cover &amp; application</h1>

            <input type="file" name="resume" id="resume" className="pb-4 block w-full" />

            <button
              type="submit"
              className="form__button"
              onClick={() =>
                alert("Thank you! We have received your application. You will hear from us if you are shortlisted.")
              }
            >
              SEND
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={fadeIn}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="md:w-1/2 w-full p-8"
        >
          <div className="w-full h-[600px] relative mr-4 -z-10">
            <Image layout="fill" objectFit="cover" src={career1} />
          </div>
          <div className="center mt-12">
            <h1 className="header text-5xl text-center pb-16">Open Positions</h1>
            <p className="careers_openPosition">Server</p>
            <p className="careers_openPosition">Cook</p>
            <p className="careers_openPosition">Pizza artisan</p>
            <p className="careers_openPosition">Prep</p>
            <p className="careers_openPosition">Dishwasher</p>
            <p className="careers_openPosition">Cashier</p>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
}
