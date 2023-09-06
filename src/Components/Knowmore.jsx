import React, { Children } from "react";
import { knowmore } from "../Constants/Knowmoew.Constant";

export default function Knowmore() {
  return (
    <div className="py-20 px-5 max-w-[1200px] m-auto">
      <h1 className="text-4xl mb-10">
        Know more / Speech <span>...</span>
      </h1>
      {Children.toArray(
        knowmore?.map((item) => <p className="text-xl mb-5">{item}</p>)
      )}
      <a className="text-xl font-normal" href="#">
        My resume
      </a>
    </div>
  );
}
