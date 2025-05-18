import { Children } from "react";
import { FiArrowUpRight } from "@react-icons/all-files/fi/FiArrowUpRight";

const currentYear = new Date().getFullYear();
const KNOWMORE = [
  `I'm a multi-disciplinary maker with over ${
    currentYear - 2021
  } years of experiences in wide range of frontend developer, backend developer, music enthusiast, traveler, photographer and more.`,
  "I don't like to define myself by the work i've done, I define myself by the work I want to do. Skills can be taught, personality in inherent. I prefer to keep learning, continue challenging myself, and do interesting things things about that matter.",
  "Fueled by high energy levels and boundless enthusiasm, I'm easily inspired and more then willing to follow my fascinations wherever they take me. I'm passionate, expressive, multi-talented spirit with natural ability to entertain and inspire. I'm never satisfied to just come up with ideas. Instead I have an almost impulsive need to act on them.",
  "My abundant energy fuels me in the pursuit of many interests, hobbies, areas of study and artistic endeavors. I'm a fast learner, able to pick up new skills and juggle differnt projects and roles with relative ease.",
];

export default function KnowMore() {
  return (
    <div className="w-full md:min-h-screen py-20 px-4 md:px-20 bg-[#cdea68] text-black rounded-3xl grid place-content-center">
      <div>
        <h1 className="text-2xl md:text-3xl xl:text-4xl tracking-wide font-medium mb-8 md:mb-16">
          Know more / Speech<span>.....</span>
        </h1>
        {Children.toArray(
          KNOWMORE?.map((item) => (
            <p className="text-base md:text-2xl mb-8 md:mb-10 tracking-wide">
              {item}
            </p>
          ))
        )}
        <a
          className="px-5 py-2 border-2 rounded-full border-gray-700 flex items-center gap-2 w-fit mt-8 md:mt-16 text-sm lg:text-base"
          href="#"
        >
          <span>MY RESUME</span> <FiArrowUpRight size={25} />
        </a>
      </div>
    </div>
  );
}
