import { Iceland } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
export const iceland = Iceland({
  weight: "400",
  subsets: ["latin"],
});

export default function Main() {
  return (
    <div className="  flex flex-col justify-between gap-16">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 items-center border-[1px] border-gray-500 p-2 py-0 rounded-4xl">
          <p className=" font-sans text-blue-400">
            Pokhara, <span className="text-red-400">Nepal</span>
          </p>
        </div>
        <div className="flex flex-row gap-2 items-center border-[1px] border-gray-500 p-2 py-0 rounded-4xl">
          <div className="w-[10px] h-[10px] rounded-full bg-green-500"></div>
          <p className=" font-sans">Availiable for Work</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className={`${iceland.className} text-center text-6xl font-semibold `}>
          NISHANT PRADHAN
        </h1>
        <h2 className="text-3xl text-center">FullStack Web Developer.</h2>
        <div className="flex flex-row gap-4">
          <a
            target="_blank"
            href="https://github.com/nishant-pradhan-8"
            className="bg-gray-200 transition-transform duration-300 ease-in-out hover:scale-110 text-xl flex flex-row items-center gap-2 text-black p-2 px-6 cursor-pointer rounded-4xl"
          >
            <Image
              src="/images/github.svg"
              width={25}
              height={25}
              alt="github-logo"
            />
            GitHub
          </a>

          <Link
            href="/projects"
            className="group bg-transparent items-center border-[1px] transition-transform duration-300 ease-in-out hover:scale-110  flex text-xl flex-row gap-2 text-white p-2 px-6 cursor-pointer rounded-4xl hover:bg-white hover:text-black"
          >
            <Image
              className="group-hover:brightness-0 transition-all duration-300"
              src="/images/projects.svg"
              width={25}
              height={25}
              alt="project-logo"
            />
            Projects
          </Link>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row gap-4">
            <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              title="MongoDB"
              src="/images/mongodb.svg"
              alt="Mongodb-logo"
              width={40}
              height={40}
            />
            <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              title="Express Js"
              src="/images/express.svg"
              alt="express-logo"
              width={40}
              height={40}
            />
            <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              title="Next Js"
              src="/images/nextjs.svg"
              alt="nextjs-logo"
              width={40}
              height={40}
            />
            <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              title="Node Js"
              src="/images/nodejs.svg"
              alt="nodejs-logo"
              width={40}
              height={40}
            />
            <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer"
              title="Figma"
              src="/images/figma.svg"
              alt="nodejs-logo"
              width={40}
              height={40}
            />
            <Image
              className="transition-transform duration-300 ease-in-out hover:scale-110 cursor-pointer "
              title="Webflow"
              src="/images/webflow.svg"
              alt="nodejs-logo"
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl">Lets Get in Touch.</h2>
        <div className="flex flex-row gap-8  flex-wrap justify-center">
          <a
            target="_blank"
            href="https://www.instagram.com/nishantpradhann?igsh=MXhpM2ZhamEyOWdrcA%3D%3D&utm_source=qr"
            className="font-sans flex flex-row gap-2 cursor-pointer items-center"
          >
            <Image
              src="/images/instagram.svg"
              alt="Mongodb-logo"
              width={25}
              height={25}
            />
          <p className="hover:underline">@nishantpradhann</p>  
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/nishant-pradhan8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            className="font-sans flex flex-row gap-2 cursor-pointer items-center "
          >
            <Image
              src="/images/linkedin.svg"
              alt="linkedin-logo"
              width={25}
              height={25}
            />
            <p className="hover:underline">
            /nishant-pradhan8
            </p>
         
          </a>
          <a
            target="_blank"
            href="tel:+977 9819180805"
            className="font-sans flex flex-row gap-2 cursor-pointer items-center "
          >
            <Image
              src="/images/call.svg"
              alt="Call-logo"
              width={25}
              height={25}
            />
            <p className="hover:underline">
            +977 9819180805
            </p>
         
          </a>
        </div>
      </div>
    </div>
  );
}
