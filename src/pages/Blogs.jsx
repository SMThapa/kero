import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

  const blogPosts = [
    { id: 1, img: "/blogs/blog3.png", title: "Traditional vs. Wall-Mounted Bathroom Faucets: A Comparative Guide", desc: "Bathroom faucets play a pivotal role in the overall design and functionality of your bathroom." },
    { id: 2, img: "blogs/blogs2.jpeg", title: "Choosing the Right Faucet Finish for Your Bathroom – A Guide to Chrome, Gold, and Matte Black", desc: "Transforming your bathroom into a stylish and functional space starts with choosing the right faucet finish. Whether you want the timeless appeal of chrome" },
    { id: 3, img: "blogs/blogs4.jpeg",title: "Luxurious Gold: How Gold Finish Faucets Can Transform Your Bathroom", desc: "The timeless charm of gold has symbolized wealth, power, and luxury throughout history. In interior design, gold evokes a sense of sophistication."  },
    { id: 4, img: "blogs/blogs5.png", title: "Top 3 Kitchen Faucets Types That Deliver Excellence, Performance, Durability, and Style", desc: "A kitchen faucet is more than just a functional fixture; it is a central element that enhances the aesthetics and efficiency of your kitchen." },
    { id: 5, img: "blogs/blogs6.jpg", title: "Drips, Leaks, and Sputters: Easy Fixes for Common Faucet Problems", desc: "Faucets are essential fixtures in any home, providing access to clean water for cooking, cleaning, and personal hygiene."},
    { id: 6, img: "blogs/blogs7.jpeg", title: "Small Space and Big Style: Space-Saving Bathroom Storage Solutions – Vanities vs. Cabinets", desc: "FWhen it comes to bathroom storage, maximising space is essential, especially when it pertains to a smaller bathroom space."},
  ];


    const blogPopularPosts = [
    { id: 1, img: "/blogs/blogs8.png", title: "The Benefits of Upgrading to a One Piece Toilet in Your Home", desc: "Bathroom faucets play a pivotal role in the overall design and functionality of your bathroom." },
    { id: 2, img: "blogs/blogs9.png", title: "10 Reasons Why Sensor Faucets Are the Future of Modern Bathrooms", desc: "Transforming your bathroom into a stylish and functional space starts with choosing the right faucet finish. Whether you want the timeless appeal of chrome" },
    { id: 3, img: "blogs/blogs4.jpeg",title: "Luxury Bathroom Accessories Your Guests Will Want for Themselves", desc: "The timeless charm of gold has symbolized wealth, power, and luxury throughout history. In interior design, gold evokes a sense of sophistication."  },
    { id: 4, img: "blogs/blogs5.png", title: "Top 3 Kitchen Faucets Types That Deliver Excellence, Performance, Durability, and Style", desc: "A kitchen faucet is more than just a functional fixture; it is a central element that enhances the aesthetics and efficiency of your kitchen." },
    { id: 5, img: "blogs/blogs6.jpg", title: "Drips, Leaks, and Sputters: Easy Fixes for Common Faucet Problems", desc: "Faucets are essential fixtures in any home, providing access to clean water for cooking, cleaning, and personal hygiene."},
    { id: 6, img: "blogs/blogs7.jpeg", title: "Small Space and Big Style: Space-Saving Bathroom Storage Solutions – Vanities vs. Cabinets", desc: "FWhen it comes to bathroom storage, maximising space is essential, especially when it pertains to a smaller bathroom space."},
  ];


export const Blogs = () => {

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
        <Link to = "/blog/latestPost">
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
            {blogPopularPosts.map((blog) => (
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
        <Link to = "/blog/latestPost">

        <button type="button">
            Show more <BsArrowRight className="right_arrow" />
        </button>
        </Link>


        </div>
    </main>
  )
}
