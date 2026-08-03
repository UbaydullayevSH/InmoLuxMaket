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

// Mobile Swiper 
import MobileSwiper_1 from "../../../assets/png/mobile_swiper_1.png";
import MobileSwiper_2 from "../../../assets/png/mobile_swiper_2.png";
import MobileSwiper_3 from "../../../assets/png/mobile_swiper_3.png";

// Private Image 
import PrivateImage from "../../../assets/png/private_image.png";


// System Images 
import System_1 from "../../../assets/png/system_1.png";
import System_2 from "../../../assets/png/system_2.png";


// Development Image 
import DevelopmentImage from "../../../assets/png/development_img.png";
import ServiceImage1 from "../../../assets/png/service_img_1.png";
import ServiceImage2 from "../../../assets/png/service_img_2.png";
import ServiceImage3 from "../../../assets/png/service_img_3.png";
// Niche images for new section
import Niche1 from "../../../assets/png/niche_1.png";
import Niche2 from "../../../assets/png/niche_2.png";
import Niche3 from "../../../assets/png/niche_3.png";
import Niche4 from "../../../assets/png/niche_4.png";

function Main() {
  const { t, i18n } = useTranslation();
  const riskLegalItems = t("risk.legal.items", { returnObjects: true });
  const riskMitigateItems = t("risk.mitigate.items", { returnObjects: true });
  const riskOperationalItems = t("risk.operational.items", { returnObjects: true });
  const formFieldConfig = {
    budget: {
      label: t("form.fields.budget.label"),
      options: t("form.fields.budget.options", { returnObjects: true })
    },
    term: {
      label: t("form.fields.term.label"),
      options: t("form.fields.term.options", { returnObjects: true })
    },
    goal: {
      label: t("form.fields.goal.label"),
      options: t("form.fields.goal.options", { returnObjects: true })
    },
    citizenship: {
      label: t("form.fields.citizenship.label"),
      options: t("form.fields.citizenship.options", { returnObjects: true })
    }
  };
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [currentProjectIndex1, setCurrentProjectIndex1] = useState(0);
  const [currentProjectIndex2, setCurrentProjectIndex2] = useState(0);
  const [formFields, setFormFields] = useState(() => [
    {
      id: "budget",
      label: formFieldConfig.budget.label,
      selected: formFieldConfig.budget.label,
      isOpen: false,
      options: formFieldConfig.budget.options
    },
    {
      id: "term",
      label: formFieldConfig.term.label,
      selected: formFieldConfig.term.label,
      isOpen: false,
      options: formFieldConfig.term.options
    },
    {
      id: "goal",
      label: formFieldConfig.goal.label,
      selected: formFieldConfig.goal.label,
      isOpen: false,
      options: formFieldConfig.goal.options
    },
    {
      id: "citizenship",
      label: formFieldConfig.citizenship.label,
      selected: formFieldConfig.citizenship.label,
      isOpen: false,
      options: formFieldConfig.citizenship.options
    }
  ]);

  const images = [Swiper_1, Swiper_2, Swiper_3, Swiper_4, Swiper_5];

  useEffect(() => {
    setFormFields((prev) =>
      prev.map((field) => {
        const config = formFieldConfig[field.id];
        const isCurrentSelectionValid = Array.isArray(config.options) && config.options.includes(field.selected);

        return {
          ...field,
          label: config.label,
          options: config.options,
          selected: isCurrentSelectionValid ? field.selected : config.label
        };
      })
    );
  }, [i18n.language]);

  const toggleFormField = (fieldId) => {
    setFormFields((prev) =>
      prev.map((field) =>
        field.id === fieldId ? { ...field, isOpen: !field.isOpen } : { ...field, isOpen: false }
      )
    );
  };

  const selectFormOption = (fieldId, option) => {
    setFormFields((prev) =>
      prev.map((field) =>
        field.id === fieldId ? { ...field, selected: option, isOpen: false } : field
      )
    );
  };

  // Projects data
  const projectsData = [
    {
      id: 1,
      title: t("project.title_1"),
      type: t("project.type_1"),
      description: t("project.description_1").split("\n").map((line, index) => (
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
      type: t("project.type_5"),
      description: t("project.description_5").split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <br />
        </React.Fragment>
      )),
      beds: "7",
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

  // Mobile items for private invest section (image + text toggle)
  const mobileItems = [
    {
      id: 1,
      image: MobileSwiper_1,
      title: t("mobile.item1_title") || "Поиск и отбор",
      text:
        t("mobile.item1_text").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        )) ||
        "Поиск участков и проектов. Анализ локации и рыночного спроса. Предварительная оценка инвестиционного потенциала."
    },
    {
      id: 2,
      image: MobileSwiper_2,
      title: t("mobile.item2_title") || "Due diligence",
      text:
        t("mobile.item2_text").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        )) ||
        "Проверка земли и проекта, лицензии, риски и экономическая модель."
    },
    {
      id: 3,
      image: MobileSwiper_3,
      title: t("mobile.item3_title") || "Управление",
      text:
        t("mobile.item3_text").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        )) ||
        "Управление проектом, подрядчики, контроль сроков и бюджета."
    }
  ];

  const [mobileShowImage, setMobileShowImage] = useState(mobileItems.map(() => true));

  const toggleMobileItem = (index) => {
    setMobileShowImage((prev) => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  };

  // Development accordion data
  const devItems = [
    {
      id: 1,
      q: t("development.q_1"),
      a: t("development.a_1")
    },
    {
      id: 2,
      q: t("development.q_2"),
      a: t("development.a_2")
    },
    {
      id: 3,
      q: t("development.q_3"),
      a: t("development.a_3")
    },
    {
      id: 4,
      q: t("development.q_4"),
      a: t("development.a_4")
    },
    {
      id: 5,
      q: t("development.q_5"),
      a: t("development.a_5")
    },
    {
      id: 6,
      q: t("development.q_6"),
      a: t("development.a_6")
    }
  ];

  const [openDev, setOpenDev] = useState([]); // store ids of opened items

  const toggleDev = (id) => {
    setOpenDev((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

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

  const [servicesOpen, setServicesOpen] = useState([true, true, true]);
  const [openFaq, setOpenFaq] = useState(null);

  const servicesCards = [
    {
      title: t("services.title_1"),
      image: ServiceImage1,
      items: [
        t("services.card_1.item_1"),
        t("services.card_1.item_2"),
        t("services.card_1.item_3"),
        t("services.card_1.item_4"),
      ],
    },
    {
      title: t("services.title_2"),
      image: ServiceImage2,
      items: [
        t("services.card_2.item_1"),
        t("services.card_2.item_2"),
        t("services.card_2.item_3"),
        t("services.card_2.item_4"),
      ],
    },
    {
      title: t("services.title_3"),
      image: ServiceImage3,
      items: [
        t("services.card_3.item_1"),
        t("services.card_3.item_2"),
        t("services.card_3.item_3"),
        t("services.card_3.item_4"),
      ],
    },
  ];

  const toggleServiceCard = (index) => {
    setServicesOpen((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  const faqItems = [
    { id: 1, question: t("faq.q_1"), answer: t("faq.a_1") },
    { id: 2, question: t("faq.q_2"), answer: t("faq.a_2") },
    { id: 3, question: t("faq.q_3"), answer: t("faq.a_3") },
    { id: 4, question: t("faq.q_4"), answer: t("faq.a_4") },
    { id: 5, question: t("faq.q_5"), answer: t("faq.a_5") },
    { id: 6, question: t("faq.q_6"), answer: t("faq.a_6") },
    { id: 7, question: t("faq.q_7"), answer: t("faq.a_7") },
    { id: 8, question: t("faq.q_8"), answer: t("faq.a_8") }
  ];

  const toggleFaq = (id) => {
    setOpenFaq((prev) => (prev === id ? null : id));
  };

  return (
    <main className="main">
      {/* Hero with carousel */}
      <section className="investment-hero">
        <div className="investment-hero__inner">
          <div className="investment-hero__content">
            <h1 className="investment-hero_title">{t("investmentHero.title").split("\n").map((line, index) => (
              <React.Fragment key={index}>{line}<br /></React.Fragment>
            ))}</h1>
            <p className="investment-hero_text">{t("investmentHero.text")}</p>
            <button className="investment-hero_btn">{t("investmentHero.button")}</button>
          </div>

          <div className="investment-hero__carousel">
            <button className="carousel-nav carousel-nav--left" onClick={prevSlide} aria-label="Previous">
              <i className="fa-solid fa-chevron-left"></i>
            </button>

            <div className="carousel-hero__viewport">
              <img src={images[currentIndex]} alt={`slide-${currentIndex}`} className="carousel-hero__image" />
            </div>

            <button className="carousel-nav carousel-nav--right" onClick={nextSlide} aria-label="Next">
              <i className="fa-solid fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </section>
      {/* Card  */}
      <section className="card">
        <div className="card__wrapper">
          {/* The First Card  */}
          <div className="card__wrapper_list">
            <h2 className="card_title">{t("investmentCard.title_1")}</h2>
            <p className="card_text">{t("investmentCard.text_1")}</p>
          </div>

          {/* The Second Card  */}
          <div className="card__wrapper_list">
            <h2 className="card_title">{t("investmentCard.title_2")}</h2>
            <p className="card_text">{t("investmentCard.text_2")}</p>
          </div>

          {/* The Third Card  */}
          <div className="card__wrapper_list">
            <h2 className="card_title">{t("investmentCard.title_3")}</h2>
            <p className="card_text">{t("investmentCard.text_3")}</p>
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

      {/* Private Investment  */}
      <section className="private_invest">
        <h3 className="private_invest_title">{t("privateInvestment.title")}</h3>
        <div className="private_invest__wrapper desktop-only">
          <div className="private_invest_info">
            <div className="invest_info_list">
              <h4 className="invest_info_title">{t("privateInvestment.request.title")}</h4>
              <p className="invest_info_text">
                {t("privateInvestment.request.text").split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="invest_info_list">
              <h4 className="invest_info_title">{t("privateInvestment.result.title")}</h4>
              <p className="invest_info_text">
                {t("privateInvestment.result.text").split("\n").map((line, index) => (
                  <React.Fragment key={index}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>

          </div>
          <img src={PrivateImage} alt={t("privateInvestment.imageAlt")} className="private_invest_image" />
        </div>

        <div className="private_invest_mobile mobile-only">
          {mobileItems.map((item, idx) => (
            <div className="private_invest_card mobile-item" key={item.id}>
              <div className={`private_invest_bg mobile-media ${mobileShowImage[idx] ? 'show-image' : 'show-text'}`}>
                {mobileShowImage[idx] ? (
                  <img src={item.image} alt={item.title} className="private_invest_image mobile-image" />
                ) : (
                  <div className="mobile-text">
                    <h4 className="private_invest_card_title">{item.title}</h4>
                    <ul className="private_invest_card_list">
                      <li className="private_invest_card_item">{item.text}</li>
                    </ul>
                  </div>
                )}
                <button
                  className="mobile-toggle-btn"
                  onClick={(e) => { e.stopPropagation(); toggleMobileItem(idx); }}
                  aria-label={mobileShowImage[idx] ? 'Показать текст' : 'Показать изображение'}
                >
                  {mobileShowImage[idx] ? <i className="fa-solid fa-xmark"></i> : <i className="fa-solid fa-plus"></i>}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development  */}

      <section className="development">
        <h3 className="development_title">{t("development.title").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</h3>
        <p className="development_suptext">{t("development.suptext")}</p>
        <p className="development_subtext">{t("development.subtext").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</p>

        {/* Accordion + Image */}
        <div className="development__wrapper">
          <img src={DevelopmentImage} alt="Development Process" className="development_image" />

          <ul className="development_menu">
            {devItems.map((item) => (
              <li key={item.id} className={`development_item ${openDev.includes(item.id) ? 'open' : ''}`}>
                <button
                  type="button"
                  className="development_button"
                  onClick={() => toggleDev(item.id)}
                  aria-expanded={openDev.includes(item.id)}
                >
                  <span className="development_button_text">{item.q}</span>
                  <span className={`development_icon ${openDev.includes(item.id) ? 'open' : ''}`}></span>
                </button>
                <div className="development_answer" style={{ maxHeight: openDev.includes(item.id) ? '120px' : '0px' }}>
                  <p>{item.a}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Services  */}
      <section className="services">
        <h3 className="services_title">{t("services.title").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</h3>
        <p className="services_suptext">{t("services.suptext").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</p>
        <div className="services__wrapper">
          {servicesCards.map((card, index) => (
            <div className="services_card" key={index}>
              <p className="services_card_title">
                {card.title.split("\n").map((line, itemIndex) => (
                  <React.Fragment key={itemIndex}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              <div
                className="services_img__block"
                style={{ backgroundImage: `url(${card.image})` }}
              >
                <button
                  type="button"
                  className="services_toggle_btn"
                  onClick={() => toggleServiceCard(index)}
                  aria-expanded={servicesOpen[index]}
                  aria-label={servicesOpen[index] ? 'Hide answers' : 'Show answers'}
                >
                  <i className={`fa-solid ${servicesOpen[index] ? 'fa-xmark' : 'fa-plus'} service_icon`} />
                </button>
              </div>

              {servicesOpen[index] && (
                <ul className="services_menu">
                  {card.items.map((item, itemIndex) => (
                    <li className="services_menu_item" key={itemIndex}>
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Risk / Niche Section (new) */}
      <section className="risk-section">
        <h2 className="risk-section__title">{t("risk.title")}
          <span className="risk-section__subtitle">{t("risk.subtitle")}</span>
        </h2>

        <div className="risk-section__grid">
          {/* Top row: text + mountains image */}
          <div className="risk-row risk-row--top">
            <div className="risk-col risk-col--text">
              <h4>{t("risk.legal.title")}</h4>
              <ul>
                {(Array.isArray(riskLegalItems) ? riskLegalItems : []).map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
            <div className="risk-col risk-col--image">
              <img src={Niche1} alt={t("risk.images.mountainsAlt")} className="risk-image" />
            </div>
          </div>

          {/* Middle row: two small images + text box */}
          <div className="risk-row risk-row--middle">
            <div className="risk-col risk-col--image small">
              <img src={Niche2} alt="Small house 1" className="risk-thumb" />
            </div>
            <div className="risk-col risk-col--image small">
              <img src={Niche3} alt="Small house 2" className="risk-thumb" />
            </div>
            <div className="risk-col risk-col--text">
              <div className="risk-box">
                <h5>{t("risk.mitigate.title")}</h5>
                <ul>
                  {(Array.isArray(riskMitigateItems) ? riskMitigateItems : []).map((it, i) => (
                    <li key={i}>{it}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom row: text + big penthouse image */}
          <div className="risk-row risk-row--bottom">
            <div className="risk-col risk-col--text">
              <h4>{t("risk.operational.title")}</h4>
              <ul>
                {(Array.isArray(riskOperationalItems) ? riskOperationalItems : []).map((it, i) => (
                  <li key={i}>{it}</li>
                ))}
              </ul>
            </div>
            <div className="risk-col risk-col--image">
              <img src={Niche4} alt={t("risk.images.penthouseAlt")} className="risk-image" />
            </div>
          </div>
        </div>
      </section>

      {/* System  */}
      <section className="system">
        <h3 className="system_title">{t("system.title").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</h3>
        <div className="system__wrapper">

          <div className="system_card">
            <img src={System_1} alt="System Image 1" />

            {/* SYSTEM CARD BOX  */}
            <div className="system_card_box">
              <h3 className="card_box_suptitle">30 000+</h3>
              <p className="card_box_text">{t("system.text_1").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>

            <div className="system_card_box">
              <h3 className="card_box_suptitle">15+</h3>
              <p className="card_box_text">{t("system.text_2").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>

            <div className="system_card_box">
              <h3 className="card_box_suptitle">8+</h3>
              <p className="card_box_text">{t("system.text_3").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>

            <div className="system_card_box">
              <h3 className="card_box_suptitle">5000+</h3>
              <p className="card_box_text">{t("system.text_4").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>

            <img src={System_2} alt="System Image 2" />
            {/* /SYSTEM CARD BOX  */}

            {/* SYSTEM CARD BLOCK  */}
            <div className="system_card_block">
              <h3 className="system_card_block_suptitle">{t("system.suptitle_1")}</h3>
              <p className="system_card_block_text">{t("system.text_5").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>

            <div className="system_card_block">
              <h3 className="system_card_block_suptitle">{t("system.suptitle_2")}</h3>
              <p className="system_card_block_text">{t("system.text_6").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>

            <div className="system_card_block">
              <h3 className="system_card_block_suptitle">{t("system.suptitle_3")}</h3>
              <p className="system_card_block_text">{t("system.text_7").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>

            {/* /SYSTEM CARD BLOCK  */}

          </div>
        </div>
      </section>

      {/* Questions  */}
      <section className="faq">
        <div className="faq__header">
          <h3 className="faq_title">{t("faq.title")}</h3>
          <p className="faq_subtitle">{t("faq.subtitle")}</p>
        </div>

        <div className="faq_menu">
          {faqItems.map((item) => {
            const isOpen = openFaq === item.id;

            return (
              <article className={`faq_item ${isOpen ? "open" : ""}`} key={item.id}>
                <button
                  type="button"
                  className="faq_button"
                  onClick={() => toggleFaq(item.id)}
                  aria-expanded={isOpen}
                >
                  <span className="faq_question">{item.question}</span>
                  <span className={`faq_icon ${isOpen ? "open" : ""}`} aria-hidden="true">
                    <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-plus"}`}></i>
                  </span>
                </button>
                <div className={`faq_answer ${isOpen ? "open" : ""}`}>
                  <p>{item.answer}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="form">
        <div className="form__wrapper">
          <div className="form__content">
            <div className="form_text__box">
              <h4 className="form_title">{t("form.title").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</h4>
              <p className="form_text">{t("form.text").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
              
              </p>
            </div>

            <div className="form_field_group">
              <ul className="form_menu">
                {formFields.map((field) => (
                  <li key={field.id} className={`form_item ${field.isOpen ? "open" : ""}`}>
                    <button
                      type="button"
                      className="form_field_button"
                      onClick={() => toggleFormField(field.id)}
                      aria-expanded={field.isOpen}
                    >
                      <span>{field.selected}</span>
                      <i className={`fa-solid fa-chevron-down form_icon ${field.isOpen ? "open" : ""}`}></i>
                    </button>

                    <div className={`form_dropdown ${field.isOpen ? "open" : ""}`}>
                      <ul className="form_dropdown_list">
                        {field.options.map((option) => (
                          <li key={option} className="form_dropdown_item">
                            <button type="button" onClick={() => selectFormOption(field.id, option)}>
                              {option}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>

              <span className="form_span">{t("form.span").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</span>
              <button className="form_btn" type="button">{t("form.btn")}</button>
              <span className="form_privacy">{t("form.privacy").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</span>
            </div>
          </div>
        </div>
      </section>


    </main>
  );
}

export default Main;
