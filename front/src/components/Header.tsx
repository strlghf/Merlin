import logoImg from "../img/geforce.jpeg";
import "./Header.css";
import { useRef, type ChangeEvent } from "react";
import { useSearch } from "../hooks/useSearch";

export function Header () {
  const { search, setSearch, handleSearchSubmit } = useSearch();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.focus();
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setSearch(value);
  }

  return (
    <header className="main-header">
      <a href="#" className="header-logo">
        <img src={logoImg} alt="Home" />
      </a>

      <form className="header-search-form" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={search}
          ref={inputRef}
          onChange={handleChange}
          className="header-search-input"
          placeholder="Nvidia 2080 TI, AMD Ryzen 7200"
        />
        <button type="submit" className="header-search-btn" onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </form>

      {/* <input type="checkbox" id="menu-toggle" className="header-checkbox" />
      <div className="header-overlay"></div>
      
      <label htmlFor="menu-toggle" className="header-menu-icon">
        <span></span>
        <span></span>
        <span></span>
      </label>

      <nav className="header-nav-container">
        <a className="btn-free-class btn-mobile" href="#">Carrito</a>
      </nav>

      <a className="btn-free-class btn-desktop" href="#">Carrito</a> */}

      <div className="header-actions">
        <a href="/account" className="header-action-btn" aria-label="Mi Cuenta">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </a>

        <a href="/cart" className="header-action-btn header-cart-toggle" aria-label="Ver Carrito">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"></circle>
            <circle cx="20" cy="21" r="1"></circle>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
          </svg>
          <span className="cart-badge"></span>
        </a>
      </div>
    </header>
  )
}