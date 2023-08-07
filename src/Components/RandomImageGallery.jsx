import { Children } from "react";
import { randomImageGallery } from "../Constants/RandomImageGallery.Constant";

export default function RandomImageGallery() {
  return (
    <div className="flex gap-5 max-w-[1200px] m-auto py-10 px-5 group">
      {Children.toArray(
        randomImageGallery?.map((item) => (
          <div className="max-h-32 border rounded p-2 shadow-sm hover:shadow-lg hover:scale-110 group-hover:opacity-80 hover:!opacity-100 transition-all ease-in-out duration-200">
            <img src={item} className="w-full h-full rounded" alt="" />
          </div>
        ))
      )}
    </div>
  );
}
