import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';
import dictionary from '../../data/api-dictionary';

export const ProductListing = () => {

    const url = import.meta.env.VITE_API_URL;
    const rangeUrl = import.meta.env.VITE_API_RANGE;      
    
    const {product, series} = useParams();    
  
    const [loadSimulate, setLoadSimulate] = useState(true);
    const setSeries = series === "klassic" ? "2" : "1";

    const [nullRangeProducts, setNullProducts] = useState([]);
    const [uniqueRange, setRange] = useState([]);    
    useEffect(()=>{    
        const fetchData = async () => {
            try {
                const res1 = await axios.get(url, { headers: { 'Content-Type': 'application/json' } });                
                const allProducts = res1.data.products;            
                const filterCollection = allProducts.filter((obj)=> obj.collection == setSeries)                                    
                
                const filterProduct = filterCollection.filter((obj)=> obj.category == dictionary.Category[series][product])                                                                       
                
                const newRange = [...new Map(filterProduct.map(item => [item.range, item])).values()];                

                if(newRange == 0){
                    setNullProducts(filterProduct)
                }else{                           
                    setRange(newRange);
                }          

            }catch(err){
                console.log(err)
            }finally{
                setLoadSimulate(false)                
            }
        }

        fetchData();
    },[])        

  return (
    <main className={`allProductMain ${series == 'aurum' ? 'background-dark' : 'background-light'}`}>    
        {
            !loadSimulate ? 
            <Fragment>
                <div className="prod_details">
                    <h2>{product.split("_").join(" ").toUpperCase()}</h2>
                    <p>
                        Designed with a skillful unification of creativity and engineering.
                        Kerovit has combined unmatched functional expertise with a promise
                        of excellence, giving customers an alluring experience they desire!
                    </p>
                </div>
                <div className="product_grid">
                    {
                        nullRangeProducts.length > 0 ?
                        <Fragment>
                            {
                                nullRangeProducts.map((item, index)=>(
                                    <div className="product_card" key={index + item.id}>
                                        <Link to={`/collection/${setSeries}/${product}/single/${item.product_code}`}>
                                            <img src={"https://demosite.kerovit.com/storage/AllImages/"+item.thumbnail_picture_url.split('/storage/')[1].split(" ").join("")+".png"} alt="image" />
                                        </Link>
                                        <p>{item.product_code}</p>
                                    </div>
                                ))
                            }
                        </Fragment> : <Fragment>
                            {uniqueRange.map((item, index) => (
                                <div key={index} className="product_card">
                                    <Link to={`/collection/${series}/${product}/${dictionary.Range[item.range]}`}>
                                        <img src={"https://demosite.kerovit.com/storage/AllImages/"+item.thumbnail_picture_url.split('/storage/')[1].split(" ").join("")+".png"} alt="image" />                                        
                                    </Link>
                                    <p>{dictionary.Range[item.range].split("_").join(" ")}</p>
                                </div>
                            ))}
                        </Fragment>
                    }
                </div>

            </Fragment> : 
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
