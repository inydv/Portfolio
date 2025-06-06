import { Home, About, Contact, NotFound, Work } from "./Pages/index";
import { routes } from "./Core/Routes";
import { Routes, Route } from "react-router-dom";
import { Footer, Header } from "./Layouts/index";

export default function App() {
  return (
    <div className="bg-gray-100 max-w-[1920px] mx-auto relative">
      <Header />
      <Routes>
        <Route exact path={routes.Home} element={<Home />} />
        <Route exact path={routes.Contact} element={<Contact />} />
        <Route exact path={routes.About} element={<About />} />
        <Route exact path={routes.Work} element={<Work />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
      {location.pathname !== "/contact" && <Footer />}
    </div>
  );
}
