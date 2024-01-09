import { offer } from "../assets/images";
import { arrowRight } from "../assets/icons/index";
const SpecialProducts = () => {
  return (
    <div className="padding-x max-container flex-col flex gap-10 lg:flex-row-reverse mb-28">
      <div className="lg:w-1/2 my-auto">
        <h1 className="text-4xl leading-6 font-bold font-palanquin mb-8"><span className="text-coral-red">Special</span> Offer</h1>
        <p className="mb-8 info-text text-lg">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </p>
        <p className="info-text text-lg">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </p>
        <div className="flex gap-6">
          <button className="flex gap-3 bg-coral-red px-5 py-4 rounded-full items-center justify-center mt-12 active:scale-90 shadow-xl ">
            <p className="text-white tracking-wide text-lg">Shop Now</p>
            <img
              src={arrowRight}
              alt="arrow"
              height={20}
              width={20}
              className="bg-white rounded-full"
            />
          </button>
          <button className="flex gap-3 bg-white px-5 py-2 rounded-full items-center justify-center mt-12 active:scale-90 shadow-xl  border border-gray-500">
            <p className="text-gray-500 leading-8 text-lg font-montserrat">learn More</p>
          </button>
        </div>
      </div>
      <div>
        <img src={offer} alt="" />
      </div>
    </div>
  );
};

export default SpecialProducts;
