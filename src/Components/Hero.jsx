import { Children, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "@react-icons/all-files/fi/FiArrowUpRight";
import { Link } from "react-router-dom";

export default function Hero() {
  const [isMd, setIsMd] = useState(false);

  useEffect(() => {
    const updateSize = () => {
      setIsMd(window.innerWidth >= 768);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <div className="w-full md:h-screen flex flex-col">
      <div className="px-4 md:px-20 md:flex-1 flex flex-col justify-center pt-20 pb-10 gap-2 xl:gap-0">
        {Children?.toArray(
          ["I CONVEY", "STORIES", "USING DESIGNS", "AND SEEMLESS BACKEND"]?.map(
            (item, index) => (
              <div
                className="w-fit flex items-center gap-2 md:gap-5"
                key={item}
              >
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: isMd ? "200px" : "50px" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }}
                    className="bg-red-600 h-6 md:h-10 xl:h-14 rounded-md"
                  ></motion.div>
                )}
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl leading-none tracking-wide font-semibold whitespace-nowrap">
                  {item}
                </h1>
              </div>
            )
          )
        )}
      </div>

      <div className="border-t-2 border-gray-700 py-10 px-4 md:px-20 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8">
        {Children?.toArray(
          ["For public and private companies", "For Freelancing projects"]?.map(
            (item) => <p className="text-lg md:text-base lg:text-xl">{item}</p>
          )
        )}
        <Link className="px-5 py-2 border-2 rounded-full border-gray-700 flex items-center gap-2 text-sm lg:text-base">
          <span>START THE PROJECT</span> <FiArrowUpRight size={25} />
        </Link>
      </div>
    </div>
  );
}
