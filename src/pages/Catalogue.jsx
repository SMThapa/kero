import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/catalogue.scss";
import cat1 from "../../public/catelogue1.png";
import cat2 from "../../public/catelogue2.png";

const Catalogue = () => {
  return (
    <>
      <Navbar />

      <div className="catalogueSingle">
        <div className="second_banner mobile_view">
          <div className="inside_banner_content">
            {/* <h2>the catalogue</h2> */}
            <img src="./catalogue/year.png" alt="" />
            <p>Browse our latest catalogue and discover the perfect bathroom solutions for your home.</p>
          </div>
          <div className="catalogue">
            <a href="#">General product catalogue</a>
            <a href="#">General product catalogue</a>
          </div>
        </div>

        <div className="second_banner desktop_view">
          <div className="inside_banner_content">
            {/* <h2>the catalogue</h2> */}
            <img src="./catalogue/year.png" alt="" />

            <p>Browse our latest catalogue and discover the perfect bathroom solutions for your home.</p>
          </div>
          <div className="catalogue">
            <div className="the_catelogue">
              <img src={cat1} alt="Catalogue 1" />
              <a href="#">General product catalogue</a>
            </div>
            <div className="the_catelogue">
              <img src={cat2} alt="Catalogue 2" />
              <a href="#">General product catalogue</a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Catalogue;
