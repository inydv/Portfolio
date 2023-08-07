import React, { Children } from "react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { experience } from "../Constants/Experience.Constant";

export default function Experience() {
  return (
    <ul className="py-20 px-5 max-w-[1200px] m-auto relative grid gap-10">
      {Children.toArray(
        experience?.map(({ companyName, role, date, work }) => (
          <li className="flex items-center gap-10">
            <div className="bg-secondary rounded-full p-5 border-2 w-min h-min">
              <BsFillBriefcaseFill size={50} />
            </div>
            <div className="bg-secondary w-full p-5 border">
              <h1 className="text-2xl">{companyName}</h1>
              <div className="flex justify-between items-center border-b-2 pt-1 pb-3">
                <p className="text-lg">{role}</p>
                <p className="text-lg">{date}</p>
              </div>
              <ul className="pt-5">
                {Children.toArray(work?.map((item) => <li className="py-1">• {item}</li>))}
              </ul>
            </div>
          </li>
        ))
      )}
      <div className="h-full w-5 absolute top-0 left-14 -z-10 border-x-2 bg-secondary"></div>
    </ul>
  );
}
