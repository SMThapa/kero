import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,  Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaChevronRight } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";

const manufPlant = [
  { id: 1, img: "/aboutus/faucet_plant.png", name: "Kerovit Faucets", description: "Kerovit Faucets are developed at our state-of-the-art manufacturing unit in Gailpur, Rajasthan. Spread over 2 Lac sq. ft., and boasting the latest advanced machinery, the plant is poised to manufacture over 1.4 million pieces a year." },
  { id: 2, img: "/aboutus/faucet_plant2.png", name: "Kerovit Sanitaryware", description: "Kerovit sanitaryware is manufactured at Morbi, Gujarat, with international standards of manufacturing processes including Mould Making, Shuttle Kiln, Tunnel Kiln, and Glazing Pressure Dye Casting. The entire process is ISI-approved and boasts an annual manufacturing capacity of over 1 million pieces. Our second plant, Kerovit Global Pvt. Ltd., Morbi, Gujarat, is the largest sanitaryware plant in India. Spread over 6 lacs sq. mt., KGPL adheres to international standards, features Cutting-edge R&D, houses advanced machinery and is operated by a team of skilled professionals to provide exceptional quality products." },
  // { id: 3, img: "/aboutus/faucet_plant.png", name: "Basin", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat id laudantium quos beatae animi eos hic accusantium libero omnis sunt, ipsum maiores alias illum amet sequi vitae obcaecati architecto suscipit." },
  // { id: 4, img: "/aboutus/faucet_plant.png", name: "Toilet", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat id laudantium quos beatae animi eos hic accusantium libero omnis sunt, ipsum maiores alias illum amet sequi vitae obcaecati architecto suscipit." },
  // { id: 5, img: "/aboutus/faucet_plant.png", name: "plant 5", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat id laudantium quos beatae animi eos hic accusantium libero omnis sunt, ipsum maiores alias illum amet sequi vitae obcaecati architecto suscipit." },
  // { id: 6, img: "/aboutus/faucet_plant.png", name: "plant 6", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat id laudantium quos beatae animi eos hic accusantium libero omnis sunt, ipsum maiores alias illum amet sequi vitae obcaecati architecto suscipit." },
];
const numberOfSlides = manufPlant.length > 4 ? 4 : manufPlant.length;

const certificates = [
  { id: 1, img: "aboutus/certificate1.png" },
  { id: 2, img: "aboutus/certificate2.png" },
  { id: 3, img: "aboutus/certificate3.png" },
  { id: 4, img: "aboutus/certificate4.png" },
  { id: 5, img: "aboutus/certificate1.png" },
  { id: 6, img: "aboutus/certificate2.png" },
  { id: 7, img: "aboutus/certificate3.png" },
  { id: 8, img: "aboutus/certificate4.png" },
]

export const About = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [swiperCertificateInstance, setSwiperCertificateInstance] = useState(null);

  const [readMoreOne, setReadMoreOne] = useState(false);
  const [readMoreTwo, setReadMoreTwo] = useState(false);
  const handleNextSlide = () => {
    if (swiperInstance) {
      swiperInstance.slideNext();
    }
  };

  const handleNextCertificateSlide = () => {
    if (swiperCertificateInstance) {
      swiperCertificateInstance.slideNext();
    }
  };
  const handlePrevCertificateSlide = () => {
    if (swiperCertificateInstance) {
      swiperCertificateInstance.slidePrev();
    }
  };


  return (
    <main className="aboutus_main">      
      <div className="homebanner">
        <video className="aboutus_video" src="/videos/Plant video_12 mp4.mp4" autoPlay loop muted/>
        <div className="bannerText">
          <div className="banner-title-center">
            <h2>bathrooms</h2>
            <span className="h2_second">
              you <h2>desire</h2>
            </span>
          </div>
          <div className="bannerdescp">
            <img src="home page-08.png" alt="" className="line_image" />
            <p>
              Kerovit's distinguished range of products encircle your soul into a sensational experience. made with utmost precision, we bring wellness into your home with great style and panache.
            </p>
          </div>
        </div>
        <div className="whatsapp-icon">
          <FaWhatsapp  />
        </div>        
      </div>

      <div className="about-page-contents">
        <div className="belowbanner">
          {/* <h2>who we are</h2> */}
          <div className="belowBannerText">
            <h2>who</h2>
            <span className="h2_second">
              <p>we</p> <h2>are</h2>
            </span>
          </div>
          <p className="p1" >
            At Kerovit, we believe in redefining how people perceive and use their bathrooms by blending innovation, design, and technology to create spaces that promote hygiene, luxury and sustainability.
          </p>
          <hr />
          <h4>Proudly Made in India</h4>
          <p className={`p2 ${readMoreOne ? '' : 'one_close'}`} >Kerovit is a brand Made in India. Our journey is powered by a dedicated workforce and a strong presence across the country:</p>
          <div className={readMoreOne ? '' : 'one_close_content'}>
            <ul>
              <li>
              <p>15 Display Centers/Offices</p>
              </li>
              <li>
                <p>330 Distributors & Premium Dealers</p>
              </li>
              <li>
                <p>216 Exclusive Showrooms</p>
              </li>
            </ul>

            <p className="p3">
            Our state-of-the-art manufacturing plant in Gailpur, Rajasthan, spans over 2 lakh sq. ft., with an annual capacity of 1 million faucets. Crafted with solid metal for superior strength and durability, our faucets exude excellence throughout all its designs. <br/><br/>

            Meanwhile, our sanitaryware unit in Morbi, Gujarat, upholds international manufacturing standards with meticulous processes. Certified by ISI, this facility has an impressive annual capacity of 7.5 lakh pieces. <br/><br/>

            Adding golden feathers to our relentless pursuit of excellence, we established the Kerovit Global Private Limited (KGPL), our second sanitaryware plant, in Morbi, Gujarat. Spanning over 6 lakh sq. meters, this cutting-edge facility is designed to shape the future of the Indian sanitaryware industry.<br/><br/>

            With a focus on precision engineering, automation, and sustainability, complemented by a talented pool of skilled technicians, the KGPL plant is a powerhouse of innovation, ensuring unmatched quality, reliability and efficiency.<br/><br/>

            Driven By Ethos of  Sustainability
            At Kerovit, we believe in striding towards progress by keeping the best interest of both people and the planet. Our Green Innovation range is designed to conserve water and energy without compromising performance. <br/><br/>

            We also adhere to the Zero Liquid Discharge (ZLD) principle, ensuring that our plants release zero liquid effluent into the environment. By embracing advanced wastewater management, we are actively contributing to water conservation and a sustainable future.
            </p>
          </div>
          <button className="read_more" onClick={()=> setReadMoreOne(!readMoreOne)}>{readMoreOne ? "close":"read more"}</button>
        </div>

        <div className="directorMessage">
          <img src="/aboutus/director.png" alt="" />
          <div className="belowImageContent">
            <p className={readMoreTwo ? "": "two_close"}>At Kerovit, we strive to revolutionize India’s bath and sanitaryware industry by offering luxury, style, and quality that go beyond expectations.</p>

            <div className={readMoreTwo ? "":"two_close_content"}>
              <p>With Kerovit, you’re not just investing in products; you’re embracing a lifestyle where design meets functionality. From our meticulously crafted faucets and sanitaryware to our Aurum Collection, which brings you premium coloured faucets using PVD (Physical Vapor Deposition) technology for a flawless finish and lasting durability, every piece is a work of art.</p>

              <p>Kerovit is where performance, modern aesthetics, and inspiring design come together to create bathrooms that don’t just serve a purpose but make a statement. Every detail is curated to transform your space into an expression of beauty, luxury, and elevated living.</p>


              <p>We are here to create the Bathrooms You Desire.</p>

              <div className="director_slogan">
                <b>THE NEW DAWN OF INNOVATION THE RISE OF PERFECTION</b><br />
                <b>Mr. Rishi Kajaria</b><br/> 
                <b>Managing Director</b><br/>
              </div>
            </div>

            <button className="read_more" onClick={()=>setReadMoreTwo(!readMoreTwo)}>{readMoreTwo ? 'close' : 'read more'}</button>
          </div>
        </div>

        <div className="manufacturingPlant">
          <h2 className="mpTitle">manufacturing plant</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{ nextEl: ".next-btn", prevEl: ".prev-btn" }}
            loop
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: numberOfSlides },
            }}
            onSwiper={setSwiperInstance}
          >
            {manufPlant.map((plant) => (
              <SwiperSlide key={plant.id}>
                <div className="inside">
                  <img src={plant.img} alt={plant.name} />
                  <h2>{plant.name}</h2>
                  <p>{plant.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>


          {/* <button className="prev-btn"><MdKeyboardArrowLeft /></button>
          <button className="next-btn"><MdKeyboardArrowRight /></button> */}


          {/* <button type="button" className="swipeButton" onClick={handleNextSlide}><FaChevronRight className="right_arrow disableOnMobile" /><span className="disableOnDesktop">Swipe < BsArrowRight  className="right_arrow" /></span></button> */}
        </div>

        <div className="certifications">
          <h2 className="mpTitle">Certifications</h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={4}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            
            navigation={{ nextEl: ".next-btn-cert", prevEl: ".prev-btn-cert" }}
            breakpoints={{
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            onSwiper={setSwiperCertificateInstance}            
          >
            {certificates.map((certificate) => (
              <SwiperSlide key={certificate.id}>
                <div className="inside">
                  <img src={certificate.img} alt="Certificate" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* <button className="prev-btn-cert"><MdKeyboardArrowLeft /></button>
          <button className="next-btn-cert"><MdKeyboardArrowRight /></button> */}

          <div className="swiper-button-2 disableOnMobile">
            <button type="button" className="swipeButton dissable_button" onClick={handleNextCertificateSlide}><FaChevronRight className="right_arrow" /></button>
            <button type="button" className="swipeButton" onClick={handlePrevCertificateSlide}><FaChevronLeft className="right_arrow" /></button>
          </div>
        </div>
      </div>      
    </main>
  );
};
