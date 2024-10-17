// import React, { useState, useEffect } from "react";
// import Header from "../../components/Header/Header";
import css from "./HomePage.module.css";

function HomePage() {
  //   const [gradientPosition, setGradientPosition] = useState(0);

  //   useEffect(() => {
  //     const updateGradient = () => {
  //       setGradientPosition((prev) => (prev + 0.5) % 360);
  //     };

  //     const intervalId = setInterval(updateGradient, 30); // Zmień wartość dla szybszej lub wolniejszej animacji

  //     return () => clearInterval(intervalId); // Sprzątanie, aby zatrzymać animację po unmount komponentu
  //   }, []);

  return (
    <div
    //   className={css.container}
    //   style={{
    //     background: `linear-gradient(${gradientPosition}deg, #ede8f5, #adbbda, #8697c4)`,
    //     height: "100vh",
    //     display: "flex",
    //     // justifyContent: "center",
    //     // alignItems: "center",
    //   }}
    >
      {/* <Header /> */}
      <h1 className={css.headline}>
        Marta <br />
        Domżalska
      </h1>
      <p className={css.description}>Aspiring full-stack developer.</p>
    </div>
  );
}

export default HomePage;
