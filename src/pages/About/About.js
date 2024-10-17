import css from "./About.module.css";

function About() {
  return (
    <div className={css.ssss}>
      <div className={css.section1}>
        <p className={css.description}>
          Born in 2000 in Poland, now based in Germany. Passionate about
          creating clean, efficient web solutions, with a growing fondness for
          React ❤.
        </p>
      </div>
      <div className={css.section2}>
        <div className={css.techIKnowDiv}>
          <p className={css.techDescription}>
            <br />
            Technologies I use:
          </p>
          <div className={css.technologiesContainer}>
            <div className={css.techItem}>HTML5</div>
            <div className={css.techItem}>CSS3</div>
            <div className={css.techItem}>SASS</div>
            <div className={css.techItem}>JavaScript</div>
            <div className={css.techItem}>React</div>
            <div className={css.techItem}>Node.JS</div>
            <div className={css.techItem}>REST API</div>
            <div className={css.techItem}>Express.js</div>
            <div className={css.techItem}>JWT</div>
            <div className={css.techItem}>MongoDB</div>
            <div className={css.techItem}>NPM</div>
            <div className={css.techItem}>React-Router</div>
            <div className={css.techItem}>Figma</div>
            <div className={css.techItem}>Postman</div>
            <div className={css.techItem}>Trello</div>
          </div>
        </div>
        <div>
          <p className={css.techDescription}>
            <br />
            What I'm about to learn next:
          </p>
          <div className={css.technologiesContainer}>
            <div className={css.techItem}>React Native</div>
            <div className={css.techItem}>TypeScript</div>
          </div>
        </div>

        <div className={css.education}>
          {/* <a>Curriculum Vitae</a> */}
          <a className={css.link} href="public/Marta-certificate.pdf" download>
            Certificate
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
