import React, { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import subMenuIcon from "../../public/icons/down.png"; // Import your submenu icon
import { GiHamburgerMenu } from "react-icons/gi";

import { CiLocationOn } from "react-icons/ci";
import { IoIosSearch } from "react-icons/io";


const productSubMenu = [
  { img: "/icons/faucet.png", name: "Faucet", link: "/product/faucet" },
  { img: "/icons/shower.png", name: "Shower", link: "/product/shower" },
  { img: "/icons/basin.png", name: "Basin", link: "/product/basin" },
  { img: "/icons/toilet.png", name: "Toilet", link: "/product/toilet" },
  { img: "/icons/bathroom_furniture.png", name: "Bathroom Furniture", link: "/product/bathroomFurniture" },
  { img: "/icons/accessories.png", name: "Accessories", link: "/product/accessories" },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [openMenuList, setOpenMenuList] = useState(false);

  const {pathname} = useLocation();
  

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Toggle submenus
  const toggleSubmenu = (index, e) => {
    e.stopPropagation();
    if(activeIndex === index) {
      setActiveIndex(null);
      setOpenMenuList(false);
    }else{
      setActiveIndex(index);
      setOpenMenuList(true); 
    }
  };

  // Detect scrolling for background effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const searchInputRef = useRef(null);
  //handleling search input
  const [openSearch, setOpenSearch] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInputChange = (e) => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };
  const handleOpenSearch = () => {
    console.log("cleicked")
    setOpenSearch(!openSearch);
    setSearchInput("");
  }
  const handleCloseSearch = () => {
    setOpenSearch(false);
    setSearchInput("");
  }

  useEffect(()=>{
    setIsOpen(false)
    setOpenMenuList(false)

    setActiveIndex(null)
    // const [activeIndex, setActiveIndex] = useState(null);
    // const [scrolled, setScrolled] = useState(false);    
  }, [pathname])


  return (
    <div className="onlyNav">
      {isOpen && <div className="nav-overlay active" onClick={toggleMenu}></div>}      
      <nav id="navbarMenu" className={`${scrolled ? "scrolled" : ""} ${openMenuList ? "scrolled" : ""} ${openSearch ? "scrolled" : ""}`}>         
        <div className="nav-contents">
          <div className="nav-left">
            <div className="toggleMenu" >
              <GiHamburgerMenu onClick={toggleMenu}/>
              <NavLink to="/">
              <img
                  src="/kerovit_logo.png"
                alt="Logo"
                className="kerovit_logo"
                loading="lazy"
              />
              </NavLink>
            </div>
          </div>
          <div className="the_logo">
            <NavLink to="/">
              <img
                  src="/kerovit_logo.png"
                  alt="Logo"
                  className="kerovit_logo"
                  loading="lazy"
                />
            </NavLink>          
          </div>
          
          <div className="nav-right">
            <NavLink to="/locate-our-store">              
              <CiLocationOn className="menu_location" />
              
            </NavLink>            

            <IoIosSearch onClick={handleOpenSearch} className="menu_search desktop"/>
          </div>

          <div className={`search-desktop ${openSearch ? "open" : ""}`}>
            <div className="search-desktop-container">
              <input type="text" ref={searchInputRef} placeholder="Search" onChange={(e)=> handleSearchInputChange(e)} className="search-desktop-input" />
              {/* <img src="menu_search.png" alt="" className="menu_search" /> */}
              <IoClose className="close_icon" onClick={handleCloseSearch}/>              
            </div>
          </div>
          
          <ul className={isOpen ? "open" : ""}>
            {/* Products Submenu */}
            <li className={`submenu ${activeIndex === 0 ? "active openSub" : ""}`} onClick={(e) => toggleSubmenu(0, e)}>
              <NavLink to="#">
                Products <span className="submenu-icon">
                  <img src={subMenuIcon} alt="" loading="lazy"/>
                </span>
                <div className="submenu-button"></div>
              </NavLink>
              <ul className="dropdown" style={{ display: activeIndex === 0 ? "block" : "none" }}>
                {productSubMenu.map((item, index) => (
                  <li key={index} onClick={(e) => e.stopPropagation()}>
                    <img src={item.img} alt={item.name} loading="lazy"/>
                    <NavLink to={item.link}>{item.name}</NavLink>
                  </li>
                ))}
              </ul>
            </li>

            <li><NavLink to="/catelogue"><img src= "/icons/catalogue.png" alt="catalogue" className="hideInDesktop" loading="lazy" />E-Catalogue</NavLink></li>
            <li><NavLink to="/locate-our-store"><img src= "/icons/wheretobuy.png" alt="wheretobuy" className="hideInDesktop" loading="lazy" />Where to Buy</NavLink></li>

            <li className={`submenu ${activeIndex === 1 ? "active openSub" : ""}`} onClick={(e) => toggleSubmenu(1, e)}>
              <NavLink to="#">
                More <span className="submenu-icon">
                  <img src={subMenuIcon} alt="" loading="lazy"/>
                </span>
                <div className="submenu-button"></div>
              </NavLink>
              <ul className="dropdown" style={{ display: activeIndex === 1 ? "block" : "none" }}>
                {[
                  // { img: "/icons/whatsnew.png", label: "What's New", link: "#" },
                  { img: "/icons/career.png", label: "Career", link: "/career" },
                  { img: "/icons/resources.png", label: "Resources", link: "/blog" }
                ].map((item, index) => (
                  <li key={index} onClick={(e) => e.stopPropagation()}>
                    <img src={item.img} alt={item.name} className="moreIcon" loading="lazy"/>
                    <NavLink to={item.link}>{item.label}</NavLink>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
