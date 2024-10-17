import { useState, useEffect } from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import css from "./SharedLayout.module.css";

function SharedLayout() {
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const updateGradient = () => {
      setGradientPosition((prev) => (prev + 0.5) % 360);
    };

    const intervalId = setInterval(updateGradient, 30); // Zmień wartość dla szybszej lub wolniejszej animacji

    return () => clearInterval(intervalId); // Sprzątanie, aby zatrzymać animację po unmount komponentu
  }, []);

  return (
    <div
      className={css.container}
      style={{
        background: `linear-gradient(${gradientPosition}deg, #ede8f5, #adbbda, #8697c4)`,
        height: "100vh",
        display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <div className={css.license}>© Marta Domżalska</div>
    </div>
  );
}

export default SharedLayout;
