import { motion } from "framer-motion";
import {
  Banner,
  SkillPieChart,
  RandomFacts,
  RandomImageGallery,
  SkillGraph,
  Knowmore,
  Experience,
} from "../Components/index";
import { ParticlesContainer } from "../Shared/index";

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
      <SkillPieChart />
      <RandomFacts />
      <SkillGraph />
      <Experience />
      <Knowmore />
    </motion.div>
  );
}
