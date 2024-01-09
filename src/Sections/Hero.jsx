import { useState } from "react";
import { arrowRight } from "../assets/icons/index";
import { statistics } from "../Constants";
import { bigShoe1 } from "../assets/images";
import { shoes } from "../Constants";

const Hero = () => {
  const [currentShoe, setShoe] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="xl:padding-x  max-container flex max-xl:flex-col gap-16 "
    >
      {/* collections */}
      <div className="max-xl:padding-x pt-20 xl:w-2/5 xl:mt-24 ">
        <h1 className="mt-10 text-xl text-coral-red font-montserrat mb-12 ">
          Our Summer Collections
        </h1>
        {/* main Heading */}
        <h1 className="text-8xl max-sm:text-4xl font-palanquin font-bold  xl:bg-white xl:whitespace-nowrap relative  z-10 pr-10">
          <span className="xl:bg-white xl:whitespace-nowrap relative  z-10 pr-10 ">
            The New Arrival
          </span>
        </h1>
        <br />
        <h1 className="text-8xl font-palanquin font-bold">
          <span className="text-coral-red">Nike</span> Shoes
        </h1>
        {/* text */}
        <p className="text-slate-gray font-montserrat text-lg mt-8 leading-8 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        {/* button */}
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
        {/* stats */}
        <div className="flex gap-16 mt-14 items-center justify-start">
          {statistics.map((stat) => {
            return (
              <div key={stat.value} className="flex flex-col">
                <h1 className="text-4xl font-bold font-palanquin">
                  {stat.value}
                </h1>
                <p className="text-xl text-slate-gray  tracking-wide">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* image with gallary */}
      <div className="flex flex-1 items-center justify-center max-xl:mt-12 bg-cover bg-hero max-xl:py-32 max-xl:pb-36 relative xl:min-h-screen top-0   w-[100%]">
        <img src={currentShoe} alt="shoe" height={610} width={502} />
        <div className="absolute -bottom-10 flex gap-8 ">
          {shoes.map((shoe) => {
            return (
              <div
                key={shoe.bigShoe}
                className={`bg-cover bg-card rounded-xl h-36 w-40 max-sm:h-28 max-sm:w-28 flex items-center justify-center hover:cursor-pointer ${
                  currentShoe === shoe.bigShoe
                    ? "border-2 border-coral-red"
                    : ""
                }`}
                onClick={() => setShoe(shoe.bigShoe)}
              >
                <img src={shoe.bigShoe} alt="shoe" className="h-[120px] w-[120px] max-sm:h-[80px] max-sm:w-[80px]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;
