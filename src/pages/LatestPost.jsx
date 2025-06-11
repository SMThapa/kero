import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IoFilter } from "react-icons/io5";

const products = [
  { id: 1, img: "/product/Collection  & Product pages-27.png", title: "Product 1", date: 15, month: "March", year: 2024 },
  { id: 2, img: "/product/Collection  & Product pages-27.png", title: "Product 2", date: 3, month: "January", year: 2023 },
  { id: 3, img: "/product/Collection  & Product pages-27.png", title: "Product 3", date: 22, month: "May", year: 2024 },
  { id: 4, img: "/product/Collection  & Product pages-27.png", title: "Product 4", date: 8, month: "March", year: 2022 },
  { id: 5, img: "/product/Collection  & Product pages-27.png", title: "Product 5", date: 10, month: "July", year: 2025 },
  { id: 6, img: "/product/Collection  & Product pages-27.png", title: "Product 6", date: 1, month: "March", year: 2024 },
  { id: 7, img: "/product/Collection  & Product pages-27.png", title: "Product 7", date: 12, month: "April", year: 2023 },
  { id: 8, img: "/product/Collection  & Product pages-27.png", title: "Product 8", date: 5, month: "February", year: 2022 },
];


export const LatestPost = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openSections, setOpenSections] = useState({
      date: false,
      month: false,
      year: false,
  });

  const [selectedFilters, setSelectedFilters] = useState({
      date: null,
      month: null,
      year: null,
  });

  const filterRef = useRef(null);

  useEffect(() => {
      const handleClickOutside = (event) => {
          if (filterRef.current && !filterRef.current.contains(event.target)) {
              setIsFilterOpen(false);
              setOpenSections({ date: false, month: false, year: false });
          }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, []);

  const toggleSection = (section) => {
      setOpenSections((prev) => ({
          ...prev,
          [section]: !prev[section],
      }));
  };

  const handleFilterSelection = (type, value) => {
      setSelectedFilters((prev) => ({
          ...prev,
          [type]: value,
      }));
  };

  const clearFilters = () => {
      setSelectedFilters({ date: null, month: null, year: null });
  };

  // Filter products based on selected filters
  const filteredProducts = products.filter((product) => {
      return (
          (!selectedFilters.date || product.date === selectedFilters.date) &&
          (!selectedFilters.month || product.month === selectedFilters.month) &&
          (!selectedFilters.year || product.year === selectedFilters.year)
      );
  });

  return (
      <main className={`latestPost ${isFilterOpen ? "blur-background" : ""}`}>          
        <div className="latestPost_contents">
            <div className="content">
                <h2 className="title">Latest Posts</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, facilis! Eum dolorum sapiente officia ipsum in consectetur impedit possimus, modi, nisi quas aut voluptate tempore!</p>
            </div>

            {/* Filter Button & Dropdown */}
            <div className="filterContainer" ref={filterRef}>
                <div className="filterTop" onClick={() => setIsFilterOpen(!isFilterOpen)}>
                    <IoFilter className="filterIcon" />
                    <span className="selected-date">
                        {selectedFilters.date || selectedFilters.month || selectedFilters.year
                            ? `${selectedFilters.date || ""} ${selectedFilters.month || ""} ${selectedFilters.year || ""}`.trim()
                            : "Select Date"}
                    </span>
                </div>

                {isFilterOpen && (
                    <div className="filterDropdown">
                        <div className="filterSection">
                            <h4 onClick={() => toggleSection("date")}>
                                Date <span>{openSections.date ? "−" : "+"}</span>
                            </h4>
                            {openSections.date && (
                                <ul>
                                    {[...Array(31)].map((_, i) => (
                                        <li key={i + 1} onClick={() => handleFilterSelection("date", i + 1)}>
                                            {i + 1}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>                                

                        <div className="filterSection">
                            <h4 onClick={() => toggleSection("month")}>
                                Month <span>{openSections.month ? "−" : "+"}</span>
                            </h4>
                            {openSections.month && (
                                <ul>
                                    {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map((month, index) => (
                                        <li key={index} onClick={() => handleFilterSelection("month", month)}>
                                            {month}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        <div className="filterSection">
                            <h4 onClick={() => toggleSection("year")}>
                                Year <span>{openSections.year ? "−" : "+"}</span>
                            </h4>
                            {openSections.year && (
                                <ul>
                                    {[2021, 2022, 2023, 2024, 2025].map((year, index) => (
                                        <li key={index} onClick={() => handleFilterSelection("year", year)}>
                                            {year}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>

                        {/* Clear Filters Button */}
                        <button className="clearFilterBtn" onClick={clearFilters}>
                            Clear Filters
                        </button>
                    </div>
                )}
            </div>

            <div className="container">
                <div className="row">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <div key={product.id} className="col-6 mb-4 text-center">
                                <img
                                    src={product.img}
                                    alt={product.title}
                                    className="img-fluid product-img"
                                />
                                <p className="product-title mt-2">{product.title}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-center w-100">No posts found for the selected date.</p>
                    )}
                </div>
            </div>
        </div>          
      </main>
  );
};