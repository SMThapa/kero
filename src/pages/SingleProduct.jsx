import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/singleProduct.scss";
import plusIcon from "../../public/icons/plus.png";
import minusIcon from "../../public/icons/minus.png";
import 'react-inner-image-zoom/lib/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';

const SingleProduct = () => {

  const variants = [
    { sku: "KSR001-WH", image: "/product/1.jpg", alt: "White Variant" },
    { sku: "KSR001-BE", image: "/product/2.jpg", alt: "Beige Variant" },
    { sku: "KSR001-BR", image: "/product/3.jpg", alt: "Brown Variant" },
    { sku: "KSR001-BK", image: "/product/4.jpg", alt: "Black Variant" },
    // { sku: "KSR001-AS", image: "/product/5.jpg", alt: "Red Variant" },
  ];


  const [selectedImage, setSelectedImage] = useState(variants[0].image);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionIndex) => {
    setOpenSection(openSection === sectionIndex ? null : sectionIndex);
  };

  return (
    <>
      <Navbar />

      <div className="single-product-page">
        <div className="singlePro">

          <div className="main-image">
            <InnerImageZoom src={selectedImage} zoomSrc={selectedImage} />
          </div>

          <div className="product-details">
            <div className="description">
              <h2>AENON</h2>
              <p className="model">MODEL NO.: KB2611010-ND-CP</p>
              <p className="series">SERIES: Aenon</p>

              <h3>Description</h3>
              <p className="description_p">SINGLE LEVER BASIN MIXER WITHOUT POP-UP</p>

              <h3>Variants</h3>
              <div className="variants">
                {variants.map((variant, index) => (
                  <img
                    key={index}
                    src={variant.image}
                    alt={variant.alt}
                    className={`variant-image ${selectedImage === variant.image ? "active" : ""}`}
                    onClick={() => setSelectedImage(variant.image)}
                  />
                ))}
              </div>

              <button className="nearest-showroom-btn">NEAREST SHOWROOM</button>
            </div>


            <div className="dropdown-section">
              {["Features", "Installation & Service Parts", "Design Files", "Additional Information"].map((section, index) => (
              <div key={index} className="dropdown-item">
              <button onClick={() => toggleSection(index)}>
                {section}
                <span className="dropdown-icon">
                  <img
                    src={openSection === index ? minusIcon : plusIcon}
                    alt={openSection === index ? "Collapse" : "Expand"}
                    width="16"
                    height="16"
                  />
                </span>
              </button>
              {openSection === index && (
                <div className="dropdown-content">
                  <p>Content for {section} goes here...</p>
                </div>
              )}
            </div>

              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SingleProduct;
