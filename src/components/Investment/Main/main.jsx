import "./main.css";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import React from "react";

// Swipers 
import Swiper_1 from "../../../assets/png/swiper_1.png";
import Swiper_2 from "../../../assets/png/swiper_2.png";
import Swiper_3 from "../../../assets/png/swiper_3.png";
import Swiper_4 from "../../../assets/png/swiper_4.png";
import Swiper_5 from "../../../assets/png/swiper_5.png";
import MainCarousel from "../../../assets/png/main_carousel.png";

// Project Images
import Nedvizhimost_1 from "../../../assets/png/недвижимость_1.png";
import Nedvizhimost_2 from "../../../assets/png/недвижимость_2.png";

function Main() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [currentProjectIndex1, setCurrentProjectIndex1] = useState(0);
  const [currentProjectIndex2, setCurrentProjectIndex2] = useState(0);

  const images = [Swiper_1, Swiper_2, Swiper_3, Swiper_4, Swiper_5];

  // Projects data
  const projectsData = [
    {
      id: 1,
      title:t("project.title_1"),
      type:t("project.type_1"),
      description:t("project.description_1").split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  )),
      beds: "6",
      plot: "1915 m2",
      baths: "7",
      area: "1038 m2",
      price: "€ 8,800,000",
      image: Nedvizhimost_1
    },
    {
      id: 2,
      title: t("project.title_2"),
      type: t("project.type_2"),
      description: t("project.description_2").split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  )),
      beds: "4",
      plot: "500 m2",
      baths: "3",
      area: "450 m2",
      price: "€ 5,200,000",
      image: Nedvizhimost_2
    },
    {
      id: 3,
      title: t("project.title_3"),
      type: t("project.type_3"),
      description: t("project.description_3").split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  )),
      beds: "5",
      plot: "2000 m2",
      baths: "5",
      area: "800 m2",
      price: "€ 9,500,000",
      image: Nedvizhimost_1
    },
    {
      id: 4,
      title: t("project.title_4"),
      type: t("project.type_4"),
      description: t("project.description_4").split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  )),
      beds: "3",
      plot: "350 m2",
      baths: "2",
      area: "300 m2",
      price: "€ 3,800,000",
      image: Nedvizhimost_2
    },
    {
      id: 5,
      title: t("project.title_5"),
      type:t("project.type_5"),
      description: t("project.description_5").split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  )),
      beds:"7",
      plot: "3000 m2",
      baths: "6",
      area: "1200 m2",
      price: "€ 12,000,000",
      image: Nedvizhimost_1
    },
    {
      id: 6,
      title: t("project.title_6"),
      type: t("project.type_6"),
      description: t("project.description_6").split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  )),
      beds: "4",
      plot: "1200 m2",
      baths: "3",
      area: "550 m2",
      price: "€ 4,500,000",
      image: Nedvizhimost_2
    },
    {
      id: 7,
      title: t("project.title_7"),
      type: t("project.type_7"),
      description: t("project.description_7").split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  )),
      beds: "3",
      plot: "400 m2",
      baths: "3",
      area: "380 m2",
      price: "€ 6,200,000",
      image: Nedvizhimost_1
    },
    {
      id: 8,
      title: t("project.title_8"),
      type: t("project.type_8"),
      description: t("project.description_8").split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  )),
      beds: "6",
      plot: "2500 m2",
      baths: "5",
      area: "950 m2",
      price: "€ 10,800,000",
      image: Nedvizhimost_2
    },
    {
      id: 9,
      title: t("project.title_9"),
      type: t("project.type_9"),
      description: t("project.description_9").split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  )),
      beds: "5",
      plot: "1800 m2",
      baths: "4",
      area: "700 m2",
      price: "€ 8,900,000",
      image: Nedvizhimost_1
    },
    {
      id: 10,
      title: t("project.title_10"),
      type: t("project.type_10"),
      description: t("project.description_10").split("\n").map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      <br />
                    </React.Fragment>
                  )),
      beds: "4",
      plot: "450 m2",
      baths: "3",
      area: "420 m2",
      price: "€ 7,100,000",
      image: Nedvizhimost_2
    }
  ];

  const currentProject1 = projectsData[currentProjectIndex1];
  const currentProject2 = projectsData[currentProjectIndex2];
  const secondCarouselImages = [MainCarousel, Swiper_1, Swiper_2, Swiper_3, Swiper_4, Swiper_5];
  const currentSecondCarouselImage = secondCarouselImages[currentProjectIndex2 % secondCarouselImages.length];

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

  // Project navigation functions for first project section
  const nextProject1 = () => {
    setCurrentProjectIndex1((prevIndex) =>
      prevIndex + 1 >= projectsData.length ? 0 : prevIndex + 1
    );
  };

  const prevProject1 = () => {
    setCurrentProjectIndex1((prevIndex) =>
      prevIndex - 1 < 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const goToProject1 = (index) => {
    setCurrentProjectIndex1(index);
  };

  // Project navigation functions for second project section (independent)
  const nextProject2 = () => {
    setCurrentProjectIndex2((prevIndex) =>
      prevIndex + 1 >= projectsData.length ? 0 : prevIndex + 1
    );
  };

  const prevProject2 = () => {
    setCurrentProjectIndex2((prevIndex) =>
      prevIndex - 1 < 0 ? projectsData.length - 1 : prevIndex - 1
    );
  };

  const goToProject2 = (index) => {
    setCurrentProjectIndex2(index);
  };

  const progressPercentage1 = ((currentProjectIndex1 + 1) / projectsData.length) * 100;
  const progressPercentage2 = ((currentProjectIndex2 + 1) / projectsData.length) * 100;

  return (
    <main className="main">
      {/* Hero  */}
      <section className="investment-hero">
        <div className="investment-hero__top">
          <h1 className="investment-hero_title">Девелоперские проекты в Марбелье<br></br>для инвесторов 10–30+ млн </h1>
          <p className="investment-hero_text">от участка и лицензий до продажи и выхода инвестора</p>
          <button className="investment-hero_btn">Получить презентацию по управлению проектами</button>
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

      {/* Card  */}
      <section className="card">
        <div className="card__wrapper">
          {/* The First Card  */}
          <div className="card__wrapper_list">
            <h2 className="card_title">ROI 35–40%</h2>
            <p className="card_text">Без использования кредитного плеча</p>
          </div>

          {/* The Second Card  */}
          <div className="card__wrapper_list">
            <h2 className="card_title">2–3 года</h2>
            <p className="card_text">Без использования кредитного плеча</p>
          </div>

          {/* The Third Card  */}
          <div className="card__wrapper_list">
            <h2 className="card_title">200+ млн €</h2>
            <p className="card_text">Без использования кредитного плеча</p>
          </div>
        </div>
      </section>

      {/* Projects 2  */}
      <section className="project">

        <h2 className="project_title">{t("project.title").split("\n").map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        <br />
                      </React.Fragment>
                    ))}</h2>
        <div className="project__wrapper">
          {/* Info Part  */}
          <div className="project_info">
            <h4 className="project_suptitle">{currentProject1.title}</h4>
            <span className="project_span">{currentProject1.type}</span>
            <p className="project_text">{currentProject1.description}</p>
            <div className="span_box">
          <span className="project_span">{t("project.beds")} /{currentProject1.beds}</span>
            <span className="project_span">{t("project.plot")}  /{currentProject1.plot}</span>
            <span className="project_span">{t("project.baths")}  /{currentProject1.baths}</span>
            <span className="project_span">{t("project.area")}   /{currentProject1.area}</span>
            </div>
            <p className="project_price">{currentProject1.price}</p>
            <button className="project_btn">{t("project.btn_more_info")}</button>

          </div>

          {/* Carousel Part  */}
          <div className="carousel_section">
            {/* Project Image */}
            <img src={currentProject1.image} alt={currentProject1.title} className="project_image" />
            
            {/* Icons/Buttons  */}
            <div className="icons_box">
              <button 
                className="icon_btn" 
                onClick={prevProject1}
                aria-label="Previous project"
              >
                <i className="fa-solid fa-chevron-left"></i>
              </button>
              <button 
                className="icon_btn" 
                onClick={nextProject1}
                aria-label="Next project"
              >
                <i className="fa-solid fa-chevron-right"></i>
              </button>
            </div>

            {/* Quantity and Progress */}
            <div className="quantity_section">
              <span className="quantity">
                {String(currentProjectIndex1 + 1).padStart(2, '0')}/{String(projectsData.length).padStart(2, '0')}
              </span>
              <div className="progress_bar">
                <div 
                  className="progress_fill" 
                  style={{ width: `${progressPercentage1}%` }}
                ></div>
              </div>
            </div>
          </div>

        </div>
      </section> 
      
        {/* Projects 2  (alternative styling and independent carousel) */}
        <section className="project project--alt">
          <div className="project__wrapper project__wrapper--alt">
                    {/* Carousel Part  */}
            <div className="carousel_section carousel_section--alt">
              {/* Project Image */}
              <img src={currentSecondCarouselImage} alt={currentProject2.title} className="project_image project_image--alt" />
            
              {/* Icons/Buttons  */}
              <div className="icons_box icons_box--alt">
                <button 
                  className="icon_btn" 
                  onClick={prevProject2}
                  aria-label="Previous project"
                >
                  <i className="fa-solid fa-chevron-left"></i>
                </button>
                <button 
                  className="icon_btn" 
                  onClick={nextProject2}
                  aria-label="Next project"
                >
                  <i className="fa-solid fa-chevron-right"></i>
                </button>
              </div>

              {/* Quantity and Progress */}
              <div className="quantity_section quantity_section--alt">
                <span className="quantity">
                  {String(currentProjectIndex2 + 1).padStart(2, '0')}/{String(projectsData.length).padStart(2, '0')}
                </span>
                <div className="progress_bar">
                  <div 
                    className="progress_fill" 
                    style={{ width: `${progressPercentage2}%` }}
                  ></div>
                </div>
              </div>
            </div>
            {/* Info Part  */}
            <div className="project_info project_info--alt">
              <h4 className="project_suptitle">{currentProject2.title}</h4>
              <span className="project_span">{currentProject2.type}</span>
              <p className="project_text">{currentProject2.description}</p>
              <div className="span_box">
              <span className="project_span">{t("project.beds")} / {currentProject2.beds}</span>
              <span className="project_span">{t("project.plot")} / {currentProject2.plot}</span>
              <span className="project_span">{t("project.baths")} / {currentProject2.baths}</span>
              <span className="project_span">{t("project.area")} / {currentProject2.area}</span>
              </div>
              <p className="project_price">{currentProject2.price}</p>
              <button className="project_btn">{t("project.btn_more_info")}</button>

            </div>


          </div>
        </section>
    </main>
  );
}

export default Main;