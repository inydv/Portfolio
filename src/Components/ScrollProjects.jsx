import about1 from '../Assets/About-image-1.jpg';
import about2 from '../Assets/About-image-2.jpg';
import about3 from '../Assets/About-image-3.jpg';
import about4 from '../Assets/About-image-4.jpg';
import about5 from '../Assets/About-image-5.jpg';
import about6 from '../Assets/About-image-6.jpg';

export default function ScrollProjects() {
  return (
    <div className="flex gap-5 my-10 justify-center items-center">
      <img src={about1} alt="" className="w-64" />
      <img src={about2} alt="" className="w-64" />
      <img src={about3} alt="" className="w-64" />
      <img src={about4} alt="" className="w-64" />
      <img src={about5} alt="" className="w-64" />
      <img src={about5} alt="" className="w-64" />
      <img src={about5} alt="" className="w-64" />
      <img src={about6} alt="" className="w-64" />
      <img src={about6} alt="" className="w-64" />
      <img src={about6} alt="" className="w-64" />
    </div>
  );
}
