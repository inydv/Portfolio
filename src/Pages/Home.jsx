import React, { Children } from "react";
import { motion } from "framer-motion";
import { Banner } from "../Components/index";
import { aboutImage } from "../Constants/AboutImages.Constant";

export default function Home() {
  // HTML
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Banner />
      <div className="flex gap-5 max-w-[1200px] m-auto py-10 px-5 group">
        {Children.toArray(
          aboutImage?.map((item) => (
            <div className="max-h-32 border rounded p-2 shadow-sm hover:shadow-lg hover:scale-110 group-hover:opacity-80 hover:!opacity-100 transition-all ease-in-out duration-200">
              <img src={item} className="w-full h-full rounded" alt="" />
            </div>
          ))
        )}
      </div>
    </motion.div>
  );
}
