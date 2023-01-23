import React, { useState, useEffect } from "react";

export function Footer() {
const showBelow = 400;
const [show, setShow] = useState(false);
const scrollToTop = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` });
  };

   const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
      window.addEventListener(`scroll`, handleScroll);
      return () => window.removeEventListener(`scroll`, handleScroll);
  });

  return (
    <footer className="footer">
      <h2 className="footer__title">Contactemos</h2>
      <form action="https://formspree.io/f/mayznzyy" method="POST">
        <fieldset className="footer__form" id="contact-form">
          <input
          className="footer__form--input"
            type="text"
            name="full-name"
            id="full-name"
            placeholder="Nombre"
            required=""
          />
          <input
           className="footer__form--input"
            type="email"
            name="email-address"
            id="email-address"
            placeholder="Email"
            required=""
          />
          <textarea
           className="footer__form--input"
            name="message"
            id="message"
            placeholder="Escribe aquí lo que me quieras decir"
            required=""
          ></textarea>
          <input
            type="hidden"
            name="email-subject"
            id="email-subject"
            value="Contact Form Submission"
          />
        </fieldset>
        <input className="footer__form--submit" type="submit" value="Enviar" />
      </form>
      {show && <button className="footer__button"><i className=" fa-solid fa-up-long" onClick={scrollToTop}></i></button> }
    </footer>
  );
}
