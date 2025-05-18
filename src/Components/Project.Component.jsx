import { Link } from "react-router-dom";
import { FiArrowUpRight } from "@react-icons/all-files/fi/FiArrowUpRight";

export default function Project() {
  return (
    <div className="w-full py-20 px-4 md:px-20 bg-green-500 text-black rounded-3xl">
      <div>
        <h2 className="text-2xl md:text-3xl xl:text-4xl tracking-wide font-medium">
          Featured Case Studies<span>.....</span>
        </h2>
        <div className="flex justify-center flex-wrap gap-4 md:gap-10 my-10 md:my-20">
          <div className="relative rounded-xl bg-gray-950 group shadow-md aspect-video max-h-96">
            <img
              src="https://media.istockphoto.com/id/1534040386/photo/an-outdoor-bamboo-gazebo-nestled-amidst-lush-greenery-offering-serene-relaxation-after-a.jpg?s=2048x2048&w=is&k=20&c=KraJw0UatD1mMxZy7iBY3CwJnJWkYWS0xjUx2_ZLxGU="
              alt=""
              className="object-cover h-full w-full rounded-xl p-2 md:p-5 group-hover:scale-90 transition-all ease-in-out group-hover:blur-sm"
            />
            <div className="absolute top-0 left-0 h-full w-full grid place-content-center gap-5 text-white group-hover:bg-[#00000059] opacity-0 group-hover:opacity-100 transition-all ease-in-out">
              <h3 className="text-center text-base md:text-4xl">Project</h3>
              <Link className="px-5 py-2 border-2 rounded-full border-gray-300 flex items-center gap-2 w-fit text-xs lg:text-base">
                <span>VIEW CASE STUDY</span> <FiArrowUpRight size={25} />
              </Link>
            </div>
          </div>
          <div className="relative rounded-xl bg-gray-950 group shadow-md aspect-video max-h-96">
            <img
              src="https://media.istockphoto.com/id/1534040386/photo/an-outdoor-bamboo-gazebo-nestled-amidst-lush-greenery-offering-serene-relaxation-after-a.jpg?s=2048x2048&w=is&k=20&c=KraJw0UatD1mMxZy7iBY3CwJnJWkYWS0xjUx2_ZLxGU="
              alt=""
              className="object-cover h-full w-full rounded-xl p-2 md:p-5 group-hover:scale-90 transition-all ease-in-out group-hover:blur-sm"
            />
            <div className="absolute top-0 left-0 h-full w-full grid place-content-center gap-5 text-white group-hover:bg-[#00000059] opacity-0 group-hover:opacity-100 transition-all ease-in-out">
              <h3 className="text-center text-base md:text-4xl">Project</h3>
              <Link className="px-5 py-2 border-2 rounded-full border-gray-300 flex items-center gap-2 w-fit text-xs lg:text-base">
                <span>VIEW CASE STUDY</span> <FiArrowUpRight size={25} />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid place-content-center">
          <Link className="px-5 py-2 border-2 rounded-full border-gray-700 flex items-center gap-2 w-fit text-sm lg:text-base">
            <span>VIEW ALL CASE STUDIES</span> <FiArrowUpRight size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}
