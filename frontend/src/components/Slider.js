import React from "react";
import { v4 as uuid } from "uuid";
import RichText from "./RichText";

const Slider = ({ data }) => {
  return (
    <div
      data-delay={4000}
      data-animation="slide"
      className="w-slider"
      data-autoplay="false"
      data-easing="ease"
      data-hide-arrows="false"
      data-disable-swipe="false"
      data-autoplay-limit={0}
      data-nav-spacing={3}
      data-duration={500}
      data-infinite="true"
    >
      <div className="w-slider-mask">
        {data.map((el) => {
          return <Slide key={uuid()} body={el.body} background={el.background} />;
        })}
      </div>
      <div className="w-slider-arrow-left">
        <div className="w-icon-slider-left" />
      </div>
      <div className="w-slider-arrow-right">
        <div className="w-icon-slider-right" />
      </div>
      <div className="w-slider-nav w-round" />
    </div>
  );
};

export const Slide = ({ body, background }) => {
  return (
    <div className="w-slide" style={background && background.data && { backgroundImage: `url(${background.data.attributes.url})` }}>
      <RichText text={body} />
    </div>
  );
};

export default Slider;
