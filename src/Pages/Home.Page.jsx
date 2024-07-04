import {
  About,
  Change,
  Eyes,
  KnowMore,
  LandingPage,
  Marquee,
  Project,
} from "../Components/index";

export default function Home() {
  return (
    <>
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Project />
      <Change />
      <KnowMore />
    </>
  );
}
