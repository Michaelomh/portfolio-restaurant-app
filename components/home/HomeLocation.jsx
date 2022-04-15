import { motion } from "framer-motion";

import { fadeIn } from "../FramerMotionVariants";

const ChevronRight = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 inline" viewBox="0 0 18 18" fill="currentColor">
      <path
        fillRule="evenodd"
        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
};

const locations = [
  {
    name: "Location One",
    address: "7408 In, Rd.",
    phone: "(668) 306-4643",
    url: "",
  },
  {
    name: "Location Two",

    address: "335-8377 A, Rd.",
    phone: "1-611-639-4335",
    url: "",
  },
  {
    name: "Location Three",
    address: "P.O. Box 751, 959 Mi, Ave",
    phone: "(402) 506-1773",
    url: "",
  },
];

export default function HomeSectionTwo({ location, setLocation }) {
  return (
    <section className="flex flex-col md:flex-row my-4">
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="w-full md:w-1/2 h-[400px] md:h-[700px] bg-orange-600 flex  justify-center flex-col"
      >
        <div className="p-8 text-left md:text-center">
          <h1 className="header font-extrabold text-5xl md:text-8xl tracking-[20px]">Where</h1>
          <h2 className="header font-extrabold text-3xl md:text-4xl text-white tracking-[6px] ">To find us</h2>
        </div>

        <div className="p-8">
          <div className="flex content-center text-white hover:text-black" onClick={() => setLocation(0)}>
            {location === 0 ? <ChevronRight /> : <div className="p-4" />}
            <p className="uppercase font-bold text-2xl md:text-3xl text tracking-[4px] mb-6 inline hover:cursor-pointer hover:underline">
              Location 1
            </p>
          </div>
          <div className="flex content-center text-white hover:text-black" onClick={() => setLocation(1)}>
            {location === 1 ? <ChevronRight /> : <div className="p-4" />}
            <p className="uppercase font-bold  text-2xl md:text-3xl tracking-[4px] mb-6 inline hover:cursor-pointer hover:underline">
              Location 2
            </p>
          </div>
          <div className="flex content-center text-white hover:text-black" onClick={() => setLocation(2)}>
            {location === 2 ? <ChevronRight /> : <div className="p-4" />}
            <p className="uppercase font-bold  text-2xl md:text-3xl tracking-[4px] mb-6 inline hover:cursor-pointer hover:underline">
              Location 3
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="w-full md:w-1/2 h-[500px] md:h-[700px] md:pl-4"
        variants={fadeIn}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
      >
        <div className="w-full h-1/2 relative">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.775491339587!2d103.8981470431013!3d1.3100174500667932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1916e3be89ed%3A0x8dad56b5aaef2ee2!2s6%20Letter%20Coffee!5e0!3m2!1sen!2ssg!4v1648991810630!5m2!1sen!2ssg"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex flex-col justify-center p-16">
          <p className="header text-3xl tracking-[1px] mb-4">{locations[location].name}</p>
          <p className="font-heading text-md mb-2">{locations[location].address}</p>
          <p className="font-heading uppercase font-bold text-xl tracking-[2px] mb-2">{locations[location].phone}</p>
          <p className="header text-md tracking-[2px] text-red-700">Get Directions</p>
        </div>
      </motion.div>
    </section>
  );
}
