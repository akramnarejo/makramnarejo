import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

// and Hobbyist photographer 📸.
export default function Home() {
  return (
    <main>
      <section>
        <h1 className="[font-size:_clamp(2.5rem,5vw,4rem)] font-semibold my-3">
          G&apos;day, I&apos;m Akram{" "}
          <span className="animate-pulse duration-1000">👋</span>
        </h1>
        <div className="flex flex-col gap-4 w-full font-normal [font-size:_clamp(1.5rem,3vw,2.2rem)]  text-[#666]">
          <p className="">
            A{" "}
            <Link
              href="/work"
              className="dark:bg-[#111] bg-[#eee] px-1 rounded-lg border border-[#333] text-blue-800 hover:text-blue-500 ease-linear duration-500"
            >
              Frontend Engineer 👨‍💻
            </Link>
            {", "}
            passionate about crafting seamless and dynamic user interfaces.
            Leveraging modern technology, I deliver products that resonate with
            users and drive results for businesses.
          </p>
          <p className="">
            At{" "}
            <Link
              href={"https://schoolhack.ai/"}
              className="hover:underline underline-offset-2 cursor-pointer hover:text-blue-500 dark:text-[#999999] text-[#222222]"
            >
              School Hack
            </Link>
            {", "}I am developing{" "}
            <Link
              href="https://on-demand.io"
              className=" hover:text-blue-500 dark:text-[#999999] text-[#222222]"
            >
              On-Demand
            </Link>
            {": "}
            An AI platform that empowers users to manage AI products and
            services with flexible BYOI/BYOM capabilities.
          </p>
          <p>
            A Web3 enthusiast, I explore decentralized technologies to pioneer
            innovative digital solutions for a better tomorrow.
          </p>
        </div>
      </section>
      <section className=" space-y-1 mt-4">
        <p className="w-full tracking-wide flex items-center text-[#666] italic [font-size:_clamp(1.2rem,1.5vw,2rem)]">
          For contact,
          <Link href="mailto:makramnarejo@gmail.com" className="cursor-pointer">
            &nbsp;email
          </Link>
          &nbsp;
          <HiOutlineMail />
        </p>
        <div className="flex gap-2 box-border">
          <Link
            href="https://linkedin.com/in/akramnarejo"
            target="_blank"
            className="text-2xl text-[#666] hover:text-blue-500 duration-500"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://github.com/akramnarejo"
            target="_blank"
            className="text-2xl text-[#666] hover:text-gray-500 duration-500"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://instagram.com/akramnarejo"
            target="_blank"
            className="text-2xl text-[#666] hover:text-pink-600 duration-500"
          >
            <FaInstagram />
          </Link>
        </div>
      </section>
    </main>
  );
}
