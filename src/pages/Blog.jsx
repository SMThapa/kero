import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/blog.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";



const BlogPage = () => {
  const blogPosts = [
    { id: 1, img: "/blog3.png", title: "Traditional vs. Wall-Mounted Bathroom Faucets: A Comparative Guide", desc: "Lorem ipsum, dolor sit" },
    { id: 2, img: "/blog3.png", title: "Choosing the Right Faucet Finish for Your Bathroom – A Guide to Chrome, Gold, and Matte Black", desc: "Lorem ipsum, dolor sit" },
    { id: 3, img: "/blog3.png", title: "Blog 3", desc: "Lorem ipsum, dolor sit" },
    { id: 4, img: "/blog3.png", title: "Blog 4", desc: "Lorem ipsum, dolor sit" },
    { id: 5, img: "/blog3.png", title: "Blog 5", desc: "Lorem ipsum, dolor sit" },
  ];

  const swiperRefBlog1 = useRef(null);
  const swiperRefBlog2 = useRef(null);

  const handleNextBlogSlide1 = () => {
    if (swiperRefBlog1.current) {
      swiperRefBlog1.current.slideNext();
    }
  };

  
  const handlePrevBlogSlide1 = () => {
    if (swiperRefBlog1.current) {
      swiperRefBlog1.current.slidePrev();
    }
  };


  const handleNextBlogSlide2 = () => {
    if (swiperRefBlog2.current) {
      swiperRefBlog2.current.slideNext();
    }
  };

  const handlePrevBlogSlide2 = () => {
    if (swiperRefBlog2.current) {
      swiperRefBlog2.current.slidePrev();
    }
  };



  return (
    <>
      <Navbar />

      <main className="blogPage">
        <div className="banner">
          <div className="black-filter"></div>
          <div className="banner_content">
            <div className="text">

            <h2 className="banner_title">Blog</h2>
            <p>Designed with skillfull unification of creativity and engineering. Kerovit has combined un-matched functional expertise with a promise of excellence giving the customers an alluring experience they desire!</p>
            </div>
          </div>
        </div>

        <div className="latest_post">
          <div className="content">

          <h2 className="blog_title">Latest Posts</h2>
          <p>Explore our Blog and witness a world where desires take shape.</p>
          </div>
          <div className="swiper_action_button view_on_desktop">
                      <button type="button" className="swip_button" onClick={handleNextBlogSlide1}><FaChevronRight className="right_arrow swip_button_icon"/></button>            
                      <button type="button" className="swip_button" onClick={handlePrevBlogSlide1}><FaChevronLeft className="right_arrow swip_button_icon"/></button>
                    </div> 
          <Swiper
            modules={[Pagination]}
            spaceBetween={25}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => (swiperRefBlog1.current = swiper)}
          >
            {blogPosts.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="inside text-left">
                  <img src={blog.img} alt={blog.title} className="swiperImg" />
                  <h3>{blog.title}</h3>
                  <p>{blog.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <button type="button" onClick={handleNextBlogSlide1}>
            Swipe <BsArrowRight className="right_arrow" />
          </button> */}
          <Link to = "/latestPost">
          <button type="button">
            Show more <BsArrowRight className="right_arrow" />
          </button> 
          </Link>
          
        </div>

        <div className="latest_post">
          <h2 className="blog_title">Popular Posts</h2>
          <p>Explore our Blog and witness a world where desires take shape.</p>
          <div className="swiper_action_button view_on_desktop">
                      <button type="button" className="swip_button" onClick={handleNextBlogSlide2}><FaChevronRight className="right_arrow swip_button_icon"/></button>            
                      <button type="button" className="swip_button" onClick={handlePrevBlogSlide2}><FaChevronLeft className="right_arrow swip_button_icon"/></button>
                    </div> 

          <Swiper
            modules={[Pagination]}
            spaceBetween={25}
            slidesPerView={1}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            onSwiper={(swiper) => (swiperRefBlog2.current = swiper)}
          >
            {blogPosts.map((blog) => (
              <SwiperSlide key={blog.id}>
                <div className="inside text-left">
                  <img src={blog.img} alt={blog.title} className="swiperImg" />
                  <h3>{blog.title}</h3>
                  <p>{blog.desc}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <button type="button" onClick={handleNextBlogSlide2}>
            Swipe <BsArrowRight className="right_arrow" />
          </button> */}
          <Link to = "/latestPost">

          <button type="button">
            Show more <BsArrowRight className="right_arrow" />
          </button>
          </Link>


        </div>
      </main>

      <Footer />
    </>
  );
};

export default BlogPage;
