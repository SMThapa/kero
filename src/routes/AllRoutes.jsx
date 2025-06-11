import { Route, Routes } from "react-router-dom";
import {Categories, Home, Collection, ProductListing, ProductVariationListing, 
  ProductSingle, LocateOurStore, About, Career, Blogs, LatestPost, Catelogue, PageNotFound} from '../pages/index';

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/category/:cate" element={<Categories/>}/>
      <Route path="/product/:cate" element={<Categories/>}/>
      <Route path="/collection/:series" element={<Collection/>}/>
      <Route path="/collection/:series/:product" element={<ProductListing/>}/>      
      <Route path="/collection/:series/:product/:variation" element={<ProductVariationListing/>}/>      
      <Route path="/collection/:series/:product/single/:id" element={<ProductSingle/>}/>
      <Route path="/collection/:series/:product/:variation/:id" element={<ProductSingle/>}/>      
      <Route path="/locate-our-store" element={<LocateOurStore/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/career" element={<Career/>}/>
      <Route path="/blog" element={<Blogs/>}/>
      <Route path="/blog/latestPost" element={<LatestPost/>}/>
      <Route path="/catelogue" element={<Catelogue/>}/>

      <Route path="*" element={<PageNotFound/>}/>
    </Routes>
  )
}
