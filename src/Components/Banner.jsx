import bannerImage from "../Assets/Hero-Section.png";

export default function Banner() {
  return (
    <div className="bg-banner">
      <div className="flex justify-between items-center max-w-[1100px] m-auto px-5 gap-5">
        <div className="flex-1 grid place-items-center">
          <p className="max-w-[650px] text-2xl">
            Hello world! I'm Lokesh Yadav, A MERN Stack Developer based in New
            Delhi, India. I enjoy creating meaningful narratives through
            development and experimenting with new technology to convey stories.
          </p>
        </div>
        <img src={bannerImage} alt="Banner Image" />
      </div>
    </div>
  );
}
