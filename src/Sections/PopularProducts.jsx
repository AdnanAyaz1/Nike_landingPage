import { products } from "../Constants";
import { star } from "../assets/icons";
const PopularProducts = () => {
  return (
    <section id="products" className="mt-40 xl:mt-52 padding-x max-container">
      <div>
        {/* heading */}
        <h1 className="text-4xl font-montserrat font-semibold">
          Our <span className="text-coral-red">Popular</span> Products
        </h1>
        {/* text */}
        <p className="mt-4 mb-16 text-slate-gray tracking-wide font-montserrat lg:max-w-lg">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
        {/* cards */}
        <div className="grid  xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6  grid-cols-1 ">
          {products.map((item) => {
            return (
              <div key={item.price} className="flex flex-col gap-10 mb-4  ">
                <div className="hover:shadow-3xl  w-[282px] max-lg:w-[250px] rounded-3xl hover:cursor-pointer">
                  <img
                    src={item.imgURL}
                    alt=""
                    height={300}
                    width={300}
                    className="hover:scale-105 "
                  />
                </div>
                {/* stats */}
                <div className="flex flex-col gap-3">
                  <div className="flex justify-start items-center gap-2 font-montserrat">
                    <img src={star} alt="" />
                    <p className="text-xl text-slate-gray  ">( 4.5 )</p>
                  </div>
                  <h1 className="text-2xl font-palanquin font-semibold">
                    {item.name}
                  </h1>
                  <h1 className="text-2xl font-montserrat text-coral-red font-semibold">
                    {item.price}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;
