import Image from "next/image";

export default function HomeHero() {
  return (
    <section>
      <div className="absolute flex flex-col md:z-10 justify-center text-center w-full h-full -z-10">
        <h1 className="text-white text-4xl md:text-[3em] header tracking-[4px]">Life&apos;s too short...</h1>
        <h1 className="text-white text-7xl md:text-[8em] header tracking-[4px] md:leading-[128px]">Have a Blast</h1>
      </div>
      <div className="w-full h-[calc(100vh-56px)] relative -z-20">
        <Image
          className="-z-20"
          layout="fill"
          objectFit="cover"
          alt="Homepage hero image of our burgers"
          src="/images/home/hero_featured.jpg"
        />
      </div>
    </section>
  );
}
