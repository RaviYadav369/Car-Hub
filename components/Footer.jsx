"use client";
import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@constants";

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-1 border-gray-100">
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src="/logo.svg"
            alt="logo"
            width={116}
            height={16}
            className="object-contain"
          />
          <p className="text-base text-gray-700">
            CarHIb 2023 <br /> All right reserver &copy{" "}
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link href={`/${item.title}`} key={item.title} className="text-gray-500">
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
        </div>
        <div className="flex justify-between items-center mt-10 flex-wrap sm:px-16 px-4 py-10 border-gray-100 border-1">
            <p>@2023 CarHub, All Rights Reserved</p>
          <div className="footer__copyrights-link">
            <Link href="/" className="text-gray-500">
              Private Policy
            </Link>
            <Link href="/" className="text-gray-500">
              Terms of the
            </Link>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;
