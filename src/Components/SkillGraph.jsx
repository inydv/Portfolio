import React, { Children } from "react";
import { barGraph } from "../Constants/BarGraph.Constant";

export default function SkillGraph() {
  return (
    <div className="bg-secondary pt-20 px-5 border-y-2 shadow-sm">
      <div className="max-w-[1200px] m-auto">
        <h1 className="text-right text-4xl mb-10">
          Analyzing me <span>...</span>
        </h1>
        <div className="relative">
          {/* GRAPH STRUCTURE */}
          <div>
            <div className="border-t-2 border-l-2 h-28 relative">
              <p className="text-xl absolute -top-4 -left-12">Jedi</p>
            </div>
            <div className="border-t-2 border-l-2 h-28 relative">
              <p className="text-xl absolute -top-4 -left-16">Ninja</p>
            </div>
            <div className="border-t-2 border-l-2 h-28 relative">
              <p className="text-xl absolute -top-4 -left-16">Geek</p>
            </div>
            <div className="border-t-2 border-l-2 h-28 relative">
              <p className="text-xl absolute -top-4 -left-20">Newbie</p>
            </div>
          </div>
          {/* GRAPH BARS */}
          <div className="absolute z-10 bottom-0 flex gap-16 h-full w-full items-end justify-center">
            {Children.toArray(
              barGraph?.map(({ name, height, color }) => (
                <div
                  className="w-36 relative"
                  style={{ backgroundColor: color, height: height }}
                >
                  <p className="text-white text-xl drop-shadow-xl font-semibold text-center absolute z-20 bottom-5 w-full">
                    {height} <br />
                    {name}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
