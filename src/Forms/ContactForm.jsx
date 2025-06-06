export default function ContactForm() {
  return (
    <form className="flex-[4] text-gray-700">
      <ol className="">
        <li className="flex flex-col border-t-2 py-10">
          <label className="text-xl sm:text-3xl">What&apos;s your name?</label>
          <input
            type="text"
            className="mt-5 p-2 text-lg sm:text-2xl outline-none border-none bg-transparent text-black"
            placeholder="John Doe *"
          />
        </li>
        <li className="flex flex-col border-t-2 py-10">
          <label className="text-xl sm:text-3xl">What&apos;s your email?</label>
          <input
            type="text"
            className="mt-5 p-2 text-lg sm:text-2xl outline-none border-none bg-transparent text-black"
            placeholder="john@doe.com *"
          />
        </li>
        <li className="flex flex-col border-t-2 py-10">
          <label className="text-xl sm:text-3xl">
            What&apos;s the name of your organization?
          </label>
          <input
            type="text"
            className="mt-5 p-2 text-lg sm:text-2xl outline-none border-none bg-transparent text-black"
            placeholder="John & Doe ®"
          />
        </li>
        <li className="flex flex-col border-t-2 py-10">
          <label className="text-xl sm:text-3xl">
            What&apos;s service are you looking for?
          </label>
          <input
            type="text"
            className="mt-5 p-2 text-lg sm:text-2xl outline-none border-none bg-transparent text-black"
            placeholder="Web Design, Web Development ... *"
          />
        </li>
        <li className="flex flex-col border-t-2 py-10">
          <label className="text-xl sm:text-3xl">Your message</label>
          <textarea
            rows={1}
            className="mt-5 p-2 text-lg sm:text-2xl outline-none border-none bg-transparent text-black"
            placeholder="Hello Lokesh, can you help with ... *"
          />
        </li>
      </ol>

      <div className="h-0.5 w-full bg-black my-32 sm:my-40 relative">
        <div className="bg-black text-white h-40 sm:h-48 w-40 sm:w-48 rounded-full absolute z-10 -top-20 sm:-top-24 right-10 sm:right-40 grid place-items-center cursor-pointer">
          <p className="text-2xl">Submit</p>
        </div>
      </div>
    </form>
  );
}
