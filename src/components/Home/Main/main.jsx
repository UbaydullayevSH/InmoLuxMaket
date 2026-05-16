import HeroImg from "../../../assets/png/hero_img.png";
import Niche_1 from "../../../assets/png/недвижимость_1.png";
import Niche_2 from "../../../assets/png/недвижимость_2.png";
import Gallery_1 from "../../../assets/webp/галерея_1.webp";
import Gallery_2 from "../../../assets/webp/галерея_2.webp";
import Gallery_3 from "../../../assets/webp/галерея_3.webp";
import Gallery_4 from "../../../assets/webp/галерея_4.webp";
import Gallery_5 from "../../../assets/webp/галерея_5.webp";
import "./main.css";    
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import { useEffect } from "react";

import React from "react"
function Main() {

  const { t } = useTranslation();
  const [activeIndex, setActiveIndex] = useState(-1);
  const [sellAnswersVisible, setSellAnswersVisible] = useState([false, false]);

  const sellGeneratedAnswers = [
    "Мы подготовим полный пакет документов и индивидуальную маркетинговую стратегию для быстрого и выгодного размещения вашего объекта на рынке.",
    "Оценим текущую рыночную цену, проведём профессиональную фотосъёмку и предложим оптимальные каналы продвижения для привлечения покупателей."
  ];

  function toggleSellAnswer(index) {
    setSellAnswersVisible(prev => {
      const copy = [...prev];
      copy[index] = !copy[index];
      return copy;
    });
  }

  const ratingData = [
    {
      title: t("rating.title_1"),
      goodTitle: t("rating.GoodTitle_1"),
      goodText: t("rating.GoodText_1"),
      badTitle: t("rating.BadTitle_1"),
      badText: t("rating.BadText_1")
    },
    {
      title: t("rating.title_2"),
      goodTitle: t("rating.GoodTitle_2"),
      goodText: t("rating.GoodText_2"),
      badTitle: t("rating.BadTitle_2"),
      badText: t("rating.BadText_2")
    },
    {
      title: t("rating.title_3"),
      goodTitle: t("rating.GoodTitle_3"),
      goodText: t("rating.GoodText_3"),

      badTitle: t("rating.BadTitle_3"),
      badText: t("rating.BadText_3")

    }
  ];

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {});

    return () => {
      Fancybox.destroy();
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('main section');
    if (!sections || sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const idx = Array.from(sections).indexOf(el);
            el.style.transitionDelay = `${(idx % 6) * 120}ms`;
            el.classList.add('in-view');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((s) => {
      s.classList.add('animate-section');
      observer.observe(s);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <main>
      {/* HERO */}
      <section className="hero">
        <div className="hero__wrapper">
          <div className="hero_block">
            <h1 className="hero_title">
              {t("hero.title").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}

            </h1>
            <p className="hero_text">
              {t("hero.text").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}

            </p>
            <button className="hero_btn">
              {t("hero.btn")}
            </button>
          </div>
          <img src={HeroImg} alt="Hero image" />

        </div>
      </section>

      {/* Stats  */}
      <section className="stats">
        <div className="stats__wrapper">

          {/* The First Card  */}
          <div className="stats_card">
            <h2 className="stats_title">5000+</h2>
            <p className="stats_text">   {t("stats.text").split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>
          </div>

          {/* The Second Card  */}
          <div className="stats_card">
            <h2 className="stats_title">99%</h2>
            <p className="stats_text">{t("stats.text_2")}</p>
          </div>

          {/* The Third Card  */}
          <div className="stats_card">
            <h2 className="stats_title">{t("stats.title")}</h2>
            <p className="stats_text">{t("stats.text_3")}</p>
          </div>
        </div>
      </section>

      {/* SELL  */}
      <section className="sell">
        <h3 className="sell_title">  {t("sell.title").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</h3>
        <p className="sell_text">{t("sell.text")}</p>
        <div className="sell__wrapper">

          {/* Card 1  */}
          <div className="sell_card">

            <div className="sell_card_top">
              <span className="sell_suptitle">  {t("sell.suptitle").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</span>
              <i
                className={`fa-solid fa-plus sell_icon ${sellAnswersVisible[0] ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); toggleSellAnswer(0); }}
              ></i>
            </div>
            <div className="sell_media">
              <img src={Niche_1} alt="Niche 1" className={sellAnswersVisible[0] ? 'hidden' : ''} />
              <div className={`sell_answer ${sellAnswersVisible[0] ? 'visible' : ''}`}>
                <p>{sellGeneratedAnswers[0]}</p>
              </div>
            </div>


          </div>

          {/* Card 2  */}
          <div className="sell_card">
            <div className="sell_card_top">
              <span className="sell_suptitle">  {t("sell.suptitle_2").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</span>
              <i
                className={`fa-solid fa-plus sell_icon ${sellAnswersVisible[1] ? 'active' : ''}`}
                onClick={(e) => { e.stopPropagation(); toggleSellAnswer(1); }}
              ></i>
            </div>
            <div className="sell_media">
              <img src={Niche_2} alt="Niche 2" className={sellAnswersVisible[1] ? 'hidden' : ''} />
              <div className={`sell_answer ${sellAnswersVisible[1] ? 'visible' : ''}`}>
                <p>{sellGeneratedAnswers[1]}</p>
              </div>
            </div>

          </div>

          {/* Card 3  */}

          <div className="sell_card">

            <div className="sell_card_top">
              <span className="sell_suptitle">  {t("sell.suptitle").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</span>
              <i className="fa-solid fa-plus sell_icon__active"></i>
            </div>
            <p className="sell_subtext">  {t("sell.subtext").split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
            </p>

            <div className="sell_card_bottom">
              <h3 className="sell_title_bottom">{t("sell.title_bottom")}</h3>
              <p className="sell_text_bottom">  {t("sell.title_bottom_2").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>
          </div>




        </div>

        <div className="sell_btn__block">
          <button className="sell_btn">{t("sell.btn")}</button>
        </div>

        <h3 className="sell_subtitle"> {t("sell.subtitle").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</h3>


      </section>

      {/* Rating  */}
      <section className="rating">
        <div className="rating__wrapper">

          {/* LEFT */}
          <ul className="rating__menu">
            {ratingData.map((item, index) => (
              <li
                key={index}
                className={`rating_list ${activeIndex === index ? "active" : ""}`}
              >
                {item.title}

                <button
                  className={`rate_btn ${activeIndex === index ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <i className="fa-solid fa-plus rate_icon"></i>
                </button>
              </li>
            ))}
          </ul>

          {/* RIGHT */}
          <div className="rating__infos" key={activeIndex >= 0 ? activeIndex : 0}>
            <h3 className="rating_suptitle">
              {ratingData[activeIndex >= 0 ? activeIndex : 0].goodTitle}
            </h3>

            <p className="rating_text">
              {ratingData[activeIndex >= 0 ? activeIndex : 0].goodText}
            </p>

            <h3 className="rating_suptitle">
              {ratingData[activeIndex >= 0 ? activeIndex : 0].badTitle}
            </h3>

            <p className="rating_text">
              {ratingData[activeIndex >= 0 ? activeIndex : 0].badText}
            </p>
          </div>

        </div>
      </section>

      {/* Process  */}
      <section className="process">
        <h3 className="process_title">{t("process.title").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</h3>
        <p className="process_text">{t("process.text")}</p>
        <div className="process__wrapper">
          {/* The first Card  */}
          <div className="process_card active">
            <span className="process_span">01</span>
            <p className="process_subtitle">{t("process.subtitle").split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>
            <div className="text_block">
              <p className="text_subtext">{t("process.subtext").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>
          </div>

          {/* The second Card  */}
          <div className="process_card">
            <span className="process_span">02</span>
            <p className="process_subtitle">{t("process.subtitle_2").split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>
            <div className="text_block">
              <p className="text_subtext">{t("process.subtext_2").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>
          </div>

          {/* The third Card  */}
          <div className="process_card">
            <span className="process_span">03</span>
            <p className="process_subtitle">{t("process.subtitle_3").split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>
            <div className="text_block">
              <p className="text_subtext">{t("process.subtext_3").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>
          </div>

          {/* The fourth Card  */}
          <div className="process_card">
            <span className="process_span">04</span>
            <p className="process_subtitle">{t("process.subtitle_4").split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>
            <div className="text_block">
              <p className="text_subtext">{t("process.subtitle_4").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>
          </div>

          {/* The fifth Card  */}
          <div className="process_card">
            <span className="process_span">05</span>
            <p className="process_subtitle">{t("process.subtitle_5").split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>
            <div className="text_block">
              <p className="text_subtext">{t("process.subtext_5").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery  */}
      <section className="gallery">
        <div className="gallery-grid">
          {/* Top left large image */}
          <div className="item item-large">
            <a data-fancybox="gallery" href={Gallery_1}>
              <img src={Gallery_1} alt="gallery 1" />
            </a>
          </div>

          {/* Top right vertical image */}
          <div className="item item-vertical">
            <a data-fancybox="gallery" href={Gallery_2}>
              <img src={Gallery_2} alt="gallery 2" />
            </a>
          </div>

          {/* Middle left */}
          <div className="item item-vertical">
            <a data-fancybox="gallery" href={Gallery_3}>
              <img src={Gallery_3} alt="gallery 3" />
            </a>
          </div>

          {/* Middle right */}
          <div className="item">
            <a data-fancybox="gallery" href={Gallery_4}>
              <img src={Gallery_4} alt="gallery 4" />
            </a>
          </div>

          {/* Bottom full width */}
          <div className="item item-wide">
            <a data-fancybox="gallery" href={Gallery_5}>
              <img src={Gallery_5} alt="gallery 5" />
            </a>
          </div>
        </div>
      </section>

      {/* Price  */}
      <section className="price">
        <div className="price__text_box">
        <h3 className="price_title">{t("price.title").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</h3>
        <p className="price_text">{t("price.text").split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}</p>
        </div>
        <div className="price__wrapper">
          {/* Menu  */}
          <ul className="price__menu">
            <PriceAccordion 
              question={t("price.question_1")}
              answer={t("price.answer_1")}
            />
            <PriceAccordion 
              question={t("price.question_2")}
              answer={t("price.answer_2")}
            />
            <PriceAccordion 
              question={t("price.question_3")}
              answer={t("price.answer_3")}
            />
            <PriceAccordion 
              question={t("price.question_4")}
              answer={t("price.answer_4")}
            />
            <PriceAccordion 
              question={t("price.question_5")}
              answer={t("price.answer_5")}
            />
            <PriceAccordion 
              question={t("price.question_6")}
              answer={t("price.answer_6")}
            />
            <PriceAccordion 
              question={t("price.question_7")}
              answer={t("price.answer_7")}
            />
          </ul>
        </div>
      </section>

      {/* Review  */}
      <section className="review">
        <div className="review__wrapper">

          {/* Review top part  */}
          <div className="review__top">
          <h4 className="review_title">{t("review.title").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</h4>
          <p className="review_text">{t("review.text").split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}</p>
              </div>

          {/* Review bottom part  */}
          <div className="review__bottom">
            <button className="review_btn">{t("review.button")}</button>
            <p className="review_subtext">{t("review.subtext").split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}</p>
          </div>
        </div>
      </section>
    </main >
  );
}

function PriceAccordion({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li className={`price__menu_item ${isOpen ? 'active' : ''}`}>
      <div className="price__question_wrapper" onClick={() => setIsOpen(!isOpen)}>
        <span>{question}</span>
        <i className={`fa-solid fa-plus plus_icon ${isOpen ? 'rotated' : ''}`}></i>
      </div>
      {isOpen && <div className="price__answer">{answer}</div>}
    </li>
  );
}

export default Main;
