import { useState, useEffect } from "react";
import logo from "../Assets/logo.png";
import {
  BsFacebook,
  BsLinkedin,
  BsStackOverflow,
  BsInstagram,
} from "react-icons/bs";
import { SiBuymeacoffee } from "react-icons/si";
import world from "../Assets/world.gif";

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
    <div className="bg-customBlack pt-20 pb-5 px-5">
      <div className="max-w-[1200px] m-auto">
        <div className="flex items-center gap-5">
          <img src={logo} alt="" className="h-16 w-16" />
          <h1 className="text-white text-6xl">Let&apos;s Work</h1>
        </div>
        <h1 className="text-white text-6xl mt-5">together</h1>
        <div className="h-0.5 w-full bg-customWhite my-20 relative">
          <div className="bg-customWhite h-48 w-48 rounded-full absolute z-10 -top-24 right-40 grid place-items-center cursor-pointer">
            <p className="text-2xl">Get in touch</p>
          </div>
        </div>
        <div className="flex gap-10">
          <a
            href="#"
            className="border-customWhite border-2 rounded-full py-5 px-10 text-lg text-white"
          >
            im.nydv@gmail.com
          </a>
          <a
            href="#"
            className="border-customWhite border-2 rounded-full py-5 px-10 text-lg text-white"
          >
            +91 7303405787
          </a>
        </div>
        <div className="flex items-start justify-between mt-20">
          <div className="flex items-center gap-3">
            <img src={world} alt="" />
            <div>
              <p className="text-white text-lg pb-2">LOCAL TIME</p>
              <p className="text-white text-xl">{time} IST</p>
            </div>
          </div>
          <div>
            <p className="text-white text-lg pb-3">SOCIALS</p>
            <ul className="inline-flex gap-5">
              <li>
                <a href="">
                  <BsInstagram color="#ffffff" size={20} />
                </a>
              </li>
              <li>
                <a href="">
                  <BsFacebook color="#ffffff" size={20} />
                </a>
              </li>
              <li>
                <a href="">
                  <BsLinkedin color="#ffffff" size={20} />
                </a>
              </li>
              <li>
                <a href="">
                  <BsStackOverflow color="#ffffff" size={20} />
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
    </div>
  );
}
