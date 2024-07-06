import { Link } from "react-router-dom";
import { FiArrowUpRight } from "@react-icons/all-files/fi/FiArrowUpRight";

export default function Project() {
  return (
    <div className="w-full h-screen py-20 px-20 bg-green-500 text-black rounded-3xl grid place-content-center">
      <div>
        <h2 className="text-4xl tracking-wide">
          Featured Projects <span>.....</span>
        </h2>
        <div className="flex justify-center gap-10 my-20 max-h-[60vh]">
          <div className="relative rounded-xl bg-gray-950 group shadow-md">
            <img
              src="https://media.istockphoto.com/id/1534040386/photo/an-outdoor-bamboo-gazebo-nestled-amidst-lush-greenery-offering-serene-relaxation-after-a.jpg?s=2048x2048&w=is&k=20&c=KraJw0UatD1mMxZy7iBY3CwJnJWkYWS0xjUx2_ZLxGU="
              alt=""
              className="object-cover h-full w-full rounded-xl p-10 group-hover:scale-90 transition-all ease-in-out group-hover:blur-sm"
            />
            <div className="absolute top-0 left-0 h-full w-full grid place-content-center gap-5 text-white group-hover:bg-[#00000059] opacity-0 group-hover:opacity-100 transition-all ease-in-out">
              <h3 className="text-center text-4xl">Project</h3>
              <Link className="px-5 py-2 border-2 rounded-full border-gray-300 flex items-center gap-2 w-fit">
                <span>VIEW CASE STUDY</span> <FiArrowUpRight size={25} />
              </Link>
            </div>
          </div>
          <div className="relative rounded-xl bg-gray-950 group shadow-md">
            <img
              src="https://media.istockphoto.com/id/1534040386/photo/an-outdoor-bamboo-gazebo-nestled-amidst-lush-greenery-offering-serene-relaxation-after-a.jpg?s=2048x2048&w=is&k=20&c=KraJw0UatD1mMxZy7iBY3CwJnJWkYWS0xjUx2_ZLxGU="
              alt=""
              className="object-cover h-full w-full rounded-xl p-10 group-hover:scale-90 transition-all ease-in-out group-hover:blur-sm"
            />
            <div className="absolute top-0 left-0 h-full w-full grid place-content-center gap-5 text-white group-hover:bg-[#00000059] opacity-0 group-hover:opacity-100 transition-all ease-in-out">
              <h3 className="text-center text-4xl">Project</h3>
              <Link className="px-5 py-2 border-2 rounded-full border-gray-300 flex items-center gap-2 w-fit">
                <span>VIEW CASE STUDY</span> <FiArrowUpRight size={25} />
              </Link>
            </div>
          </div>
        </div>

        <div className="grid place-content-center">
          <Link className="px-5 py-2 border-2 rounded-full border-gray-700 flex items-center gap-2 w-fit">
            <span>VIEW ALL CASE STUDIES</span> <FiArrowUpRight size={25} />
          </Link>
        </div>
      </div>
    </div>
  );
}
