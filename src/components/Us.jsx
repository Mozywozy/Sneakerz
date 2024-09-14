import UsImg from "../assets/us.png";

function Us() {
  return (
    <div className="w-full h-full bg-white  font-raleway flex">
      <div className="text-center justify-center items-center my-20 w-full">
        <h1 className="font-extrabold text-4xl my-10">UPCOMING SOON</h1>
        <div className="">
          <h2 className="mt-20 font-bold text-5xl leading-tight">
            The Most <br /> Wanted Items
          </h2>
          <p className="font-medium text-lg my-10">
          Be the first one who gets this pair <br /> of brand new shoes. Upcoming in
            <br /> 30 September 2024
          </p>
          <button className="bg-[#F40C2C] text-white p-5 px-16 rounded-xl font-bold text-lg">
            PRE-ORDER NOW
          </button>
        </div>
      </div>
      <img src={UsImg} alt="fi" className="w-[750px]" />
    </div>
  );
}

export default Us;
