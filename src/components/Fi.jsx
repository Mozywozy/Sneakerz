import ImgFi from "../assets/fi.png";

function Fi() {
  return (
    <div className="w-full h-full bg-white  font-raleway flex">
      <img src={ImgFi} alt="fi" className="w-[795px]" />
      <div className="text-center justify-center items-center my-10 w-full">
        <h1 className="font-extrabold text-4xl my-10">FIND INSPIRATION</h1>
        <div className="">
          <h2 className="mt-20 font-bold text-5xl leading-tight">
            Create Style <br /> Based on Your <br /> Personality
          </h2>
          <p className="font-medium text-lg my-10">
            Get the best suitable style <br /> with many inspiration. It make{" "}
            <br /> you stand out!
          </p>
          <button className="bg-[#F40C2C] text-white p-5 px-16 rounded-xl font-bold text-lg">
            Find Your Style
          </button>
        </div>
      </div>
    </div>
  );
}

export default Fi;
