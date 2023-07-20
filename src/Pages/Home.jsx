import React from "react";
import { motion } from "framer-motion";
import { Banner } from "../Components/index";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Banner />
    </motion.div>
  );
}
