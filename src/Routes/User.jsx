import { useState } from "react";
import { Home, About, Contact, NotFound, Work } from "../Pages/index";
import { Hello } from "../Components/index";
import { routes } from "../Core/Routes";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import "../Styles/custom.css";
import { Header } from "../Layouts/index";

export default function User() {
  // USE LOCATION
  const location = useLocation();

  // USE STATE
  const [isHello, setIsHello] = useState(true);

  // HTML
  return (
    <div className="relative">
      <div
        className={
          isHello
            ? "bg-customBlack h-[100vh] w-[100vw] grid place-items-center cursor-none absolute left-0 top-0"
            : "bg-customBlack h-[100vh] w-[100vw] grid place-items-center cursor-none hello opacity-25 absolute z-10 left-0 top-0 -translate-y-[100%] transition-all ease-in-out duration-500 delay-300"
        }
      >
        <Hello setIsHello={setIsHello} />
      </div>
      <div className={isHello ? "hidden" : "block"}>
        <Header />
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route exact path={routes.Home} element={<Home />} />
            <Route exact path={routes.About} element={<About />} />
            <Route exact path={routes.Contact} element={<Contact />} />
            <Route exact path={routes.Work} element={<Work />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
      </div>
    </div>
  );
}
