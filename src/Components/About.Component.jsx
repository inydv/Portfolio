import { Children } from "react";

const PACKAGES = [
  {
    tag: "Design Sense",
    content:
      "I have a proven track record in crafting websites, consistently delivering robust and user-friendly digital designs.",
  },
  {
    tag: "Development",
    content:
      "I specialize in developing scalable websites from scratch that seamlessly integrate with design elements. My focus lies in crafting micro animations, transitions, and interactive features.",
  },
  {
    tag: "The Full Package",
    content:
      "My ability to conceive and implement complete websites sets me apart. With a keen eye for design and strong development skills, I consistently deliver outstanding projects.",
  },
];

export default function About() {
  return (
    <div className="w-full md:min-h-screen py-20 px-4 md:px-20 bg-green-500 text-black rounded-3xl grid place-content-center">
      <div>
        <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl lg:w-3/4 leading-snug tracking-wide font-medium">
          A Full Stack Developer based in New Delhi, India. I enjoy creating
          meaningful narratives through development and experimenting with new
          technology to convey stories.
        </p>
        <div className="border-t-2 border-gray-700 mt-10 md:mt-20 pt-10 md:pt-20">
          <h1 className="text-2xl md:text-3xl xl:text-4xl tracking-wide mb-8 md:mb-16 font-medium">
            I can help you with<span>.....</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-10">
            {Children.toArray(
              PACKAGES?.map(({ content, tag }, index) => (
                <div className="flex-1">
                  <p className="text-xl md:text-2xl font-semibold">0{index + 1}</p>
                  <h2 className="text-xl md:text-2xl xl:text-3xl my-5">
                    {tag}
                  </h2>
                  <p className="text-base md:text-xl">{content}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
