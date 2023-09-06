import { motion } from "framer-motion";
import { Banner, RandomImageGallery, Package } from "../Components/index";
import { ParticlesContainer } from "../Shared/index";
import ScrollProjects from "../Components/ScrollProjects";

// MAIN FUNCTION
export default function Home() {
  // HTML
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="relative">
        <ParticlesContainer />
        <Banner />
        <RandomImageGallery />
      </div>
      <Package />
      <ScrollProjects />
    </motion.div>
  );
}
