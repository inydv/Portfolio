import bannerImage from "../Assets/Hero-Section.png";
import { routes } from "../Core/Routes";
import { Link } from "react-router-dom";

export default function Banner() {
  // HTML
  return (
    <div className="flex justify-between items-center max-w-[1200px] m-auto px-5 pt-10 gap-5 border-b-2">
      <div className="flex-1 grid">
        <h1 className="text-5xl">&#60; Hello world &#62;</h1>
        <p className="max-w-[650px] text-xl mt-5">
          I'm Lokesh Yadav, A MERN Stack Developer based in New Delhi, India. I
          enjoy creating meaningful narratives through development and
          experimenting with new technology to convey stories.
        </p>
        <div className="flex gap-2 items-center mt-5">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 267 176.1"
            xmlSpace="preserve"
            height="15"
            width="30"
          >
            <path d="M266,88.1l-11-9.5L165.8,2.1L135.6,21l61.2,52.5H2v29.2h194.8l-61.2,52.5l30.2,18.9L255,97.6L266,88.1z"></path>
          </svg>
          <Link
            className="border-b-2 border-black text-2xl"
            to={routes.Contact}
          >
            Get in touch
          </Link>
        </div>
      </div>
      <img src={bannerImage} alt="Banner Image" className="max-h-[500px]" />
    </div>
  );
}
