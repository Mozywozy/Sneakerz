import Nike from '../assets/nike.svg'
import Adidas from '../assets/adidas.svg'
import Puma from '../assets/puma.svg'
import Nb from '../assets/nb.svg'
import Ortus from '../assets/ortus.svg'
import Vans from '../assets/vans.svg'

function Brands() {
  return (
    <div className="h-full w-full bg-white items-center justify-center font-raleway py-5">
      <div className="font-extrabold text-4xl text-center">
        <h1>OUR BRAND</h1>
      </div>
      <div className="w-full overflow-hidden relative">
        <div className="slide gap-10 flex items-center">
          <img src={Nike} alt="Nike" />
          <img src={Adidas} alt="Adidas" />
          <img src={Puma} alt="Puma" />
          <img src={Nb} alt="NB" />
          <img src={Ortus} alt="Ortus" />
          <img src={Vans} alt="Vans" />
          <img src={Nike} alt="Nike" />
          <img src={Adidas} alt="Adidas" />
          <img src={Puma} alt="Puma" />
          <img src={Nb} alt="NB" />
          <img src={Ortus} alt="Ortus" />
          <img src={Vans} alt="Vans" />
        </div>
      </div>
    </div>
  );
}

export default Brands;
