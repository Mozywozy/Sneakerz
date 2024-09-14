import ShoeLast from "../assets/last.png";
import Logo from "../assets/logowhite.svg";

function Last() {
  return (
    <div className="bg-[#0B041C] py-20 font-raleway">
      <div className="flex">
        <img src={ShoeLast} alt="" />
        <div className="text-white">
          <div className="">
            <h1 className="font-extrabold text-3xl">Find More About Us</h1>
            <h1 className="pt-10 font-bold text-lg">Operational Hour</h1>
            <p className="pt-2">Monday - Friday: 9.00 - 18.00</p>
          </div>
          <div className="pt-10">
            <h1 className="font-extrabold text-lg">Informatiom</h1>
            <h3 className="pt-2">
              Term & Conditions <br /> Track Order <br /> FAQ
            </h3>
          </div>
          <div className="pt-10">
            <h1 className="font-extrabold text-lg">Contact Us</h1>
            <h2>Whatsapp : +6288811002255</h2>
            <h2>Email : Holla@sneakerz.com</h2>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <img src={Logo} alt="" className="" />
      </div>
      <div className="w-full flex justify-center text-white py-10 text-2xl">
        <div className="border "></div>
        <h1>Copyright 2024 - Design by C</h1>
        <div className="border"></div>
      </div>
    </div>
  );
}

export default Last;
