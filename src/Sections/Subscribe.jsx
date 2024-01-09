const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-between items-center max-lg:flex-col gap-10 padding-x mb-28"
    >
      <h3 className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h3>
      <div className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text" placeholder="subscribe@nike.com" className="input " />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <button className="bg-coral-red text-xl font-medium font-montserrat text-white px-6 py-3 rounded-full max-sm:w-full">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
