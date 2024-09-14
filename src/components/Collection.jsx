import Colection1 from '../assets/colection1.png';
import Colection2 from '../assets/colection2.png';
import Colection3 from '../assets/colection3.png';

function Collection() {
  return (
    <div className="h-full w-full bg-white justify-center items-center text-center font-raleway py-20">
      <h1 className="font-extrabold text-4xl">NEWEST COLLECTION</h1>
      <div className="flex gap-2 items-center justify-center text-center my-20">
        <img
          src={Colection1}
          alt="Collection 1"
          className="collection-img"
        />
        <img
          src={Colection2}
          alt="Collection 2"
          className="collection-img"
        />
        <img
          src={Colection3}
          alt="Collection 3"
          className="collection-img"
        />
      </div>
    </div>
  );
}

export default Collection;
