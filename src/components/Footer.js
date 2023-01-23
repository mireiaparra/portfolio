export function Footer() {
  return (
    <footer className="footer">
      <h2>Contactemos</h2>
      <form action="https://formspree.io/f/mayznzyy" method="POST">
        <fieldset className="footer__form" id="contact-form">
          <label for="full-name">Nombre</label>
          <input
            type="text"
            name="full-name"
            id="full-name"
            placeholder="Mireia Parra"
            required=""
          />
          <label for="email-address">Email</label>
          <input
            type="email"
            name="email-address"
            id="email-address"
            placeholder="mirmalparra@gmail.com"
            required=""
          />
          <label for="message">Mensaje</label>
          <textarea
            rows="5"
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
        <input type="submit" value="Submit" />
      </form>
    </footer>
  );
}
