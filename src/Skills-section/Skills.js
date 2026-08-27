import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const skills = [
  { name: "HTML", percent: 85 },
  { name: "CSS", percent: 85 },
  { name: "JavaScript", percent: 85 },
  { name: "React", percent: 85 },
];

function Skills() {
  const swiperRef = useRef(null);

  return (
    <div className="container">
      <h1 className="skills">Skills</h1>
      <span>You can see my skills here</span>

      <div id="swipper-con">
        <button className="arrow-btn arrow-left" onClick={() => swiperRef.current.slidePrev()}>
          &#8592;
        </button>

        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          spaceBetween={30}
          slidesPerView={3}
          slidesPerGroup={1}
          loop={true}
          className="mySwiper"
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <div className="skill-item">
                <div className="circle">
                  <h1> {skill.percent} %</h1>
                </div>
                <p className="skill-name">{skill.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="arrow-btn arrow-right" onClick={() => swiperRef.current.slideNext()}>
          &#8594;
        </button>
      </div>
    </div>
  );
}

export default Skills;