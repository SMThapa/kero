import { Link } from "react-router-dom";
import dictionary from '../../data/api-dictionary';

Link

export const ProductCard = ({productArr=[], series, product, unique}) => {
  return (
    <>
        {
            unique ?
            <>
                {
                    productArr.map((item, index)=>(
                        <div key={index} className="product_card">
                            <Link to={`/collection/${series}/${product}/${dictionary.Range[item.range]}`}>
                                <img 
                                    src={"https://demosite.kerovit.com/storage/AllImages/"+item.thumbnail_picture_url.split('/storage/')[1].split(" ").join("")+".png"} 
                                    alt="image" 
                                />                                        
                            </Link>
                            <p>{dictionary.Range[item.range].split("_").join(" ")}</p>
                        </div>
                    ))
                }

            </>:
            <>
                {
                    productArr.map((item, index)=>(
                        <div className="product_card" key={index + item.id}>
                            <Link to={`/collection/${series}/${product}/single/${item.product_code}`}>
                                <img 
                                    src={"https://demosite.kerovit.com/storage/AllImages/"+item.thumbnail_picture_url.split('/storage/')[1].split(" ").join("")+".png"} 
                                    alt="image" 
                                />
                            </Link>
                            <p>{item.product_code}</p>
                        </div>
                    ))
                }
            </>
        }
    </>
  )
}
