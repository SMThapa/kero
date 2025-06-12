import { MdOutlineEmail } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoMdDownload } from "react-icons/io";

export const CustomerCare = () => {
  return (
    <div className="customerCare">
      <div className="banner">
        <img src="/customer.jpg" alt="" />
      </div>

      <div className="below-banner">
        <p className="customer-description">
          Great design deserves great support. Please reach out to us for
          service questions, product info, or any help you need, so that we
          can deliver the support you desire.
        </p>

        <div className="company-info">
          <div className="section">
            <div className="section-title">Email <MdOutlineEmail /></div>

            <div className="title">Service Query</div>
            <a href="mailto:customercare@kerovit.com">customercare@kerovit.com</a>

            <div className="title">info</div>
            <a href="mailto:info@kerovit.com">info@kerovit.com</a>
            
          </div>
          <div className="section">
            <div className="section-title">customer care <RiCustomerService2Fill /></div>

            <div className="title">call</div>
            <p>+91-11-26946409</p>

            <div className="title">Tollfree Number</div>
            <p>1800 570 7800</p>

            <div className="title">Whats App Chat</div>
            <p>9289077800</p>
          </div>
        </div>
        <div className="app-section">
          <section>
            <div className="section-title">Download Service App <IoMdDownload /></div>
            <div className="title">Service Query</div>
          </section>
          <section>
            <img src="/customer.png" alt="" />
          </section>
        </div>
        <div className="form-header">
          <div className="form-title">Enquiry Form</div>
          <div className="form-description">
            Have a question or request? Just fill in the
            details below, and we’ll make sure the right
            team connects with you soon.</div>
        </div>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name*</label>
            <input type="text" id="name" placeholder="" required />
          </div>
          <div className="form-group">
            <label htmlFor="mobile">Mobile*</label>
            <input type="tel" id="mobile" placeholder="" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email*</label>
            <input type="email" id="email" placeholder="" required />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address*</label>
            <input type="text" id="address" placeholder="" required />
          </div>
          <div className="form-group">
            <label htmlFor="city">State*</label>
            <select id="city" required>
                <option value="">Select State</option>
                <option value="andhra-pradesh">Andhra Pradesh</option>
                <option value="arunachal-pradesh">Arunachal Pradesh</option>
                <option value="assam">Assam</option>
                <option value="bihar">Bihar</option>
                <option value="chhattisgarh">Chhattisgarh</option>
                <option value="goa">Goa</option>
                <option value="gujarat">Gujarat</option>
                <option value="haryana">Haryana</option>
                <option value="himachal-pradesh">Himachal Pradesh</option>
                <option value="jharkhand">Jharkhand</option>
                <option value="karnataka">Karnataka</option>
                <option value="kerala">Kerala</option>
                <option value="madhya-pradesh">Madhya Pradesh</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="manipur">Manipur</option>
                <option value="meghalaya">Meghalaya</option>
                <option value="mizoram">Mizoram</option>
                <option value="nagaland">Nagaland</option>
                <option value="odisha">Odisha</option>
                <option value="punjab">Punjab</option>
                <option value="rajasthan">Rajasthan</option>
                <option value="sikkim">Sikkim</option>
                <option value="tamil-nadu">Tamil Nadu</option>
                <option value="telangana">Telangana</option>
                <option value="tripura">Tripura</option>
                <option value="uttar-pradesh">Uttar Pradesh</option>
                <option value="uttarakhand">Uttarakhand</option>
                <option value="west-bengal">West Bengal</option>


                <option value="andaman-nicobar">Andaman and Nicobar Islands</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="dadra-nagar-haveli-daman-diu">Dadra & Nagar Haveli and Daman & Diu</option>
                <option value="delhi">Delhi</option>
                <option value="jammu-kashmir">Jammu and Kashmir</option>
                <option value="ladakh">Ladakh</option>
                <option value="lakshadweep">Lakshadweep</option>
                <option value="puducherry">Puducherry</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="city">City*</label>
            <input type="text" id="city" placeholder="" required />
          </div>
          <div className="form-group">
            <label htmlFor="city">District*</label>
            <input type="text" id="city" placeholder="" required />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode*</label>
            <input type="number" id="pincode" placeholder="" required />
          </div>

          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>
    </div>
  )
}
