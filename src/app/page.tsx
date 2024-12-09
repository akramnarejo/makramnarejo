import Image from "next/image";
import Link from "next/link";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

import { projects } from "./lib/constants";


// export default function Home() {
//   return (
//     <main>
//       <section>
//         <h1 className="[font-size:_clamp(2rem,5vw,3rem)] font-bold my:2 lg:my-4">
//           G&apos;day, I&apos;m Akram <span className="animate-pulse duration-1000">👋</span>
//         </h1>
//         <div className="w-full flex flex-col gap-4 font-normal [font-size:_clamp(1.2rem,4vw,2.5rem)] mt-1  text-[#666]">

//         <p className="">
//           A{" "}<Link href="/work" className="dark:bg-[#111] bg-[#eee] rounded-lg px-1 border border-[#333] text-blue-800 hover:text-blue-500 ease-linear duration-500">Frontend Engineer 👨‍💻</Link>{" "}
//           passionate about crafting seamless user experience UI/UX.
//             Leveraging modern technology, I deliver products that resonate with
//             users and drive results for businesses.
//         </p>
//         <p className="">
//             I work at{" "}
//             <Link
//               href={"https://schoolhack.ai/"}
//               className="hover:underline underline-offset-2 cursor-pointer hover:text-blue-500 dark:text-[#999999] text-[#222222]"
//             >
//               School Hack
//             </Link>
//             {", "}developing{" "}
//             <Link
//               href="https://on-demand.io"
//               className=" hover:text-blue-500 dark:text-[#999999] text-[#222222]"
//             >
//               On-Demand
//             </Link>
//             {": "}
//             a cutting-edge AI Platform as a Service (PaaS) powered by RAG AI technology.
//           </p>
//         <p className="">Web3 enthusiast for better tomorrow and Hobbyist photographer 📸.</p>
//         </div>
        
//       </section>
//       <section>
//       <p className="w-full mt-2 tracking-wide text-[#666] italic [font-size:_clamp(1.2rem,1.5vw,2rem)]">
//           For contact, send me an email
//           <Link
//             href="mailto:makramnarejo@gmail.com"
//             className="hover:underline text-blue-600"
//           >
//             &nbsp;here
//           </Link>
//           .
//         </p>
//       <div className="flex gap-4 box-border mt-4">
//         <Link href='https://linkedin.com/in/akramnarejo' target="_blank" className="text-2xl md:text-3xl text-[#333] dark:text-[#999] hover:text-blue-500 duration-500">
//           <FaLinkedin />
//         </Link>
//         <Link href='https://github.com/akramnarejo' target="_blank" className="text-2xl md:text-3xl text-[#333] dark:text-[#999] hover:text-gray-500 duration-500">
//           <FaGithub />
//         </Link>
//         <Link href='https://instagram.com/akramnarejo' target="_blank" className="text-2xl md:text-3xl text-[#333] dark:text-[#999] hover:text-pink-600 duration-500">
//           <FaInstagram />
//         </Link>
//       </div>
//       </section>
      
//     </main>
//   );
// }

export default function Home() {
  return (
    <main className="max-w-screen-xl mx-auto px-4 py-8 space-y-12 md:space-y-16 lg:space-y-24">
        <section className="space-y-8 relative overflow-hidden">
          <div className="space-y-4 relative z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-gray-900 dark:text-gray-100 leading-tight">
              G&apos;day, I&apos;m Akram{" "}
              <span className="inline-block animate-pulse origin-bottom-right">👋</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-gray-600 dark:text-gray-300 animate-fade-in animation-delay-200">
              Frontend Engineer crafting seamless user experience.
            </p>
          </div>

          <div className="space-y-4 animate-fade-in animation-delay-400 text-base sm:text-xl lg:text-2xl relative z-10 max-w-4xl">
            <p className="text-gray-600 dark:text-gray-300">
              Currently, working at{" "}
              <Link href="https://schoolhack.ai/" className="text-blue-600 dark:text-blue-400 hover:underline">
                School Hack
              </Link>
              , developing{" "}
              <Link href="https://on-demand.io" className="text-blue-600 dark:text-blue-400 hover:underline">
                On-Demand
              </Link>
              : a cutting-edge AI Platform as a Service (PaaS) powered by RAG AI technology.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Web3 enthusiast for a better tomorrow and hobbyist photographer 📸
            </p>
          </div>

          {/* Creative background elements */}
          {/* <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-96 h-96 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div> */}
        </section>

        <section className="space-y-8 animate-fade-in animation-delay-600">
          <div className="flex items-center justify-between">
          <h2 className="text-2xl lg:text-4xl font-bold text-gray-900 dark:text-gray-100">Featured Projects</h2>
          <Link href="/work" className="group inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap text-lg">
              View all
              <FiArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={index} title={project.title} description={project.description} image={project.thumbnail} landingpage={project.landingpage} />
            ))}
          </div>
        </section>
      </main>
  )
}



function ProjectCard({ title, description, landingpage, image }: Project) {
  return (
    <div className="dark:bg-[#0f0f0f] border dark:border-[#444] border-[#999]0 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <Image src={image} alt={title} width={400} height={200} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <Link href={landingpage} target="_blank" className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
          View <FiExternalLink />
        </Link>
      </div>
    </div>
  )
}

interface Project {
  title: string;
  image: string;
  landingpage: string;
  // portal: string;
  // source: string;
  description: string;
}

// const projects: Project[] = [
//   {
//     title: "On-Demand AI Platform",
//     description: "A cutting-edge AI Platform as a Service (PaaS) powered by RAG technology.",
//     image: "/placeholder.svg?height=200&width=400",
//     link: "/work/on-demand"
//   },
//   {
//     title: "Web3 DApp",
//     description: "A decentralized application showcasing the power of blockchain technology.",
//     image: "/placeholder.svg?height=200&width=400",
//     link: "/work/web3-dapp"
//   },
//   {
//     title: "Photography Portfolio",
//     description: "A responsive gallery showcasing my best photography work.",
//     image: "/placeholder.svg?height=200&width=400",
//     link: "/work/photography"
//   }
// ]