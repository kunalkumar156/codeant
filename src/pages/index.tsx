import Repositories from "@/components/home/Repositories";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>CodeAnt AI</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>
      <Repositories />
    </>
  );
}
