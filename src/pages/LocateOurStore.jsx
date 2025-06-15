import { FaSearch } from "react-icons/fa";
import StoreCard from "../components/storeCard";
import { useEffect, useState } from "react";
import axios from "axios";

import { MdLocationPin } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export const LocateOurStore = () => {

    const [allType, setAllType] = useState();
    const [studioType, setStudioType] = useState([])
    const [worldType, setWorldType] = useState([]);
    const [experienceType, setExperienceType] = useState([])

    const [search, setSearch] = useState('') 
    const [state, setState] = useState([])
    const [city, setCity] = useState([])

    const [selectedState, setSelectedState] = useState("");
    const [selectedCity, setSelectedCity] = useState("");
    const [newList, setNewList] = useState([])
    const [message, setMessage] = useState('');
    const [searchErrorm, setSerarchError] = useState("");

    const storeUrl = import.meta.env.VITE_API_STORE;
    useEffect(()=>{
        const fetchData = async () => {
            try{
                const res = await axios.get(storeUrl)                
                const theData = res.data.data;                
                const studio = theData.filter((obj)=> obj.dealertype == 'Studio');
                const world = theData.filter((obj)=> obj.dealertype == "KerovitWorld")
                const experience = theData.filter((obj)=> obj.dealertype == "Experience Center")

                const onlystate = [...new Set(theData.map(obj => obj.state))];                
                setState(onlystate.sort())
                
                setAllType(theData)
                setStudioType(studio);
                setWorldType(world);
                setExperienceType(experience);                

            }catch(err){
                console.log(err)
            }
        }

        fetchData();
    }, [])   
        

    function filterState(state){
        return allType.filter(obj => obj.state == state)        
    }

    const handleFindCities = (state) =>{
        setSelectedState(state);
        const newData = filterState(state);
        const cityFilter = [...new Set(newData.map(obj => obj.city))];     
        setCity(cityFilter.sort())                  

        setNewList(allType)        
    }

    const handleSubmitSearch = () =>{             

        const findCities = filterState(selectedState)
        const filterCitie = findCities.filter(obj => obj.city == selectedCity)    
        
        if(selectedState){
            setNewList(filterCitie);
        }else{
            const searchWord = allType.filter(obj => obj.dealername?.toLowerCase().includes(search.toLowerCase()))            
            setNewList(searchWord)

            if(searchWord.length == 0){
                setSerarchError('*Not Found*')                
            }
        }
        if(!search){
            setMessage('')
        }
        else if(!selectedState){
            setMessage(`Showing result for "${search}".`)
        }else if(selectedState && search){
            setMessage(`Showing result for "${search}" in ${selectedState}, ${selectedCity}.`)
        }else{
            setMessage(`Search of location: ${selectedState}, ${selectedCity}.`)
        }        
    }

    const handleSearchInput = (input) => {
        if(input.length == 0){
            setSearch(input)
            setSerarchError(" ")
            setNewList(allType)
        }else{
            setSearch(input)
        }
    }

    useEffect(()=>{
        const studio = newList.filter((obj)=> obj.dealertype == 'Studio');
        const world = newList.filter((obj)=> obj.dealertype == "KerovitWorld")
        const experience = newList.filter((obj)=> obj.dealertype == "Experience Center")

        // setAllType(theData)
        setStudioType(studio);
        setWorldType(world);
        setExperienceType(experience);  
    }, [newList])

    return (
        <>            
            <main className="store">
                <div className="banner">
                    <div className="bannerText">
                        <h2>locate</h2>
                        <h1 className="h2second">our store</h1>
                    </div>

                    <div className="store-locator-box">
                        <div className="search-bar">
                            <input type="text" placeholder="Stores near me" onChange={(e)=>handleSearchInput(e.target.value)}  value={search || ""}/>
                            <button className="search-btn">
                            <div className="search-error">
                                {searchErrorm}    
                            </div>            
                            <FaSearch />
                            </button>                                                                                                
                        </div>                                                

                        {/* <hr className="divider" /> */}

                        <select className="dropdown" onChange={(e)=> handleFindCities(e.target.value)} value={selectedState}>
                            <option value={""}>-- Select State --</option>
                            {
                                state.map((item, index)=>(
                                    <option value={item} key={index}>{item}</option>
                                ))
                            }
                        </select>

                        <select className="dropdown" onChange={(e)=> setSelectedCity(e.target.value)} value={selectedCity}>
                            <option>-- Select City --</option>
                            {
                                city.map((item, index)=>(
                                    <option value={item} key={index}>{item}</option>
                                ))
                            }
                        </select>

                        <button className="submit-btn" onClick={handleSubmitSearch}>Submit</button>
                    </div>                    
                </div>

                <div className="store-main-contents">

                    <div className="location-list">      
                        {message.length > 5 && <h3 className="heading">{message}</h3>    }              
                        {
                            worldType.length > 0 && 
                            <StoreCard
                                storeHeader="/locate-our-store/store1Header.png"
                                storeImage="/locate-our-store/store1.png"
                                location={worldType}                            
                            />
                        }

                        {
                            studioType.length > 0 && 
                            <StoreCard
                                storeHeader="/locate-our-store/store2Header.png"
                                storeImage="/locate-our-store/store2.png"
                                location={studioType}
                            />
                        }

                        {
                            experienceType.length > 0 &&
                            <StoreCard
                                storeHeader="/locate-our-store/store3Header.png"
                                storeImage="/locate-our-store/store3.png"
                                location={experienceType}
                            />
                        }
                    </div>  

                    <div className="store-form-container">
                        <h2>Send Us Your Query</h2>
                        <form className="store-form">
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
                                <label htmlFor="city">City/State*</label>
                                <select id="city" required>
                                    <option value="">Select</option>
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
                                <label htmlFor="message">Send Us Your Message</label>
                                <textarea placeholder="Message" id="message"></textarea>
                            </div>

                            <button type="submit" className="submit-btn">SUBMIT</button>
                        </form>
                    </div>

                    {/* {
                        newList.length > 0  ? 
                        <div className="all-location-list">
                            <h3 className="heading">{message}</h3>
                            <div className="grid-items">
                                {
                                newList.map((item, index)=>(
                                    <div key={index} className="card">
                                        <p className="name">{item.dealername}</p>
                                        <p className="person">{item.contactperson}</p>                                        
                                        <p><MdLocationPin /> {item.address}</p>
                                        <p><FaPhoneAlt /> {item.contactnumber}</p>                                        
                                        {
                                            item.google_link != "" &&
                                            <a href={item?.google_link}>
                                                <div className="direction-btn">Get Direction <img src="/public/locate-our-store/arrow-top-right.png" alt="icon" className="arrow-top-right"/></div>
                                            </a>
                                        }
                                    </div>
                                ))
                            }
                            </div>
                        </div> : 
                        <div className="location-list">                        
                            {
                                worldType.length > 0 && 
                                <StoreCard
                                    storeHeader="/locate-our-store/store1Header.png"
                                    storeImage="/locate-our-store/store1.png"
                                    location={worldType}                            
                                />
                            }

                            {
                                studioType.length > 0 && 
                                <StoreCard
                                    storeHeader="/locate-our-store/store2Header.png"
                                    storeImage="/locate-our-store/store2.png"
                                    location={studioType}
                                />
                            }

                            {
                                experienceType.length > 0 &&
                                <StoreCard
                                    storeHeader="/locate-our-store/store3Header.png"
                                    storeImage="/locate-our-store/store3.png"
                                    location={experienceType}
                                />
                            }
                        </div>                    
                    } */}
                </div>

            </main>            
        </>
    );
}
