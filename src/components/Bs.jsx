import Bs1 from '../assets/bs1.png'
import Bs2 from '../assets/bs2.png'
import Bs3 from '../assets/bs3.png'
import Bs4 from '../assets/bs4.png'
import Bs5 from '../assets/bs5.png'
import Bs6 from '../assets/bs6.png'

function Bs() {
  return (
    <div className="w-full h-full bg-white font-raleway justify-around">
        <h1 className="text-center justify-center items-center w-full text-3xl font-bold my-20">BEST SELLER THIS MONTH</h1>
        <div className="grid grid-cols-3">
            <div className="w-fit border">
                <img src={Bs1} alt="" className='w-[100%]'/>
                <div className="bg-[#08041C] text-white p-3 leading-relaxed">
                    <p>Vans Ardiles</p>
                    <p className='font-bold'>IDR 660.000</p>
                </div>
            </div>
            <div className="w-fit border">
                <img src={Bs2} alt="" className='w-[100%]'/>
                <div className="bg-[#08041C] text-white p-3 leading-relaxed">
                    <p>Adidas Predator A4x</p>
                    <p className='font-bold'>IDR 1.240.000</p>
                </div>
            </div>
            <div className="w-fit border">
                <img src={Bs3} alt="" className='w-[100%]'/>
                <div className="bg-[#08041C] text-white p-3 leading-relaxed">
                    <p>Reebok NC Formula</p>
                    <p className='font-bold'>IDR 849.000</p>
                </div>
            </div>
            <div className="w-fit border">
                <img src={Bs4} alt="" className='w-[100%]'/>
                <div className="bg-[#08041C] text-white p-3 leading-relaxed">
                    <p>New Balance X90 Running</p>
                    <p className='font-bold'>IDR 930.000</p>
                </div>
            </div>
            <div className="w-fit border">
                <img src={Bs5} alt="" className='w-[100%]'/>
                <div className="bg-[#08041C] text-white p-3 leading-relaxed">
                    <p>Nike Air White N89</p>
                    <p className='font-bold'>IDR 1.560.000</p>
                </div>
            </div>
            <div className="w-fit border">
                <img src={Bs6} alt="" className='w-[100%]'/>
                <div className="bg-[#08041C] text-white p-3 leading-relaxed">
                    <p>Nike Air White-Red Strip</p>
                    <p className='font-bold'>IDR 1.660.000</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Bs