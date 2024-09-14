import Brands from "./components/Brands";
import Bs from "./components/Bs";
import Collection from "./components/Collection";
import Fi from "./components/Fi";
import Hero from "./components/Hero";
import Last from "./components/Last";
import Navbar from "./components/Navbar";
import Us from "./components/Us";
import HeroImg from "./assets/hero1.jpg";

function App() {
  return (
    <>
      <Navbar />
      <section className="flex">
        <Hero />
        <img
          src={HeroImg}
          alt="shoes"
          className="w-[650px] absolute top-0 rounded-es-full right-0 -z-10"
        />
      </section>

      <section className="bg-gradient-to-r from-[#08041C] to-[#F40C2C] pt-1 pb-1 mt-20">
        <Brands />
      </section>

      <section className="bg-gradient-to-r from-[#08041C] to-[#F40C2C] pb-2">
        <Collection />
      </section>

      <section className="bg-gradient-to-r from-[#08041C] to-[#F40C2C] pb-1">
        <Fi />
      </section>

      <section className="bg-gradient-to-r from-[#08041C] to-[#F40C2C] pb-1">
        <Us />
      </section>

      <section className="bg-gradient-to-r from-[#08041C] to-[#F40C2C] pb-1">
        <Bs/>
      </section>

      <section className="bg-[#0B041C]">
        <Last/>
      </section>
    </>
  );
}

export default App;
