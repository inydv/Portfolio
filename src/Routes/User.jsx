import { useState } from "react";
import { Home, About } from "../Pages/index";
import { Hello } from "../Components/index";
import { routes } from "../Core/Routes";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "../Styles/custom.css";

export default function User() {
  // USE LOCATION
  const location = useLocation();

  // USE STATE
  const [isHello, setIsHello] = useState(true);

  return (
    <div className="relative">
      <div
        className={
          isHello
            ? "bg-hello h-[100vh] w-[100vw] grid place-items-center cursor-none absolute left-0 top-0"
            : "bg-hello h-[100vh] w-[100vw] grid place-items-center cursor-none hello opacity-25 absolute left-0 top-0 -translate-y-[100%] transition-all ease-in-out duration-500"
        }
      >
        <Hello setIsHello={setIsHello} />
      </div>
      <div className="">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route exact path={routes.Home} element={<Home />} />
            <Route exact path={routes.About} element={<About />} />

            {/* <Route exact path="*" element={<NotFound />} /> */}
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}
