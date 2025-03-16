import { useEffect, useRef, useState } from "react";
import './Hero.scss';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const slides = [
  {
    imageUrl: 'https://s.yimg.com/uu/api/res/1.2/xbDDYupSENLUfIutf64UoA--~B/aD0xMjAwO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2022-11/358dcde0-5a2c-11ed-b4f6-baec605cd518.cf.jpg',
    text: 'Modern Design Frames'
  },

  {
    imageUrl: 'https://cdn.shopify.com/s/files/1/0011/7974/6370/products/81bS_2Boa0_2BAL._AC_SL1500_1200x.jpg?v=1606808061',
    text: 'Traditonal Design Frames'
  },
  {
    imageUrl: 'https://i.etsystatic.com/41481520/r/il/5d7458/5326155372/il_fullxfull.5326155372_ggbn.jpg',
    text: 'Wall Art Frames'
  }
]

export const HeroSection = () => {
  const [currSlideIndex, setCurrSlideIndex] = useState(0);
  // const [isFading, setFading] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const prevSlide = () => {
    // setFading(true)

    // setTimeout(() => {
      setCurrSlideIndex((curr) => curr == 0 ? slides.length - 1 : curr - 1)
    // }, 250)
  }
  const nextSlide = () => {
    // setFading(true)

    // setTimeout(() => {
      setCurrSlideIndex((curr) => curr == slides.length - 1 ? 0 : curr + 1)
    // }, 250)
  }

  // const handleImageLoad = () => {
  //   setFading(false)
  // }

  let startX = 0;
  const handleTouchStart = (e) => {
    startX = e.touches[0].clientX
  };
  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    // const endX = e.touches[0].clientX;
    const diff = startX - endX;

    if (diff > 50) {
      nextSlide(); 
    } else if (diff < -50) {
      prevSlide(); 
    }
  };
  const handleMouseDown = (e) => {
    touchStartX.current = e.clientX;
    // clearInterval(intervalRef.current);
  };
  const handleMouseUp = (e) => {
    // if (!isDragging.current) return;
    touchEndX.current = e.clientX;
    if (touchStartX.current - touchEndX.current > 50) nextSlide();
    if (touchEndX.current - touchStartX.current > 50) prevSlide();

    // isDragging.current = false;
    // intervalRef.current = setInterval(nextSlide, 3000);
  };
  // const handlers = useSwipeable({
  //   onSwipedLeft: nextSlide,
  //   onSwipedRight: prevSlide,
  //   preventDefaultTouchmoveEvent: true,
  //   trackTouch: true,
  //   trackMouse: true,
  // });

  // useEffect(() => {
  //   const interval = setInterval(nextSlide, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <div
        // {...handlers} 
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="heroSection">
        <div className="slider-wrapper"
          style={{ transform: `translateX(-${currSlideIndex * 100}%)` }}>
          {/* <div className={`imageSection ${isFading ? "sliding" : ""}`}>
            <h2 ref={sliderRef}>{slides[currSlideIndex].text}</h2>
            <img src={slides[currSlideIndex].imageUrl} alt=""
              className={`${isFading ? 'fade-out' : 'fade-in'}`}
              onLoad={handleImageLoad} />
          </div> */}

          {slides.map((slide, index) => (
            <div className="imageSection">
              <div className="singleSection">
              <h2>{slide.text}</h2>
              <img src={slide.imageUrl} alt=""/>
              </div>
            </div>
          ))}
        </div>

        <button onClick={prevSlide} className="slideBtn prev">
          <FaArrowLeft size={24} />
        </button>
        <button onClick={nextSlide} className="slideBtn next">
          <FaArrowRight size={24} />
        </button>

        <div className="slider-indicators">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`slider-dot ${currSlideIndex === index ? "active" : ""}`}
              onClick={() => setCurrSlideIndex(index)}
            />
          ))}
        </div>

      </div>
      <div></div>
    </>
  );
};

export default HeroSection;