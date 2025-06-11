import { useState, useEffect } from "react";
import { useParams, Link } from 'react-router-dom';
import { Fragment } from "react";
import axios, { all } from "axios";
import dictionary from "../../data/api-dictionary";

const initialProducts = [
  { id: 1, img: "/product/single_var1.png", name: "MODEL NO: ABCD1234" },
  { id: 2, img: "/product/single_var.png", name: "MODEL NO: ABCD1234" },
  { id: 3, img: "/product/single_var.png", name: "MODEL NO: ABCD1234" },
  { id: 4, img: "/product/single_var.png", name: "MODEL NO: ABCD1234" },    
];
const moreProducts = [
  { id: 7, img: "/product/single_var.png", name: "MODEL NO: ABCD1234 7" },
  { id: 8, img: "/product/single_var.png", name: "MODEL NO: ABCD1234 8" },
  { id: 9, img: "/product/single_var.png", name: "MODEL NO: ABCD1234 9" },
  { id: 10, img: "/product/single_var.png", name: "MODEL NO: ABCD1234 10" },
  { id: 11, img: "/product/single_var.png", name: "MODEL NO: ABCD1234 11" },
  { id: 12, img: "/product/single_var.png", name: "MODEL NO: ABCD1234 12" },
];

function getKeyByValue(value) {
  for (const key in dictionary.Range) {
    if (dictionary.Range[key] === value) {
        return parseInt(key); // Convert the key to a number since object keys are strings
    }
  }
  return null; // Return null if the value is not found
}

export const ProductVariationListing = () => {

  const {series, product, variation} = useParams();
  const [products, setProducts] = useState(initialProducts);
  const [visibleCount, setVisibleCount] = useState(6);
  const [variationProduct, setVariationProduct] = useState([]);

  const url = import.meta.env.VITE_API_URL;  
  const rangeUrl = import.meta.env.VITE_API_RANGE;       
  const [loadSimulate, setLoadSimulate] = useState(true);
  useEffect(()=>{
    const fetchData = async () => {
      try{
        const res1 = await axios.get(url, { headers: { 'Content-Type': 'application/json' } });
        const res2 = await axios.get(rangeUrl, { headers: { 'Content-Type': 'application/json' } });

        const allProducts = res1.data.products;      
        const setSeries = series === "klassic" ? "2" : "1";
        const filterCollection = allProducts.filter((obj)=> obj.collection == setSeries)
        const filterProduct = filterCollection.filter((obj)=> obj.category == dictionary.Category[series][product])                         
        
        const range = getKeyByValue(variation)
                   
        const filterVariation = filterProduct.filter((obj) => obj.range == range);              

        setVariationProduct(filterVariation);        
      }catch(err){
        console.log(err)
      }finally{        
        setLoadSimulate(false)        
      }

    }

    fetchData()
  },[])    


    const [loadedImg, setLoadedImg] = useState([]);
    function handleloadedImage(index){
      setLoadedImg((prev) => [...prev, index]);        
    }  

  return (
    <main className={`allProductMain ${series == 'aurum' ? 'background-dark' : 'background-light'}`}>      

      {
        !loadSimulate ?
        <Fragment>
          <div className="prod_details">
            <h2>{variation.split("_").join(" ").toUpperCase()}</h2>
            <p>Inspired by the calmness of water springs and the majestic cascading waterfalls, our Aenon range of showers beautifully blends the power of flow and the feeling of rejuvenating refreshment.</p>
          </div>
          <div className="product_grid">
            {variationProduct && variationProduct.map((item, index) => (
              <div className="product_card" key={index}>                                  
                <Link to={`/collection/${series}/${product}/${variation}/${item.product_code}`} className={loadedImg.includes(index+item.id) ? 'show-img':'hide'}>
                  <img 
                    src={item.thumbnail_picture_url} 
                    alt="image" 
                    onLoad={()=>handleloadedImage(index+item.id)}
                  />                  
                </Link>                
                <div className={`loader ${loadedImg.includes(index + item.id) ? 'hide':'show-ld'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><radialGradient id="a9" cx=".66" fx=".66" cy=".3125" fy=".3125" gradientTransform="scale(1.5)"><stop offset="0" stopColor="#0B62DA"></stop><stop offset=".3" stopColor="#0B62DA" stopOpacity=".9"></stop><stop offset=".6" stopColor="#0B62DA" stopOpacity=".6"></stop><stop offset=".8" stopColor="#0B62DA" stopOpacity=".3"></stop><stop offset="1" stopColor="#0B62DA" stopOpacity="0"></stop></radialGradient><circle transformOrigin="center" fill="none" stroke="url(#a9)" strokeWidth="15" strokeLinecap="round" strokeDasharray="200 1000" strokeDashoffset="0" cx="100" cy="100" r="70"><animateTransform type="rotate" attributeName="transform" calcMode="spline" dur="2" values="360;0" keyTimes="0;1" keySplines="0 0 1 1" repeatCount="indefinite"></animateTransform></circle><circle transformOrigin="center" fill="none" opacity=".2" stroke="#0B62DA" strokeWidth="15" strokeLinecap="round" cx="100" cy="100" r="70"></circle></svg>
                </div> 
                <p>{variation.split("_").join(" ").toUpperCase()}</p>
                <p>Model No: {item.product_code}</p>               
              </div>
                
            ))}
          </div>

        </Fragment>: 
        <div className="productListing skeleton-load">
          <div className="loading-heading"></div>
          <div className="loading-line-group">
              <div className="loading-line"></div>
              <div className="loading-line"></div>                    
          </div>
          <div className="grid-loading-container">
              <div className="loading-box"></div>
              <div className="loading-box"></div>
              <div className="loading-box"></div>
              <div className="loading-box"></div>  
          </div>              
      </div>
      }
    </main>
  )
}
