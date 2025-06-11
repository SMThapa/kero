import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Career = () => {
  return (
    <main className="career">
    <div className="homebanner">
        <div className="bannerText">
            <p>Welcome</p>
            <p>to the <b>Kerovit</b></p>
            <p><b>team</b></p>
        </div>
        <div className="whatsapp-icon">
            <FaWhatsapp/>
        </div>
    </div>

    <div className="carrerText">
        <p>
            Our passion is water. Are you a genuine team player? If so, why not make your way over to Hansgrohe, the successful brand-name company and one of the few global players in the sanitation industry. Whether you're still just starting out in your career, whether you want to gain practical experience alongside your studies, or whether you're looking for a new professional home: here, exciting career prospects await.
        </p>
    </div>

    <div className="belowbanner hide_on_desktop">
        <div className="belowBannerText">
            <img src="/career/belowBannerText.png" alt="belowBannerText" />
            <p>Send us your resume at</p>
            <p className="mail">info@kerovit.com</p>
        </div>
    </div>

    <div className="below-banner-desktop">

        <div className="belowbanner">
            <div className="belowBannerText">
                <img src="/career/belowBannerText.png" alt="belowBannerText" />
                <p>Send us your resume at</p>
                {/* <a href="mailto:info@kerovit.com" className="mail" target="_blank">info@kerovit.com</a> */}
                <Link to={'https://www.kajariaceramics.com/future-openings.php'} target="_blank">
                    <div className="btn-primary">New Openings</div>
                </Link>
            </div>
        </div>

    </div>

</main>
  )
}
