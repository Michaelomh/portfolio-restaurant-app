import { useState } from "react";
import Layout from "../components/Layout";

import HomeHero from "../components/home/HomeHero";
import HomeSectionOne from "../components/home/HomeSectionOne";
import HomeSectionTwo from "../components/home/HomeSectionTwo";
import HomeSectionThree from "../components/home/HomeSectionThree";
import HomeFoodCatalogOne from "../components/home/HomeFoodCatalogOne";
import HomeFoodCatalogTwo from "../components/home/HomeFoodCatalogTwo";
import HomeLocation from "../components/home/HomeLocation";

export default function Home() {
  const [location, setLocation] = useState(0);

  return (
    <Layout>
      <HomeHero />
      <HomeSectionOne />
      <HomeSectionTwo />
      <HomeSectionThree />
      <HomeFoodCatalogOne />
      <HomeLocation location={location} setLocation={setLocation} />
      <HomeFoodCatalogTwo />
    </Layout>
  );
}
