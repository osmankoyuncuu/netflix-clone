import Header from "@/component/Header";
import Head from "next/head";

export default function Home() {
  return (
    <div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Netflix" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        <section>
          {/*row*/}
          {/*row*/}
          {/*row*/}
          {/*row*/}
          {/*row*/}
        </section>
        {/*modal*/}
      </main>
    </div>
  );
}
