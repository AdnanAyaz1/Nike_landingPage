import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../Constants";

const Footer = () => {
  return (
    <div className="bg-black padding-x flex flex-col py-20 gap-20 xl:px-40">
      <div className="flex flex-col  lg:flex-row justify-between gap-10">
        {/* sec1 */}
        <div className="flex flex-col gap-10 xl:w-2/5">
          {/* logo */}
          <img src={footerLogo} alt="" height={100} width={140} />
          {/* text */}
          <p className="text-info text-gray-200 md:max-w-sm text-lg leading-7">
            Get shoes ready for the new term at your nearest Nike store. Find
            Your perfect Size In Store. Get Rewards
          </p>
          {/* icons */}
          <div className="flex gap-6">
            {socialMedia.map((icon) => {
              return (
                <div key={icon.alt} className="bg-white rounded-full p-3">
                  <img key={icon.alt} src={icon.src} />
                </div>
              );
            })}
          </div>
        </div>
        {/* sec2 */}
        <div className="flex flex-wrap lg:gap-10 gap-20 justify-between text-white flex-1 ">
          {footerLinks.map((link) => {
            return (
              <div key={link.title}>
                <h1 className="mb-8 text-2xl font-medium font-montserrat">
                  {link.title}
                </h1>
                <ul>
                  {link.links.map((link) => {
                    return (
                      <li
                        key={link.name}
                        className="mt-4 hover:text-gray-400 text-base font-montserrat"
                      >
                        <a href="">{link.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      {/* sec3 */}
      <div className="flex justify-between max-sm:flex-col ">
        <div className="flex gap-3 self-center">
          <img src={copyrightSign} alt="" />
          <p className="text-gray-100 text-lg font-montserrat">
            Copyright. All rights reserved.
          </p>
        </div>
        <p className="text-gray-100 text-center text-lg font-montserrat">
          Terms & Conditions
        </p>
      </div>
    </div>
  );
};

export default Footer;
