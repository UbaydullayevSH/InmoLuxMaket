import { useState } from "react";
import "./footer.css";
import i18n from "./i18n/i18njs/i18n";
import { useTranslation } from "react-i18next";
import Logo from "../assets/svg/иконка_2.svg";
function Footer() {
  const { t } = useTranslation();
  const [lang, setLang] = useState(i18n.language || "ru");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLang(lng);
  };

  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__top">
          <div className="footer__brand">
            <img src={Logo} alt="InmoLux Logo" />

            <div className="footer__social">
              <a href="#" aria-label="WhatsApp">
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a href="#" aria-label="Telegram">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="#" aria-label="Messenger">
                <i className="fa-brands fa-facebook-messenger"></i>
              </a>
              <a href="#" aria-label="Facebook">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>
          </div>

          <div className="footer__contacts">
            <div className="footer__contact-item">
              <span className="footer__label">{t("footer.phoneLabel")}</span>
              <a href="tel:+34609868314">+34 609 868 314</a>
              <a href="tel:+34952770782">+34 952 770 782</a>
            </div>
            <div className="footer__contact-item">
              <span className="footer__label">{t("footer.emailLabel")}</span>
              <a href="mailto:info@inmoluxgroup.com">{t("footer.email")}</a>
            </div>
          </div>

          <div className="footer__info">
            <div className="footer__contact-item">
              <span className="footer__label">{t("footer.addressLabel")}</span>
              <p>{t("footer.addressLine1")}</p>
              <p>{t("footer.addressLine2")}</p>
            </div>
            <div className="footer__contact-item">
              <span className="footer__label">{t("footer.workHoursLabel")}</span>
              <p>{t("footer.workHours")}</p>
            </div>
          </div>
        </div>

        <div className="footer__menu-section">
          <div className="footer__menu">
            <a href="#">{t("footer.menu.buyers")}</a>
            <a href="#">{t("footer.menu.sellers")}</a>
            <a href="#">{t("footer.menu.invest")}</a>
            <a href="#">{t("footer.menu.projects")}</a>
            <a href="#">{t("footer.menu.about")}</a>
            <a href="#">{t("footer.menu.contacts")}</a>
          </div>
          <div className="footer__lang footer__contact-item">
            <span className="footer__label">{t("footer.langLabel")}</span>
            <div className="lang-switch footer__lang-switch">
              <button
                className={`lang-btn ${lang === "ru" ? "active" : ""}`}
                onClick={() => changeLanguage("ru")}
              >
                RU
              </button>
              <button
                className={`lang-btn ${lang === "uz" ? "active" : ""}`}
                onClick={() => changeLanguage("uz")}
              >
                EN
              </button>
            </div>
          </div>
        </div>

        <div className="footer__bottom-row">
          <div className="footer__map-block">
            <div className="footer__section-title">{t("footer.howToGet")}</div>
            <button className="footer__action-btn">{t("footer.askButton")}</button>
          </div>
          <div className="footer__map">
            <iframe
              title="InmoLux Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.9181267647346!2d-4.888216!3d36.512573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd72d7f8c8f8f8f9%3A0x1234567890abcdef!2sAvenio%20Ricardo%20Soriano%2055%2C%2029602%20Marbella%2C%20Malaga!5e0!3m2!1sen!2ses!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "24px" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="footer__payments">
            <span>{t("footer.paymentLabel")}</span>
            <div className="footer__payment-icons">
              <i className="fa-brands fa-cc-visa"></i>
              <i className="fa-brands fa-cc-mastercard"></i>
              <i className="fa-brands fa-cc-amex"></i>
              <i className="fa-brands fa-cc-paypal"></i>
              <i className="fa-brands fa-cc-discover"></i>
            </div>
          </div>
        </div>

        <div className="footer__legal">
          <p>{t("footer.copyright")}</p>
          <div className="footer__policy">
            <a href="#">{t("footer.privacy")}</a>
            <a href="#">{t("footer.cookiePolicy")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;