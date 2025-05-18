import { useState, useEffect } from "react";
import { SiBuymeacoffee } from "@react-icons/all-files/si/SiBuymeacoffee";
import { FaFacebook } from "@react-icons/all-files/fa/FaFacebook";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { world, logo } from "../Assets";

export default function Footer() {
  const [time, setTime] = useState();

  useEffect(() => {
    const timer = setInterval(() => {
      const currentTime = new Date();

      const formatedTime = currentTime.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      setTime(formatedTime);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full pt-20 pb-10 px-4 md:px-20 bg-black rounded-tl-3xl rounded-tr-3xl">
      <div className="w-full flex items-center gap-5">
        <img src={logo} alt="" className="h-16 w-16" />
        <h1 className="text-white text-5xl sm:text-6xl whitespace-nowrap">
          Let&apos;s Work
        </h1>
      </div>
      <h1 className="text-white text-5xl sm:text-6xl mt-5">together</h1>
      <div className="h-0.5 w-full bg-white my-32 sm:my-40 relative">
        <div className="bg-white h-40 sm:h-48 w-40 sm:w-48 rounded-full absolute z-10 -top-20 sm:-top-24 right-10 sm:right-40 grid place-items-center cursor-pointer">
          <p className="text-xl sm:text-2xl whitespace-nowrap font-semibold">
            Get in touch
          </p>
        </div>
      </div>
      <div className="flex gap-4 sm:gap-10">
        <a
          href="#"
          className="border-customWhite border-2 rounded-full py-3 sm:py-5 px-5 sm:px-10 text-white whitespace-nowrap text-sm sm:text-lg"
        >
          im.nydv@gmail.com
        </a>
        <a
          href="#"
          className="border-customWhite border-2 rounded-full py-3 sm:py-5 px-5 sm:px-10 text-white whitespace-nowrap text-sm sm:text-lg"
        >
          +91 7303405787
        </a>
      </div>
      <div className="flex items-start justify-between mt-20">
        <div className="flex items-center gap-3">
          <img src={world} alt="" />
          <div>
            <p className="text-white text-base sm:text-lg pb-2">LOCAL TIME</p>
            <p className="text-white text-base sm:text-xl">{time} IST</p>
          </div>
        </div>
        <div>
          <p className="text-white text-base sm:text-lg pb-3">SOCIALS</p>
          <ul className="inline-flex gap-3 md:gap-5">
            <li>
              <a href="">
                <FaInstagram color="#ffffff" size={20} />
              </a>
            </li>
            <li>
              <a href="">
                <FaFacebook color="#ffffff" size={20} />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin color="#ffffff" size={20} />
              </a>
            </li>
            <li>
              <a href="">
                <SiBuymeacoffee color="#ffffff" size={20} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
