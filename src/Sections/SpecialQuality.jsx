import { shoe8 } from "../assets/images";
const SpecialQuality = () => {
  return (
    <section id="about-us" className="my-48 padding-x max-container ">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* text */}
        <div className="lg:w-2/3">
          <h1 className="text-4xl font-bold font-palanquin xl:max-w-lg">
            We Provide You <span className="text-coral-red">Super Quality</span>{" "}
            Shoes
          </h1>
          <p className="info-text mt-4 mb-8 xl:max-w-lg">
            Ensuring premium comfort and style, our meticulously crafted
            footwear is designed to elevate your experience, providing you with
            unmatched quality, innovation, and a touch of elegance
          </p>
          <p className="info-text xl:max-w-lg">
            Our dedication to detail and excellence ensures your satisfaction
          </p>
          <button className="text-white text-lg bg-coral-red p-4 px-8 rounded-full font-montserrat leading-6 active:scale-90 my-10">
            View Details
          </button>
        </div>
        {/* image */}
        <div>
          <img src={shoe8} />
        </div>
      </div>
    </section>
  );
};

export default SpecialQuality;
