import Navbar from "./Sections/Navbar";
import Hero from "./Sections/Hero";
import PopularProducts from "./Sections/PopularProducts";
import SpecialQuality from "./Sections/SpecialQuality";
import Services from "./Sections/Services";
import SpecialProducts from "./Sections/SpecialProducts";
import CustomerReviews from "./Sections/CustomerReviews";
import Subscribe from "./Sections/Subscribe";
import Footer from "./Sections/Footer";
const App = () => {
  return (
    <>
      <main className="relative">
        <Navbar />
        <Hero />
        <PopularProducts />
        <SpecialQuality/>
        <Services/>
        <SpecialProducts/>
        <CustomerReviews/>
        <Subscribe/>
        <Footer/>
      </main>
      ;
    </>
  );
};

export default App;
