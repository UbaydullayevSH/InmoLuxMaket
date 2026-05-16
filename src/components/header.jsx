import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./header.css"
import i18n from "./i18n/i18njs/i18n";

import { useTranslation } from "react-i18next";
import Icon from "../assets/svg/иконка.svg"

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const { t } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "ru");
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  const menuItems = [
    { nameKey: "header.list_1", id: "list_1" },
    { nameKey: "header.list_2", id: "list_2" },
    { nameKey: "header.list_3", id: "list_3" },
    { nameKey: "header.list_4", id: "list_4" },
  ];

  return (
    <header className="header">
      {/* Верхняя навигация */}
      <nav className={scrolled ? "header__nav_top scrolled" : "header__nav_top"}>

        {/* Меню для бургер-версии */}
        <ul className={`menu menu-bottom ${menuOpen ? "active" : ""}`}>
          {menuItems.map((item, index) => (
            <li key={index} className="menu_list">
              <a href={`#${item.id}`} >
                {t(item.nameKey)}
              </a>
            </li>
          ))}

          {/* Дополнительные элементы для мобильного меню */}
          <div className="menu__extra mobile-only">
            <div className="menu__phone">

              <span>
                <i className="fa-solid fa-phone header_icon"></i>
                +34 609 868 314
              </span>
            </div>
            <button className="header_btn">{t("header.btn")}</button>
            {/* Переключатель языка */}
            <div className="lang-switch">
              <button
                className={`lang-btn_header ${lang === "ru" ? "active" : ""}`}
                onClick={() => changeLanguage("ru")}
              >
                RU
              </button>
              <button
                className={`lang-btn_header ${lang === "uz" ? "active" : ""}`}
                onClick={() => changeLanguage("uz")}
              >
                EN
              </button>
            </div>
          </div>
        </ul>

        {/* Иконка */}
        <img src={Icon} alt="иконка" />

        {/* Инфо-блок для десктопа */}
        <div className="infos desktop-only">
          {/* Переключатель языка */}
          <div className="lang-switch">
            <button
              className={`lang-btn_header ${lang === "ru" ? "active" : ""}`}
              onClick={() => changeLanguage("ru")}
            >
              RU
            </button>
            <button
              className={`lang-btn_header ${lang === "uz" ? "active" : ""}`}
              onClick={() => changeLanguage("uz")}
            >
              EN
            </button>
          </div>
          <span className="telephone">+34 609 868 314</span>

          <i className="fa-solid fa-phone header_icon"></i>
          <button className="header_btn">{t("header.btn")}</button>
        </div>

        {/* Бургер */}
        <div
          className={`burger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Нижняя навигация */}
      <nav className="header__nav_bottom">
        <ul className="menu_bottom">
          <li className="menu_list">{t("header.sell")}</li>
          <li className="menu_list">{t("header.buy")}</li>
          <li className="menu_list">{t("header.invest")}</li>
        </ul>
      </nav>
    </header>

  );
}

export default Header;