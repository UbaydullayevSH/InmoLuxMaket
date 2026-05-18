import "./main.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect, useRef } from "react";
import Swiper_1 from "../../../assets/png/Swiper_1.png";
import Swiper_2 from "../../../assets/png/Swiper_2.png";
import Swiper_3 from "../../../assets/png/Swiper_3.png";
import Swiper_4 from "../../../assets/png/Swiper_4.png";
import Swiper_5 from "../../../assets/png/Swiper_5.png";

function Main() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);

  const images = [Swiper_1, Swiper_2, Swiper_3, Swiper_4, Swiper_5];

  // Динамически менять количество карточек при изменении размера окна
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setItemsPerView(1);
      } else if (window.innerWidth <= 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, images.length - itemsPerView);

  // Mouse handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = (e) => {
    setIsDragging(false);
    
    const currentX = e.clientX;
    const diff = currentX - startX;
    const threshold = 50;

    if (diff > threshold) {
      // Свайп вправо - предыдущие карточки
      prevSlide();
    } else if (diff < -threshold) {
      // Свайп влево - следующие карточки
      nextSlide();
    }
    
    setDragOffset(0);
  };

  // Touch handlers
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = (e) => {
    setIsDragging(false);
    
    const currentX = e.changedTouches[0].clientX;
    const diff = currentX - startX;
    const threshold = 50;

    if (diff > threshold) {
      prevSlide();
    } else if (diff < -threshold) {
      nextSlide();
    }
    
    setDragOffset(0);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 > maxIndex ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? maxIndex : prevIndex - 1
    );
  };

  const visibleImages = images.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <main className="main">
      {/* Hero  */}
      <section className="hero">
        <div className="hero__top">
          <h1 className="hero_title">Девелоперские проекты в Марбелье<br></br>для инвесторов 10–30+ млн </h1>
          <p className="hero_text">от участка и лицензий до продажи и выхода инвестора</p>
          <button className="hero_btn">Получить презентацию по project management</button>
        </div>

        {/* Carousel */}
        <div 
          className={`carousel-container ${isDragging ? 'dragging' : ''}`}
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="carousel-wrapper">
            <div className="carousel-track" style={{ transform: `translateX(${dragOffset}px)` }}>
              {visibleImages.map((image, index) => (
                <div key={index} className="carousel-item">
                  <img 
                    src={image} 
                    alt={`Slide ${currentIndex + index + 1}`}
                    className="carousel-image"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;