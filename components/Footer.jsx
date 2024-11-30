import Image from "next/image";
import logoImg from "@/assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 mt-auto">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="mb-4 md:mb-0">
          <Image src={logoImg} alt="Logo" className="h-8 w-auto" />
        </div>
        <div className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <a href="/properties">Properties</a>
            </li>
            <li>
              <a href="/terms">Terms of Service</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-sm text-gray-500 mt-2 md:mt-0">
            &copy; {new Date().getFullYear()} PropertyPulse. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
