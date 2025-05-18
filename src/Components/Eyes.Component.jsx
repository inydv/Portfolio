import { useState } from "react";
import { useEffect } from "react";

export default function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const deltax = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltax) * (180 / Math.PI);

      setRotate(angle - 180);
    });
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden">
      {/* data-scroll data-scroll-speed="-.7" */}
      <div className="relative w-full h-full bg-cover bg-no-repeat bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-5 sm:gap-10">
          <div className="flex items-center justify-center w-28 sm:w-48 h-28 sm:h-48 rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2"
              >
                <div className="w-6 sm:w-10 h-6 sm:h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-28 sm:w-48 h-28 sm:h-48 rounded-full bg-zinc-100">
            <div className="relative w-2/3 h-2/3 flex items-center justify-center rounded-full bg-zinc-900">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line w-full h-10 absolute top-1/2 left-1/2"
              >
                <div className="w-6 sm:w-10 h-6 sm:h-10 rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
