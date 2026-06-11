import { useState, useEffect } from "react";
import logoImg from "../img/geforce.jpeg";
import "./SearchInput.css";

export function SearchInput ({ handleSearchSubmit, handleClick }) {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setVisible(false)
      } else {
        setVisible(true);
      }

      setLastScrollY(window.scrollY);
    }

    window.addEventListener("scroll", controlHeader);

    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  return (
    <header className={`main-header ${!visible ? "header-hidden" : ""}`}>
      <a href="#" className="header-logo">
        <img src={logoImg} alt="Home" />
      </a>

      <form className="header-search-form" onSubmit={handleSearchSubmit}>
        <input type="text" className="header-search-input" placeholder="Buscar..." />
        <button type="submit" className="header-search-btn" onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>
    </header>
  )
}