import { NavLink } from "react-router-dom";
// import HomePage from "../../pages/HomePage/HomePage";
// import About from "./pages/About/About";
// import Projects from "./pages/Projects/Projects";
// import Contact from "./pages/Contact/Contact";
import styled from "styled-components";
import css from "./Header.module.css";

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <nav className={css.navigation}>
      <StyledLink to="/" className={css.link}>
        Home
      </StyledLink>
      <StyledLink to="/about" className={css.link}>
        About
      </StyledLink>
      <StyledLink to="/projects" className={css.link}>
        Projects
      </StyledLink>
      <StyledLink to="/contact" className={css.link}>
        Contact
      </StyledLink>
    </nav>
    // <nav className={css.navigation}>
    //   <a href="/" className={css.link}>
    //     Home
    //   </a>
    //   <a href="/about" className={css.link}>
    //     About
    //   </a>
    //   <a href="/projects" className={css.link}>
    //     Projects
    //   </a>
    //   <a href="/Contact" className={css.link}>
    //     Contact
    //   </a>
  );
}

export default Header;
