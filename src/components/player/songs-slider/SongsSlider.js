import React, { useRef, useState, useEffect } from "react"
import Slider from "react-slick";
import styled from "styled-components"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderWrapper = styled.div`
  margin-top: 65px;
  overflow: hidden;
  .slick-track {
    display: flex;
    align-items: center;
  }
`;
const SlideImage = styled.img`
  margin: auto auto;
  width: 100%;
  transform: scale(${props => props.isCurrentSong ? '1' : '0.5'});
  transition: transform ease-in-out 0.5s;
`;

const SongsSlider = ({playlist, indexOfCurrentSong}) => {
  const sliderWrapperRef = useRef(null);
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);

  useEffect(() => {
    setSliderWidth(sliderWrapperRef.current.offsetWidth);
  }, [sliderWrapperRef.current]);

  useEffect(() => {
    if (!!sliderRef.current) {
      sliderRef.current.slickGoTo(indexOfCurrentSong);
    }
  }, [indexOfCurrentSong]);

  const sliderSettings = {
    draggable: false,
    swipeToSlide: false,
    centerMode: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    initialSlide: indexOfCurrentSong,
    variableWidth: true,
    touchMove: false,
  };

  const Slides = () => {
    return playlist.map((song, index) => {
      const singleSlideWidth = sliderWidth / 2;

      return(
        <div style={{width: singleSlideWidth}} key={index}>
          <SlideImage isCurrentSong={song.isCurrentSong} src={song.image} alt={song.title} />
        </div>
      )
    })
  };

  return(
    <SliderWrapper ref={sliderWrapperRef}>
      <Slider ref={sliderRef} {...sliderSettings}>
        {Slides()}
      </Slider>
    </SliderWrapper>
  );
};

export default SongsSlider
