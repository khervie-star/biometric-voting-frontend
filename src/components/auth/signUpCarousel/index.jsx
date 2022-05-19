import React from "react";
import { CarouselProvider, Slider, Slide, Dot } from "pure-react-carousel";

const SignupCarousel = () => (
  <div className="relative hidden md:block min-h-[180px]">
    <CarouselProvider
      isPlaying={+true}
      infinite={+true}
      className="max-h-[180px] "
      naturalSlideWidth={420}
      naturalSlideHeight={170}
      totalSlides={3}
      visibleSlides={1}
    >
      <Slider className="min-h-[180px] ">
        <Slide index={0}>
          <div className="max-w-[500px] text-center font-thin mx-auto">
            <p className="signup_pseudo leading-[24px] lg:leading-[34px] text-white text-[20px] px-[30px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              dicta dolorum quos! Rem, neque.
            </p>
            <h1 className="text-[24px] font-semiBold text-white mt-[10px] lg:mt-[20px]">
              John Andy
            </h1>
          </div>
        </Slide>
        <Slide index={1}>
          <div className="max-w-[500px] text-center font-thin mx-auto">
            <p className="signup_pseudo leading-[24px] lg:leading-[34px] text-white text-[20px] px-[30px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              dicta dolorum quos! Rem, neque.
            </p>
            <h1 className="text-[24px] font-semiBold text-white mt-[10px] lg:mt-[20px]">
              John Andy
            </h1>
          </div>
        </Slide>
        <Slide index={2}>
          <div className="max-w-[500px] text-center font-thin mx-auto">
            <p className="signup_pseudo leading-[24px] lg:leading-[34px] text-white text-[20px] px-[30px]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              dicta dolorum quos! Rem, neque.
            </p>
            <h1 className="text-[24px] font-semiBold text-white mt-[10px] lg:mt-[20px]">
              John Andy
            </h1>
          </div>
        </Slide>
      </Slider>
      <div className="text-center absolute bottom-[-20px]  lg:bottom-[0px] left-[50%] translate-x-[-50%] flex justify-center items-center gap-[8px] xl:gap-[16px] proddly_carousel_dot ">
        <Dot
          slide={0}
          className="w-[8px] h-[8px] xl:w-[13px] xl:h-[13px] rounded-[50%] "
        />
        <Dot
          slide={1}
          className="w-[8px] h-[8px] xl:w-[13px] xl:h-[13px] rounded-[50%] "
        />
        <Dot
          slide={2}
          className="w-[8px] h-[8px] xl:w-[13px] xl:h-[13px] rounded-[50%] "
        />
      </div>
    </CarouselProvider>
  </div>
);

export default SignupCarousel;
