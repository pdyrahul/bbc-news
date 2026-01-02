"use client";
import { useState } from "react";
import useScrollDirection from "@/hooks/useScrollDirection";
import NavList from "@/components/NavList/NavList";
import Link from "next/link";


export default function Header({ data }) {
  const navData = data;
  const isScrollingUp = useScrollDirection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      {/* TOP STICKY HEADER */}
      <div className="top-header border-bottom">
        <div className="container-fluid d-flex align-items-center justify-content-between py-2">
          {/* LEFT – Hamburger / Close */}
          <button
            className="btn p-0 border-0 bg-transparent hamburger"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <i className="bi bi-x-lg fs-3"></i>
            ) : (
              <i className="bi bi-list fs-3"></i>
            )}
          </button>

          {/* CENTER – Logo */}
          <Link href="/" className="nav-item">
            <span className="fw-bold fs-4 justify-content-center d-flex  flex-grow-1 gap-2">
              <span className="BBC_Logo">B</span>
              <span className="BBC_Logo">B</span>
              <span className="BBC_Logo">C</span>
            </span>
          </Link>
          {/* RIGHT – Auth */}
          <div className="  d-none d-md-flex gap-3 align-items-center">
            <button className="btn btn-dark btn-sm d-flex align-items-center gap-1">
              <i className="bi bi-person-plus"></i>
              Register
            </button>
            <button className="btn btn-outline-dark btn-sm d-flex align-items-center gap-1">
              <i className="bi bi-box-arrow-in-right"></i>
              Sign In
            </button>
          </div>
          <div className="d-md-none">
            <button className="btn btn-dark btn-sm d-flex align-items-center gap-1">
              <i className="bi bi-person-plus"></i>
            </button>
          </div>
        </div>
      </div>

      {/* MAIN + SUB NAV  */}
      <div className={`nav-wrapper d-none d-md-block ${isScrollingUp ? "" : "nav-hidden"}`}>
        {/* Main navigation */}
        <nav className="border-bottom">
          <NavList
            className="nav justify-content-center"
            data={navData.mainMenu}
            variant="main"
          />
        </nav>

        {/* Sub navigation */}
        <div className="border-bottom border-dark small">
          <ul className="nav justify-content-center ">
            {navData.newsSubMenu.map((item, index) => (
              <li key={index} className="nav-item fw-semibold">
                <Link href={item.url} className="nav-link text-dark fw-semibold fs-12 nav-hover:hover">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/*  sticky header) */}
      <aside className={`side-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="input-group mb-3">
          <span className="input-group-text">
            <i className="bi bi-search"></i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search news, topics and more"
          />
        </div>

        <NavList
          className="list-unstyled fw-semibold"
          data={navData.mainMenu}
          variant="sidebar"
        />
      </aside>

      {/* OVERLAY */}
      {isMenuOpen && (
        <div className="overlay" onClick={closeMenu}></div>
      )}
    </header>
  );
}
