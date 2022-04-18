import Image from "next/image";
import { motion } from "framer-motion";
import { slideLeft, slideRight } from "../FramerMotionVariants";

export default function HomeFoodCatalogOne() {
  return (
    <>
      <section className="flex flex-col md:flex-row my-4">
        <motion.div
          variants={slideLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="w-full md:w-8/12 h-[350px] md:h-[600px] relative md:mr-4 mb-4 -z-10"
        >
          <h2 className="home__imageCaption bottom-36 right-10">CowBoy burger</h2>
          <Image layout="fill" objectFit="cover" alt="image of our cowboy burger" src="/images/home/cowboyBurger.jpg" />
        </motion.div>
        <motion.div
          variants={slideRight}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="w-full md:w-4/12 h-[350px] md:h-[600px] relative -z-10"
        >
          <h2 className="home__imageCaption bottom-8 right-10">Bacon Wrapped Shrimp</h2>
          <Image
            layout="fill"
            objectFit="cover"
            alt="image of our Bacon Wrapped Shrimp"
            src="/images/home/baconWrappedShrimp.jpg"
          />
        </motion.div>
      </section>

      <section className="flex flex-col md:flex-row my-4">
        <motion.div
          variants={slideLeft}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="w-full md:w-7/12 h-[250px] md:h-[550px] relative md:mr-4 mb-4 -z-10"
        >
          <h2 className="home__imageCaption bottom-2 right-4 md:left-2">Kale Chicken Bowl</h2>
          <Image
            layout="fill"
            objectFit="cover"
            alt="image of our Kale Chicken Bowl"
            src="/images/home/kaleChickenBowl.jpg"
          />
        </motion.div>
        <motion.div
          variants={slideRight}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="w-full md:w-5/12 h-[250px] md:h-[550px] relative -z-10"
        >
          <h2 className="home__imageCaption md: bottom-4 md:top-4 left-8">Crispy Chicken Sandwich</h2>
          <Image
            layout="fill"
            objectFit="cover"
            alt="image of our Crispy Chicken Sandwich"
            src="/images/home/crispyChicken.jpg"
          />
        </motion.div>
      </section>
    </>
  );
}
