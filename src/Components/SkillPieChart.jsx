import { Children } from "react";
import { frontend, backend } from "../Constants/PieChart.Constant";

export default function SkillPieChart() {
  return (
    <div className="flex items-center gap-5 bg-secondary py-20 px-5 border-y-2 shadow-sm">
      <div className="flex-1 grid justify-center">
        <h1 className="text-3xl font-extralight mb-5">Part Frontend</h1>
        <ul>
          {Children.toArray(
            frontend?.map((name) => (
              <li className="text-lg mb-2 text-gray-800">{name}</li>
            ))
          )}
        </ul>
      </div>

      <div className="flex-1 flex items-center justify-center gap-3">
        <div className="relative">
          <div className="w-40 h-40 bg-[#A9A9A9] rounded-tl-full"></div>
          <div className="w-40 h-40 bg-[#A9A9A9] rounded-bl-full"></div>
          <div className="absolute z-10 top-0 h-full w-full grid place-items-center">
            <p className="text-white text-xl drop-shadow-xl font-bold">
              FrontEnd
            </p>
          </div>
        </div>
        <div className="relative">
          <div className="w-36 h-36 bg-[#343434] rounded-tr-full"></div>
          <div className="w-36 h-36 bg-[#343434] rounded-br-full"></div>
          <div className="absolute z-10 top-0 h-full w-full grid place-items-center">
            <p className="text-white text-xl drop-shadow-xl font-bold">
              Backend
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 grid justify-center">
        <h1 className="text-3xl font-extralight mb-5">Part Backend</h1>
        <ul>
          {Children.toArray(
            backend?.map((name) => (
              <li className="text-lg mb-2 text-gray-800">{name}</li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
