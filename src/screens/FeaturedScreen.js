import React from "react";
import Featured from "../Featured";
import "./FeaturedScreen.css";
import Heading from "../Heading";
import Info from "../Info";
import { Fade } from "react-awesome-reveal";

function FeaturedScreen() {
  return (
    <div className="featuredScreen">
      <Fade>
        <Heading heading="Domestic Maintainance" />
      </Fade>
      <Fade>
        <div className="featuredScreen__discover">
          <Info
            title="Ceramic and Glass Hop"
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1620912738432e648619dfcf7e0496bad980754fdc-1800w.jpg"
            info="Are you looking for the best ceramic hob cleaner out there? Look no further! Tazzer clean experts will clean for you."
            link="Order"
            color="#1e3932"
            background="#f0ebe0"
            className="info__hoverLight"
          />
          <Info
            title="Chimney Cleaning"
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1621553104chimney-sweep-services.jpg"
            info="Many issues can cause creosote to buildup in wood fireplaces and can cause gas to not vent out properly in gas fireplaces"
            link="Order"
            color="#1e3932"
            background="#f0ebe0"
            className="info__hoverLight"
          />
        </div>
      </Fade>

      <Fade>
        <Heading heading="Choose Professionals Safe" />
      </Fade>
      <Fade>
        <div className="featuredScreen__discover">
          <Info
            title="Cleaning doors and windows"
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1620942890How_to_Clean_Windows-650x434.jpg"
            info="Tazzerclean believes in providing a hygienic environment to all students and teachers present in school. Our professional cleaners do"
            link="Order"
            color="white"
            background="#1e3932"
            className="info__hoverDark"
          />
          <Info
            title="Full aircraft Interior Cleaning 3 hrs "
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1620945163original_DELTAFOG.jpg"
            info="Aircraft interior cleaning also is known as aircraft detailing service is the act of performing a thorough cleaning, restoration"
            link="Order"
            color="white"
            background="red"
            className="info__hoverDark"
          />

          <Info
            title="Apartment and Block Cleaning"
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1620952563communal-areas-cleaning.jpg"
            info="We have a dedicated fully equipped mobile team who take care of the regular cleaning of communal areas in many buildings all over"
            link="Order"
            color="white"
            background="#1e3932"
            className="info__hoverDark"
          />

          <Info
            title="Waste Disposal per ton"
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1620938046medical-waste-1080x675.jpeg"
            info="We’re dedicated to providing best-in-class service and making your life a little easier. Have a question? contact our support center "
            link="Order"
            color="white"
            background="red"
            className="info__hoverDark"
          />
        </div>
      </Fade>

      <Fade>
        <Heading heading="GOOD FOOD, GOOD MOOD" />
      </Fade>
      <Fade>
        <div className="featuredScreen__discover">
          <Info
            title="Emptying and Cleaning Bins "
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1621984674Litter-bin-scaled.jpg"
            info="Since classrooms are the busiest business rooms in schools, the bins quickly fill up. Tazzer clean would be grateful for managing all waste in schools and keeping them clean."
            link="Order"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
          <Info
            title="After Build Cleaning 4 hours"
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1621468752after-build.jpg"
            info="If you need a professional after builders cleaning service to get your home or office in shape after renovation or decoration work, you can rely on Tazzerz experts."
            link="Order"
            color="#1e3932"
            background="#d4e9e4"
            className="info__hoverLight"
          />
        </div>
      </Fade>
      <Fade>
        <div className="featuredScreen__featured">
          <Featured
            title="Driveway Industrial cleaning "
            info="Driveways see a lot of use and suffer a lot of abuse. Even if you just moved into a new property or you just repaved it, your driveways will with time show signs of attrition. Vehicles will track mud, gravel, dirt, and pollen onto the surfaces making them look streaked and stained"
            link="Order now"
            path=""
            image="https://www.tazzerclean.co.uk/uploads/services/se_full_1620938869What-Is-High-Pressure-Cleaning.jpg"
            order="2"
            background="#1e3932"
            color="white"
            className="featured__hoverDark"
          />
        </div>
      </Fade>
    </div>
  );
}

export default FeaturedScreen;
