import css from "./Projects.module.css";

function Projects() {
  return (
    <div>
      <div className={css.headlineContainer}>
        <h2 className={css.headline}>Projects</h2>
      </div>
      <div className={css.listContainer}>
        <ul className={css.projectList}>
          <li className={css.projectItem}>
            <a
              className={css.link}
              target="_blank"
              rel="noreferrer noopener"
              href="https://martadomzalska.github.io/goit-react-hw-08-phonebook/"
            >
              phonebook
            </a>
          </li>
          <li className={css.projectItem}>
            <a
              className={css.link}
              target="_blank"
              rel="noreferrer noopener"
              href="https://martadomzalska.github.io/image-finder/"
            >
              image-finder
            </a>
          </li>
          <li className={css.projectItem}>
            <a
              className={css.link}
              target="_blank"
              rel="noreferrer noopener"
              href="https://martadomzalska.github.io/movie-finder/"
            >
              movie-finder
            </a>
          </li>
          <li className={css.projectItem}>
            <a
              className={css.link}
              target="_blank"
              rel="noreferrer noopener"
              href="https://martadomzalska.github.io/GoIT-Wallet-Frontend/"
            >
              GOIT-Wallet-Frontend
            </a>
          </li>
          <li className={css.projectItem}>
            <a
              className={css.link}
              target="_blank"
              rel="noreferrer noopener"
              href="https://sind83.github.io/MellowYellow/"
            >
              MellowYellow
            </a>
          </li>
          <li className={css.projectItem}>
            <a
              className={css.link}
              target="_blank"
              rel="noreferrer noopener"
              href="https://martadomzalska.github.io/goit-react-hw-02-feedbackk/"
            >
              feedback
            </a>
          </li>
          <li className={css.projectItem}>
            <a
              className={css.link}
              target="_blank"
              rel="noreferrer noopener"
              href="https://martadomzalska.github.io/goit-react-hw-01-components/"
            >
              goit-react-hw-01-components
            </a>
          </li>
          <li className={css.projectItem}>
            <a
              className={css.link}
              target="_blank"
              rel="noreferrer noopener"
              href="https://martadomzalska.github.io/goit-js-hw-10/"
            >
              goit-js-hw-10
            </a>
          </li>
          <li className={css.projectItem}>
            <a
              className={css.link}
              target="_blank"
              rel="noreferrer noopener"
              href="https://martadomzalska.github.io/goit-js-hw-09/"
            >
              goit-js-hw-09
            </a>
          </li>
          <li className={css.projectItem}>
            <a
              className={css.link}
              target="_blank"
              rel="noreferrer noopener"
              href="https://martadomzalska.github.io/goit-js-hw-08/"
            >
              goit-js-hw-08
            </a>
          </li>
          <li className={css.projectItem}>
            <a
              className={css.link}
              target="_blank"
              rel="noreferrer noopener"
              href="https://martadomzalska.github.io/goit-js-06/"
            >
              goit-js-06
            </a>
          </li>{" "}
          <li className={css.projectItem}>
            <a
              className={css.link}
              target="_blank"
              rel="noreferrer noopener"
              href="https://martadomzalska.github.io/goit-markup-hw-08/"
            >
              goit-markup-hw-08
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
//https://martadomzalska.github.io/movie-finder/
export default Projects;
