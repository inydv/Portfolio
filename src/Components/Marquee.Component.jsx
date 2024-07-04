import { motion } from "framer-motion";
// data-scroll
// data-scroll-section
// data-scroll-speed=".1"

export default function Marquee() {
  return (
    <div className="w-full py-20 px-5 bg-red-500 text-white rounded-3xl">
      <motion.div
        className="flex whitespace-nowrap"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
        }}
      >
        <p className="text-9xl tracking-wide pr-5">I&apos;m Lokesh Yadav -</p>
        {/* <p className="text-9xl tracking-wide">I&apos;m Lokesh Yadav</p>
        <p className="text-9xl tracking-wide pr-5">I&apos;m Lokesh Yadav -</p>
        <p className="text-9xl tracking-wide">I&apos;m Lokesh Yadav</p> */}
      </motion.div>
    </div>
  );
}
