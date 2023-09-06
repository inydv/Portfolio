import { motion } from "framer-motion";
import {
  SkillPieChart,
  RandomFacts,
  SkillGraph,
  Knowmore,
  Experience,
  Education,
  Certification,
} from "../Components/index";

// MAIN FUNCTION
export default function About() {
  // HTML
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <SkillPieChart />
      <RandomFacts />
      <SkillGraph />
      <Experience />
      <Education />
      <Certification />
      <Knowmore />
    </motion.div>
  );
}
