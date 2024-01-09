import { services } from "../Constants";

const Services = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 max-container padding-x mb-48">
      {services.map((service) => {
        return (
          <div
            className="bg-white shadow-3xl  px-12 py-20 rounded-2xl "
            key={service.label}
          >
            <div className="bg-coral-red p-2 rounded-full inline-block mb-4 ">
              <img
                src={service.imgURL}
                alt={service.label}
                width={24}
                height={24}
              />
            </div>
            <h1 className="text-2xl font-semibold font-montserrat leading-8">
              {service.label}
            </h1>
            <p className="mt-4 info-text"> {service.subtext}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Services;
