import { Children } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "@react-icons/all-files/fi/FiArrowUpRight";
import { Link } from "react-router-dom";
// data-scroll data-scroll-section data-scroll-speed="-.3"

export default function LandingPage() {
  return (
    <div className="w-full h-screen pt-1 bg-gray-100">
      <div className="mt-48 px-20">
        {Children?.toArray(
          ["I CONVEY", "STORIES", "USING DESIGN"]?.map((item, index) => (
            <>
              <div className="w-fit flex items-center gap-8">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "200px" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1.2 }}
                    className="bg-red-500 h-16 rounded-md"
                  ></motion.div>
                )}
                <h1 className="text-9xl leading-none tracking-wide font-semibold">
                  {item}
                </h1>
              </div>
            </>
          ))
        )}
      </div>
      <div className="border-t-2 border-gray-700 mt-40 py-10 px-20 flex items-center justify-between gap-8">
        {Children?.toArray(
          ["For public and private companies", "For Freelancing projects"]?.map(
            (item) => <p className="text-xl">{item}</p>
          )
        )}
        <Link className="px-5 py-2 border-2 rounded-full border-gray-700 flex items-center gap-2">
          <span>START THE PROJECT</span> <FiArrowUpRight size={25} />
        </Link>
      </div>
    </div>
  );
}
