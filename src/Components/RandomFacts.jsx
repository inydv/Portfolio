import randomFactImage from "../Assets/RandonFacts.jpg";
import { Children } from "react";
import { randomFacts } from "../Constants/RandomFacts.Constant";

export default function RandomFacts() {
  return (
    <div className="flex items-center justify-evenly gap-10 px-5 pt-20 mx-auto max-w-[1200px]">
      <img src={randomFactImage} alt="" className="h-[450px]" />
      <ul>
        <h1 className="text-3xl font-extralight mb-5">Random Facts</h1>
        {Children.toArray(
          randomFacts?.map((name) => (
            <li className="text-lg mb-2 text-gray-800">{name}</li>
          ))
        )}
      </ul>
    </div>
  );
}
