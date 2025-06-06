import { useState, useEffect } from "react";
import logo from "../Assets/logo.png";
import ContactDetails from "../Components/ContactDetails";
import ContactForm from "../Forms/ContactForm";
import world from "../Assets/world.gif";

export default function Contact() {
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
    <div className="pt-20 sm:pt-32 pb-5 px-5 text-black">
      <div className="max-w-[1200px] m-auto">
        <div className="flex items-center gap-5">
          <img src={logo} alt="Logo" className="h-14 sm:h-16 w-14 sm:w-16" />
          <h1 className="text-5xl sm:text-6xl whitespace-nowrap">
            Let&apos;s start a
          </h1>
        </div>
        <h1 className="text-5xl sm:text-6xl mt-5">project</h1>
        <div className="py-16 sm:py-28 flex flex-col gap-20">
          <ContactForm />
          <ContactDetails />
        </div>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={world} alt="" />
            <div>
              <p className="text-base sm:text-lg pb-2">LOCAL TIME</p>
              <p className="text-base sm:text-xl">{time} IST</p>
            </div>
          </div>
          <div>
            <p className="text-base sm:text-lg pb-2">LOCATED IN</p>
            <p className="text-base sm:text-xl">NEW DELHI, IN</p>
          </div>
        </div>
      </div>
    </div>
  );
}
