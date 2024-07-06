export default function ContactDetails() {
  return (
    <div className="flex-1 text-black">
      <h6 className="text-gray-700 text-sm">CONTACT DETAILS</h6>
      <p className="text-xl mt-4">im.nydv@gmail.com</p>
      <p className="text-xl mt-2">+91 7303405787</p>

      <h6 className="text-gray-700 text-sm mt-10">SOCIALS</h6>
      <ul>
        <li className="text-xl mt-4">
          <a href="#">Instagram</a>
        </li>
        <li className="text-xl mt-2">
          <a href="#">Facebook</a>
        </li>
        <li className="text-xl mt-2">
          <a href="#">Linkedin</a>
        </li>
        <li className="text-xl mt-2">
          <a href="#">Stackover Flow</a>
        </li>
        <li className="text-xl mt-2">
          <a href="#">Github</a>
        </li>
      </ul>

      <h6 className="text-gray-700 text-sm mt-10">LIKE MY WORK?</h6>
      <a className="text-xl mt-4 block w-fit" href="#">
        Buy Me Coffee
      </a>
    </div>
  );
}
