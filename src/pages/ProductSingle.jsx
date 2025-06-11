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
    // useEffect(()=>{
    //     setTimeout(() => {
    //         setLoadSimulate(false)
    //     }, 1500);
    // }, [])

    const [singleProduct, setSingleProduct] = useState({})

    const url = import.meta.env.VITE_API_URL;
    // const api = `${url}/products/json`; 
    useEffect(()=>{
        axios.get(url).then(res => {
            const allProducts = res.data.products;      
            // const setSeries = series === "klassic" ? "2" : "1";
            // const filterCollection = allProducts.filter((obj)=> obj.collection == setSeries)            
            // const filterProduct = filterCollection.filter((obj)=> obj.category == dictionary.Category[product])      
            // console.log(filterProduct)

            const singleItem = allProducts.find((obj)=> obj.product_code == id);
            setSingleProduct(singleItem)
            setLoadSimulate(false)
            
            setSelectedImage("https://demosite.kerovit.com/storage/AllImages/"+singleItem.thumbnail_picture_url.split('/storage/')[1]+".png")            
            
        }).catch(err => {
            console.log(err)
        })
    }, [ ])

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
                    <h2>{variation ? variation.split("_").join(" ").toUpperCase() : product.split("_").join(" ").toUpperCase()}</h2>
                    <p className="model">MODEL NO.: {id.split('_').join(' - ')}</p>
                    <p className="series">SERIES: {series.toUpperCase()}</p>

                    <h3>Product Description</h3>
                    <p className="description_p">{singleProduct.product_description}</p>

                    {/* <h3>Variants</h3>
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
                    </div> */}

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
