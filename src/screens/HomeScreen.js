import React from "react";
import "./HomeScreen.css";
import { Link } from "react-router-dom";
import Featured from "../Featured";
import Heading from "../Heading";
import Info from "../Info";
import { Fade } from "react-awesome-reveal";
import HomeAgain from "./HomeAgain";

function HomeScreen() {
  return (
    <div className="homeScreen">
      <Fade>
        <div className="homeScreen__top">
          <h4>
          TazzerCleaning provides high quality, professional and on-demand, services that are fully trusted and convenient with a highly professional team. We will bring together entire Industrial Services in one place. We deliver quality work & provide the best convenient and hassle-free experience with the customers. <Link to="/menu">Learn more</Link>
          </h4>
        </div>
      </Fade>
      <Fade>
        <div className="homeScreen__bottom">
          <div className="homeScreen__bottomLeft">
            <h4>How Tazzer Clean Works</h4>
            <p>
            Buyer: You can use our platform to find the best cleaning services near you or in your area. 
            Tazzer Clean will help you with your cleaning services by providing all information related to the query
            </p>
            <button>Learn more</button>
          </div>
          <div className="homeScreen__bottomRight">
            <img
              src="https://www.tazzerclean.co.uk/uploads/services/se_full_1621008596images(95).jpg"
              alt=""
            />
          </div>
        </div>
      </Fade>
      <Fade>
        <Heading heading="Flexible & Cost Effective Cleaning Services" />
      </Fade>
      <Fade>
        <div className="homeScreen__top">
          <h4>
          We are the Best & Top Rated Cleaning Industry.
          Tazzer Clean provides high quality, professional and on-demand, cleaning services that are fully trusted and convenient with a highly professional team. 
          We are the Cleaning Industry Online Marketplace that brings together the entire Industrial Services in one place. We deliver quality work & provide the 
          best domestic house cleaners.<Link to="/menu">Learn more</Link>
          </h4>
        </div>
      </Fade>
      <div className="homeScreen__featured">
        <Fade>
          <Featured
            title="NICELY NONDAIRY"
            info="Tazzer Clean's odour removal solutions will remarkably enhance or permanently eradicate odours. In the UK, Only we ensure the service and results you deserve."
            link="Explore the honey drinks"
            path="/contact"
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1620952563communal-areas-cleaning.jpg"
            background="#f0ebe0"
            color="#1e3932"
            className="featured__hoverLight"
          />
        </Fade>
        <Fade>
          <Featured
            title="Cleaning Process"
            info="We provide standard cleaning process which includes vacuuming, dust 
            removing, window cleaning, floor scrub, cleaning surfaces, etc. We take care of commonly 
            used places like door knob, buttons, switches and surface area bathroom"
            link="Try the new pistachio drinks"
            path=""
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1620953438pest-control.png"
            order="2"
            background="#f0ebe0"
            color="#1e3932"
            className="featured__hoverLight"
          />
        </Fade>
        <Fade>
          <Featured
            title="Flexible & Cost "
            info="At Tazzer Clean, you will find all professional cost-effective cleaning services at affordable and flexible rates. We believe in providing quality work at cheapest price"
            link="Explore the honey drinks"
            path=""
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1620850547Screen+Shot+2017-06-13+at+2.50.22+PM.png"
            background="#f0ebe0"
            color="#1e3932"
            className="featured__hoverLight"
          />
        </Fade>
        <Fade>
          <Featured
            title="Service Details"
            info="Kitchen extractor fan cleaning can be a very sticky, unpleasant and difficult task, so don’t get your hands dirty, let Ovenclean handle the hard work! "
            link="Service Details"
            path=""
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1620913493tazzer_clean_extractor.jpg"
            order="2"
            background="#f0ebe0"
            color="#1e3932"
            className="featured__hoverLight"
          />
          <Fade>
          <Featured
            title="Choose Professionals"
            info="Tazzer Clean will help you with all your cleaning work. We offer all types of cleaning services including apartment cleaning, carpet cleaning, house cleaning, or
            after renovation services"
            link="Explore the honey drinks"
            path=""
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1621461173inside-fogging-of-sanitizer-disinfecting-for-Wisconsin-Businesses-and-Homes.jpg"
            background="#f0ebe0"
            color="#1e3932"
            className="featured__hoverLight"
          />
        </Fade>
        <Fade>
          <Featured
            title="Safe Payment and Fees"
            info="We are a team of professionals and believe in quality work. We offer flexible payment options & payment can be done through different formats on our website and is completely secured"
            link="Service Details"
            path=""
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1620974673images(61).jpg"
            order="2"
            background="#f0ebe0"
            color="#1e3932"
            className="featured__hoverLight"
          />
        </Fade>
        </Fade>
      </div>




      <Fade>
        <Heading heading="MORE TO DISCOVER" />
      </Fade>
      <Fade>
        <div className="homeScreen__discover">
          <Info
            title="Insurance/Pricing"
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1621469943service-12.jpg"
            info="Tazzer Clean believe in delivering the best solutions at the lowest pricing as compared to others in the market.We have 24/7 
            customer support which provides all the solutions"
            link="See pickup options"
            color="#1e3932"
            background="goldenrod"
            className="info__hoverLight"
          />
          <Info
            title="Refund Policy"
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1620936935mop-stock-today-tease-160205_fdd4a2479f601c7120de6582228e1d28.jpg"
            info="We provide a hassle-free refund policy for our buyers. Our team is working 
            on refund policy 24*7 & if you requested any refund, you will get it within 24 hours."
            link="Order now"
            color="#1e3932"
            background="goldenrod"
            className="info__hoverLight"
          />
        </div>
      </Fade>
      <Fade>
        <div className="homeScreen__discover">
          <Info
            title="Why Choose Us"
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1621470280shutterstock_557950717_LoRes.jpg"
            info="Our Marketplace: We are the best Traditional and Eco-Friendly cleaning services that helps 
            you with any  type cleaning work. You can instantly book your top-class cleaning professional at affordable prices."
            link="See pickup options"
            color="#1e3932"
            background="goldenrod"
            className="info__hoverLight"
          />
          <Info
            title="Eco-Friendly Clean Services."
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1621469943service-12.jpg"
            info="We at Tazzer Clean focuses on delivering the quality work and helping our customers with Traditional and Eco-friendly cleaning services. 
            We focuses on domestic cleaning, local handyman, and other global cleaning services."
            link="Order now"
            color="#1e3932"
            background="goldenrod"
            className="info__hoverLight"
          />
        </div>
      </Fade>
      <HomeAgain />
    </div>
  );
}

export default HomeScreen;
