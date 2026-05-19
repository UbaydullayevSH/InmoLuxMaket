import "./main.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import Swiper_1 from "../../../assets/png/swiper_1.png";
import Swiper_2 from "../../../assets/png/swiper_2.png";
import Swiper_3 from "../../../assets/png/swiper_3.png";
import Swiper_4 from "../../../assets/png/swiper_4.png";
import Swiper_5 from "../../../assets/png/swiper_5.png";

function Main() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

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
      <section className="investment-hero">
        <div className="investment-hero__top">
          <h1 className="investment-hero_title">Девелоперские проекты в Марбелье<br></br>для инвесторов 10–30+ млн </h1>
          <p className="investment-hero_text">от участка и лицензий до продажи и выхода инвестора</p>
          <button className="investment-hero_btn">Получить презентацию по project management</button>
        </div>

        {/* Carousel */}
        <div className="carousel-section">
          <div className="carousel-container">
            <div className="carousel-wrapper">
              <div className="carousel-track">
                {visibleImages.map((image, index) => (
                  <div key={index} className="carousel-item">
                    <img 
                      src={image} 
                      alt={`Slide ${currentIndex + index + 1}`}
                      className="carousel-image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="carousel-nav">
            <button 
              className="carousel-btn carousel-btn--prev"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              ←
            </button>
            <button 
              className="carousel-btn carousel-btn--next"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;