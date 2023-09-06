export default function Package() {
  return (
    <div className="bg-secondary py-20 px-5 border-y-2 shadow-sm">
      <div className="max-w-[1200px] m-auto">
        <h1 className="text-4xl mb-10">
          I can help you with <span>...</span>
        </h1>
        <div className="flex gap-10">
          <div className="flex-1">
            <p>01</p>
            <div className="bg-secondary h-1 w-full"></div>
            <h1>Design sense</h1>
            <p></p>
          </div>
          <div className="flex-1">
            <p>02</p>
            <div className="bg-secondary h-1 w-full"></div>
            <h1>Development</h1>
            <p></p>
          </div>
          <div className="flex-1">
            <p>03</p>
            <div className="bg-secondary h-1 w-full"></div>
            <h1>The full package</h1>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}
