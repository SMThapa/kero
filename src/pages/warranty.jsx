import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/warranty.scss";

import { FaWhatsapp } from "react-icons/fa";

const Warranty = () => {
    return (
        <>
            <Navbar />
            <main className="warranty">
                <div className="banner">
                    <div className="banner_content">
                        <h2 className="banner_title">Warranty</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid, facilis! Eum dolorum sapiente officia</p>
                    </div>
                </div>

                <div className="warranty-form-container">
            <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy
                nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                Ut wisi enim ad minim veniam, quis
            </p>

            <button className="activate-btn">To Activate Warranty</button>

            <form className="warranty-form">
                <label>
                    Name*
                    <input type="text" name="name" />
                </label>

                <label>
                    Mobile*
                    <input type="text" name="mobile" />
                </label>

                <label>
                    Address*
                    <input type="text" name="address" />
                </label>

                <label>
                    Select State*
                    <select name="state">
                        <option value="">Select State</option>
                        {/* Add state options */}
                    </select>
                </label>

                <label>
                    Select City*
                    <select name="city">
                        <option value="">Select City</option>
                        {/* Add city options */}
                    </select>
                </label>

                <label>
                    District
                    <select name="district">
                        <option value="">Select District</option>
                        {/* Add district options */}
                    </select>
                </label>

                <label>
                    Pincode
                    <input type="text" name="pincode" />
                </label>

                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>


            </main>
            <Footer />
        </>
    );
};

export default Warranty;