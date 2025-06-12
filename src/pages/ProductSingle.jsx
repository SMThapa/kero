import { useEffect, useState } from "react";
import plusIcon from "../../public/icons/plus.png";
import minusIcon from "../../public/icons/minus.png";
import 'react-inner-image-zoom/lib/styles.min.css';
import InnerImageZoom from 'react-inner-image-zoom';
import { useParams } from 'react-router-dom'
import axios from "axios";

const variants = [
    { sku: "KSR001-WH", image: "/product/1.jpg", alt: "White Variant" },
    { sku: "KSR001-BE", image: "/product/2.jpg", alt: "Beige Variant" },
    { sku: "KSR001-BR", image: "/product/3.jpg", alt: "Brown Variant" },
    { sku: "KSR001-BK", image: "/product/4.jpg", alt: "Black Variant" },    
];

export const ProductSingle = () => {

    const {series, product, variation, id} = useParams();
    const [selectedImage, setSelectedImage] = useState(variants[0].image);
    const [openSection, setOpenSection] = useState(null);
  
    const toggleSection = (sectionIndex) => {
      setOpenSection(openSection === sectionIndex ? null : sectionIndex);
    };

    const [loadSimulate, setLoadSimulate] = useState(true);

    const [singleProduct, setSingleProduct] = useState({})
    const [mainProduct, setMainProduct] = useState({})

    const url = import.meta.env.VITE_API_URL;    
    useEffect(()=>{
        axios.get(url).then(res => {
            const allProducts = res.data.products;      
            const singleItem = allProducts.find((obj)=> obj.product_code == id);
            setMainProduct(singleItem)
            setSingleProduct(singleItem)
            setLoadSimulate(false)
            
            setSelectedImage(singleItem.thumbnail_picture_url)            
            
        }).catch(err => {
            console.log(err)
        })
    }, [ ])

    function handleVariant(code){
        const variant = mainProduct.variants.find(obj => obj.product_code == code)
        setSelectedImage(variant.thumbnail_picture_url)
        setSingleProduct(variant)
        // console.log(variant)
    }

  return (
    <>
        {
            !loadSimulate ? 
            <div className="single-product-page">
                <div className="singlePro">

                <div className="main-image">
                    <InnerImageZoom src={selectedImage} zoomSrc={selectedImage} />            
                </div>

                <div className="product-details">
                    <div className="description">
                    <h2>{product.toUpperCase()}</h2>
                    <p className="model">MODEL NO.: {singleProduct.product_code}</p>
                    <p className="series">SERIES: {series.toUpperCase()}</p>

                    <h3>Product Description</h3>
                    <p className="description_p">{singleProduct.product_description}</p>

                    <h3>Variants</h3>
                    <div className="variants">
                        {mainProduct.variants.map((variant, index) => (
                        <img
                            key={index}
                            src={variant.thumbnail_picture_url}
                            alt={variant.product_code}
                            loading="lazy"
                            className={`variant-image ${selectedImage === variant.thumbnail_picture_url ? "active" : ""}`}
                            onClick={() => handleVariant(variant.product_code)}
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
            </div> : 
        
            <div className="single-product-page skeleton-load">
                <div className="singlePro">
                    <div className="main-image">
                        <div className="loading-image"></div>
                    </div>

                    <div className="product-details">
                        <div className="loading-heading"></div>
                        <div className="loading-line-group">
                            <div className="loading-line"></div>
                            <div className="loading-line"></div>
                            <div className="loading-line"></div>
                        </div>
                        <div className="loading-heading"></div>   
                        <div className="loading-box"></div>
                    </div>
                </div>
            </div>
        }

    </>
  )
}
