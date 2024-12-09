import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa6";


const Footer = () => {
    return <footer className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-700 animate-fade-in animation-delay-800">
    <p className="text-sm lg:text-base text-gray-500 dark:text-gray-400 mb-4 sm:mb-0">
      Get in touch:{" "}
      <Link href="mailto:makramnarejo@gmail.com" className="hover:underline">
        makramnarejo@gmail.com
      </Link>
    </p>
    <div className="flex space-x-4">
      <SocialLink href="https://linkedin.com/in/akramnarejo" icon={<FaLinkedin />} label="LinkedIn" />
      <SocialLink href="https://github.com/akramnarejo" icon={<FaGithub />} label="GitHub" />
      <SocialLink href="https://instagram.com/akramnarejo" icon={<FaInstagram />} label="Instagram" />
    </div>
  </footer>
}

export default Footer

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        <button className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
          {icon}
          <span className="sr-only">{label}</span>
        </button>
      </Link>
    )
  }