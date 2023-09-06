import { Children } from "react";
import { MdSchool } from "react-icons/md";
import { education } from "../Constants/Education.Constant";

export default function Education() {
  return (
    <ul className="py-20 px-5 max-w-[1200px] m-auto relative grid gap-10">
      {Children.toArray(
        education?.map(({ name, degree, date, location, stream }) => (
          <li className="flex items-center gap-10 z-20">
            <div className="bg-secondary rounded-full p-5 border-2 w-min h-min">
              <MdSchool size={50} />
            </div>
            <div className="bg-secondary w-full p-5 border">
              <h1 className="text-2xl">{degree}</h1>
              <h1 className="text-xl pt-2">{name}</h1>
              <div className="flex justify-between items-center border-b-2 pt-2 pb-3">
                <p className="text-lg">{date}</p>
                <p className="text-lg">{location}</p>
              </div>
              <p className="pt-5">• {stream}</p>
            </div>
          </li>
        ))
      )}
      <div className="h-full w-5 absolute top-0 left-14 z-10 border-x-2 bg-secondary"></div>
    </ul>
  );
}
