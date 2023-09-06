import { useRef } from "react";
import image1 from "../Assets/Certification/1.png";

export default function Certification() {
  const ref1 = useRef();

  const mouseMove = (e) => {
    ref1.current.style.opacity = 0.8;
    ref1.current.style.transform = `translate(-190%, -50% ) rotate(5deg)`;
    ref1.current.style.left = e.clientX + "px";
  };

  const mouseLeave = () => {
    ref1.current.style.opacity = 0;
    ref1.current.style.transform = `translate(-50%, -50%) rotate(-5deg)`;
  };

  return (
    <div className="bg-secondary py-20 px-5 border-y-2 shadow-sm">
      <div className="max-w-[1200px] m-auto">
        <h1 className="text-3xl mb-10">CERTIFICATION</h1>
        <div className="h-1 w-full bg-black"></div>
        <ul>
          <li className="relative z-10 border-b-2">
            <div
              className="flex justify-between gap-5 p-5"
              onMouseMove={(e) => mouseMove(e)}
              onMouseLeave={() => mouseLeave()}
            >
              <span className="mix-blend-difference text-2xl">JavaScript</span>
              <p className="mix-blend-difference text-2xl">From Udemy</p>
              <div
                ref={ref1}
                className="absolute border -z-10 w-64 h-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden opacity-0 transition-all duration-500 ease-in-out"
              >
                <img
                  className="h-full w-full object-contain transition-transform duration-500 ease-in-out"
                  src={image1}
                  alt=""
                />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
