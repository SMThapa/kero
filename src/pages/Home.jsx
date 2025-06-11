import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

import firstBannerImg from "../../public/home page-05.png"

import cat1 from "../../public/catelogue1.png"
import cat2 from "../../public/catelogue2.png"

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";


export const Home = () => {

  const products = [
    { id: 1, img: "/new/faucet.png", name: "Faucets", link: "/category/faucet", icon: "./icons/faucet.png" },
    { id: 2, img: "/new/shower.png", name: "Showers", link: "/category/shower", icon: "./icons/shower.png" },
    { id: 3, img: "/new/basin.png", name: "Basin", link: "/category/basin", icon: "./icons/basin.png" },
    { id: 4, img: "/new/toilet.png", name: "Toilet", link: "/category/toilet", icon: "./icons/toilet.png" },
    { id: 5, img: "/new/furniture.png", name: "Bathroom Furniture", link: "/category/bathroomFurniture", icon: "./icons/bathroom_furniture.png" },
    { id: 6, img: "/new/accessories.png", name: "Accessories", link: "/category/accessories", icon: "./icons/accessories.png" },    
    {}
  ];
  const swiperRef = useRef(null);

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  }
  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  }

  const blogPosts = [
    { id: 1, img: "/blog3.png", title: "Traditional vs. Wall-Mounted Bathroom Faucets: A Comparative Guide", desc: "Lorem ipsum, dolor sit" },
    { id: 2, img: "/blog3.png", title: "Choosing the Right Faucet Finish for Your Bathroom – A Guide to Chrome, Gold, and Matte Black", desc: "Lorem ipsum, dolor sit" },
    { id: 3, img: "/blog3.png",title: "Traditional vs. Wall-Mounted Bathroom Faucets: A Comparative Guide", desc: "Lorem ipsum, dolor sit"  },
    { id: 4, img: "/blog3.png", title: "Choosing the Right Faucet Finish for Your Bathroom – A Guide to Chrome, Gold, and Matte Black", desc: "Lorem ipsum, dolor sit" },
    { id: 5, img: "/blog3.png", title: "Traditional vs. Wall-Mounted Bathroom Faucets: A Comparative Guide", desc: "Lorem ipsum, dolor sit"  },
  ];

  const swiperRefBlog = useRef(null);
  const handlePrevBlogSlide = () => {
    if (swiperRefBlog.current) {
      swiperRefBlog.current.slidePrev();
    }
  }
  const handleNextBlogSlide = () => {
    if (swiperRefBlog.current) {
      swiperRefBlog.current.slideNext();
    }
  };

  //swiper category
  const [activeIndex, setActiveIndex] = useState(0);
  const handleTextClick = (index) => {
    setActiveIndex(index);
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Use the Swiper instance to navigate
    }
  };

  return (
    <main className="home">
      <div className="homebanner">
        <video src="/videos/Home page Video.mp4" autoPlay loop muted></video>
        {/* <div className="bannerText">
          <div className="center-heading">
            <h2>bathrooms</h2>           
            <h2> <span className="h2_second">you </span> desire</h2>  
          </div>       
          <div className="bannerdescp">
            <img src="home page-08.png" alt="" className="line_image" loading="lazy"/>
            <p>Let your desires come alive with the perfect fusion of form, function and usability with Kerovit. Featuring an eclectic blend of exquisite design, environment-friendly technology and unparalleled quality, Kerovit enhances your bathroom décor and experience.</p>

          </div>
        </div> */}
      </div>

      <div className="home_categories">
        {/* <h2>Categories</h2> */}
        <img src="categories_heading.png" alt="" className="categories_heading" loading="lazy"/>
        <p>
        Designed by skillfully unifying creativity and engineering, Kerovit has combined unmatched functional expertise with a promise of excellence, giving customers an exceptional experience that fulfils their heart's desires!
        </p>

        <div className="categories-slide">
          <div className="category-option">
            {/* <div className="heading">CATEGORIES</div> */}
            {
              products.map((item, index)=>(
                <div className={`option ${activeIndex === index ? 'category-active': ''}`} onClick={() => handleTextClick(index)} key={index}><img src= {item.icon} alt="catalogue" className="categoryNameIcon" loading="lazy"/>{item.name}</div>
              ))
            }
          </div>
          <Swiper
            modules={[Pagination]}
            spaceBetween={10}
            slidesPerView={2}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1023: { slidesPerView: 1.5 },                
              1440: { slidesPerView: 2.5 },
            }}              
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="inside text-center">
                  <Link to={product.link}><img src={product.img} alt={product.name} loading="lazy"/></Link>
                  <div className="background-layer"></div>
                  <div className="pop-on-hover">
                    <p>{product.name}</p>
                    <Link to={product.link}>
                      <button type="button" className="showMoreBtn">Show More <BsArrowRight className="right_arrow"/></button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="swiper_action_button view_on_desktop">
          <button type="button" className="swip_button" onClick={handlePrevSlide}><FaChevronLeft className="right_arrow swip_button_icon"/></button>
          <button type="button" className="swip_button" onClick={handleNextSlide}><FaChevronRight className="right_arrow swip_button_icon"/></button>            
        </div>          
        <button type="button" className="view_on_mobile" onClick={handleNextSlide}>Swipe <BsArrowRight className="right_arrow"/></button>
      </div>

      <div className="home_collections">

        <h2>Collections</h2>
        <p>Offering an impeccable blend of cutting-edge technology and contemporary design, Kerovit brings a diverse collection of faucets, sanitaryware, showers, bathroom furniture, and accessories with top-notch quality standards.</p>

      </div>

      <div className="aurum-klassic-row">
        <div className="vertical-line"></div>
        <div className="home_aurum">
          <div className="title-container">            
            <img src="aurum_heading.png" alt="" className="aurum_heading" loading="lazy"/>
            <img src="/aurum_A.png" alt="A icon" className="aurum-icon"  loading="lazy"/>
          </div>
          <p>Indulge in the luxury of Aurum, our exquisite collection that seamlessly blends elegance with nature's palette of perfection.</p>
          <div className="img-container">
            {/* <img src="/single_product.png" alt="Single Product image"  loading="lazy"/> */}
            <img src="/home page-22.png" alt="A icon" loading="lazy"/>

            <button type="button" className="desktop-card-button">
              <Link to="/collection/aurum" className="showMoreBtn">Show More <BsArrowRight className="right_arrow"/></Link>
            </button>
          </div>
          <button type="button">
            <Link to="/collection/aurum" className="showMoreBtn">Show More <BsArrowRight className="right_arrow"/></Link>
          </button>
        </div>
        <div className="home_klassic">
          <div className="title-container">
            {/* <h2 className="klassic_heading">KLASSIC</h2> */}
            <img src="klassic_heading.png" alt="" className="klassic_heading" loading="lazy"/>
            <img src="/klassic_K.png" alt="K icon" className="klassic-icon"  loading="lazy"/>
          </div>
        
          <p className="klassic_desc">
          Bring home the true definition of timeless luxury with our Klassic collection, which maintains sophistication at its peak with elegant, minimal aesthetics.
          </p>
          <div className="img-container">
            <img src="/klassic.png" alt="Single Product image"  loading="lazy"/>

            <button type="button" className="desktop-card-button">
              <Link to="/collection/klassic" className="showMoreBtn">Show More <BsArrowRight className="right_arrow"/></Link>
            </button>
          </div>
          <button type="button">
            <Link to="/collection/klassic" className="showMoreBtn">Show More <BsArrowRight className="right_arrow"/></Link>
          </button>
        </div>
      </div>

      <div className="first_banner desktop_view">          
        <div className="inside_banner_content">
          <h2>world of kerovit</h2>
          <p>Featuring great strength, durability, and a higher-quality finish, Kerovit today stands as a definitive expression of modern lifestyles, exquisitely designed to match the desires of the new India.</p>            
          <Link to="/locate-our-store"><button className="locate">locate a store</button></Link>
        </div>
        <div className="inside_banner_image">
          <img src={firstBannerImg} alt="" className="inside_banner_img" loading="lazy"/>          
        </div>
      </div>
      <div className="first_banner mobile_view">
        <div className="inside_banner_content">
          <h2>world of kerovit</h2>
          <p>Featuring great strength, durability, and a higher-quality finish, Kerovit today stands as a definitive expression of modern lifestyles, exquisitely designed to match the desires of the new India.</p>
          <Link to="/locate-our-store"><button className="locate">locate a store</button></Link>
        </div>
      </div>

      <div className="second_banner mobile_view">
        <div className="inside_banner_content">
          <h2>the catalogue</h2>
          <p>Browse our latest catalogue and discover the perfect bathroom solutions for your home.</p>
          {/* <button className="locate">locate a store</button> */}
        </div>
        <div className="catalogue">
          <a href="#">General product catalogue</a>
          <a href="#">General product catalogue</a>
        </div>
      </div>
      <div className="second_banner desktop_view">
        <div className="inside_banner_content">
          <h2>the catalogue</h2>
          <p>Browse our latest catalogue and discover the perfect bathroom solutions for your home.</p>            
        </div>
        <div className="catalogue">
          <div className="the_catelogue">              
            <img src={cat1} alt=""  loading="lazy"/>
            <a href="#">General product catalogue</a>
          </div>
          <div className="the_catelogue">
            <img src={cat2} alt=""  loading="lazy"/>
            <a href="#">General product catalogue</a>
          </div>
        </div>
      </div>

      <div className="home_aboutus desktop_view">
        <video src="/videos/avoutus.mp4" muted loop autoPlay></video>
        <div className="inside_banner_content">
          {/* <h2>about us</h2> */}          
          <img src="aboutus_heading.png" alt="" className="aboutus_heading" loading="lazy"/>                    
          <p>Kerovit, a distinguished brand from the house of Kajaria, was introduced to transform modern bathroom spaces by creating value that exceeds customers' expectations.</p>
          <Link to="/about">
            <button className="read_more">
              read more 
            </button>
            </Link>
        </div>
      </div>

      <div className="home_aboutus mobile_view">
        <video src="/videos/avoutus.mp4" muted loop autoPlay></video>
        <div className="inside_banner_content">
          {/* <h2>about us</h2> */}
          <img src="aboutus_heading.png" alt="" className="aboutus_heading" loading="lazy"/>
          <p>Kerovit, a distinguished brand from the house of Kajaria, was introduced to transform modern bathroom spaces by creating value that exceeds customers' expectations.</p>
          <Link to="/about">
            <button className="read_more">
              read more 
            </button>
            </Link>
        </div>
      </div>

      <div className="home_blog">
        <div className="home_blog_top_heading">
          <img src="home_blog_heading.png" alt="" className="home_blog_heading" loading="lazy"/>
          <p>Explore our Blog and witness a world where desires take shape.</p>
        </div>
        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => (swiperRefBlog.current = swiper)} // Assign Swiper instance
        >
          {blogPosts.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div className="inside text-left">
                <img src={blog.img} alt={blog.title} className="swiperImg"  loading="lazy"/>
                <h3>{blog.title}</h3>
                <p>{blog.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="blog-swiper-button view_on_desktop">
          <button type="button" className="swip_button" onClick={handlePrevBlogSlide}><FaChevronLeft className="right_arrow swip_button_icon"/></button>
          <button type="button" className="swip_button" onClick={handleNextBlogSlide}><FaChevronRight className="right_arrow swip_button_icon"/></button>
        </div>
        <button type="button" className="view_on_mobile" onClick={handleNextBlogSlide}>Swipe<BsArrowRight className="right_arrow "/></button>
      </div>

      <div className="home_contact">
        <div className="inside_banner_content">
          <div className="contact_header"><span>submit</span> <h2>your query</h2></div>
          <form className="contact_form">
            <input type="text" placeholder="Name  |" />
            <input type="email" placeholder="Email  |" />
            <input type="tel" placeholder="Phone  |" />
            <input type="text" placeholder="City/State  |" />
            <input type="text" placeholder="Message  |" />

            {/* <textarea placeholder="Message"></textarea> */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </main>
  )
}
