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
    <div className="w-full h-screen py-20 px-20 bg-green-500 text-black rounded-3xl grid place-content-center">
      <div>
        <p className="text-4xl w-3/4 leading-snug tracking-wide">
          A MERN Stack Developer based in New Delhi, India. I enjoy creating
          meaningful narratives through development and experimenting with new
          technology to convey stories.
        </p>
        <div className="border-t-2 border-gray-700 mt-20 pt-20">
          <h1 className="text-4xl tracking-wide mb-16">
            I can help you with <span>.....</span>
          </h1>
          <div className="flex gap-10">
            {Children.toArray(
              PACKAGES?.map(({ content, tag }, index) => (
                <div className="flex-1">
                  <p className="text-2xl">0{index + 1}</p>
                  <h2 className="text-3xl my-5">{tag}</h2>
                  <p className="text-xl">{content}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
