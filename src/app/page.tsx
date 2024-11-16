import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";


export default function Home() {
  return (
    <main>
      <section>
        <h1 className="[font-size:_clamp(2rem,5vw,3rem)] font-bold my:2 lg:my-4">
          G&apos;day, I&apos;m Akram <span className="animate-pulse duration-1000">👋</span>
        </h1>
        <div className="w-full flex flex-col gap-4 font-normal [font-size:_clamp(1.2rem,4vw,2.5rem)] mt-1  text-[#666]">

        <p className="">
          A{" "}<Link href="/work" className="dark:bg-[#111] bg-[#eee] rounded-lg px-1 border border-[#333] text-blue-800 hover:text-blue-500 ease-linear duration-500">Frontend Engineer 👨‍💻</Link>{" "}
          passionate about crafting seamless and dynamic user interfaces.
            Leveraging modern technology, I deliver products that resonate with
            users and drive results for businesses.
        </p>
        <p className="">
            I work at{" "}
            <Link
              href={"https://schoolhack.ai/"}
              className="hover:underline underline-offset-2 cursor-pointer hover:text-blue-500 dark:text-[#999999] text-[#222222]"
            >
              School Hack
            </Link>
            {", "}developing{" "}
            <Link
              href="https://on-demand.io"
              className=" hover:text-blue-500 dark:text-[#999999] text-[#222222]"
            >
              On-Demand
            </Link>
            {": "}
            a cutting-edge AI Platform as a Service (PaaS) powered by RAG AI technology.
          </p>
        <p className="">Web3 enthusiast for better tomorrow and Hobbyist photographer 📸.</p>
        </div>
        
      </section>
      <section>
      <p className="w-full mt-2 tracking-wide text-[#666] italic [font-size:_clamp(1.2rem,1.5vw,2rem)]">
          For contact, send me an email
          <Link
            href="mailto:makramnarejo@gmail.com"
            className="hover:underline text-blue-600"
          >
            &nbsp;here
          </Link>
          .
        </p>
      <div className="flex gap-4 box-border mt-4">
        <Link href='https://linkedin.com/in/akramnarejo' target="_blank" className="text-2xl md:text-3xl text-[#333] dark:text-[#999] hover:text-blue-500 duration-500">
          <FaLinkedin />
        </Link>
        <Link href='https://github.com/akramnarejo' target="_blank" className="text-2xl md:text-3xl text-[#333] dark:text-[#999] hover:text-gray-500 duration-500">
          <FaGithub />
        </Link>
        <Link href='https://instagram.com/akramnarejo' target="_blank" className="text-2xl md:text-3xl text-[#333] dark:text-[#999] hover:text-pink-600 duration-500">
          <FaInstagram />
        </Link>
      </div>
      </section>
      
    </main>
  );
}
