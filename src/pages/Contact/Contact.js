import css from "./Contact.module.css";

function Contact() {
  return (
    <div>
      <p className={css.description}>Open to work.</p>
      <nav className={css.nav}>
        <a
          className={css.link}
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/marta-domzalska-3777ab295/"
        >
          linkedin
        </a>
        <a
          className={css.link}
          target="_blank"
          rel="noreferrer noopener"
          href="mailto:domzalskam4@gmail.com"
        >
          domzalskam4@gmail.com
        </a>
      </nav>
    </div>
  );
}

export default Contact;
