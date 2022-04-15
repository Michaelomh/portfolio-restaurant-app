import Head from "next/head";

export default function Header() {
  return (
    <div>
      <Head>
        <title>Restaurant Portfolio Website</title>
        <meta name="description" content="Restaurant website for a bar built using NextJS" />
        <meta name="keywords" content="portfolio, bar, restaurant, beer, food" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}
