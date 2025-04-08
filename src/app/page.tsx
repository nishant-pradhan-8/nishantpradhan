import Head from "next/head";
import Main from "@/components/main";
export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <main className="flex justify-center min-h-screen m-4 items-center">
        <Main />
    </main></>
   
  );
}
