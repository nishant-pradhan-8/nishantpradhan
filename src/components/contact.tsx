import Image from "next/image"
export default function Contact(){
    return(
        <div className="flex flex-col items-center gap-5">
        <h2 className="text-3xl">Lets Get in Touch.</h2>
        <div className="flex flex-row gap-8  flex-wrap justify-center">
        
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
            href="mailto:nishant.pradhan0520@gmail.com"
            className="font-sans flex flex-row gap-2 cursor-pointer items-center "
          >
            <Image
              src="/images/email.svg"
              alt="email"
              width={25}
              height={25}
            />
            <p className="hover:underline">
            nishant.pradhan0520@gmail.com
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
    )
}