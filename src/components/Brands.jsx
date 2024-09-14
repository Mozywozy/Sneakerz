import Nike from '../assets/nike.svg'
import Adidas from '../assets/adidas.svg'
import Puma from '../assets/puma.svg'
import Nb from '../assets/nb.svg'
import Ortus from '../assets/ortus.svg'
import Vans from '../assets/vans.svg'


function Brands() {
  return (
    <div className="h-full w-full bg-white justify-center items-center text-center font-raleway py-5">
        <div className="font-extrabold text-4xl">
            <h1>OUR BRAND</h1>
        </div>
        <div className="flex w-full text-center items-center justify-center gap-2 my-2">
            <img src={Nike} alt="" />
            <img src={Adidas} alt="" />
            <img src={Puma} alt="" />
            <img src={Nb} alt="" />
            <img src={Ortus} alt="" />
            <img src={Vans} alt="" />
        </div>
    </div>
  )
}

export default Brands