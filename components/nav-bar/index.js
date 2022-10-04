import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import classnames from "classnames";
import LinearButton from "../buttons/linear-button";

import classes from "./index.module.scss";
import useMediaQuery from "react-responsive";

const Logo = "/assets/images/svg/logo.svg";
const Hamburger = "/assets/images/icons/hamburger.svg";
const CloseHanburger = "/assets/images/icons/close-hamburger.svg";

const NavBar = ({burgerOpen, setBurgerOpen}) => {
  const isDesktopScreen = useMediaQuery({ query: "(max-width: 1023px)" });
  const menuClasses = classnames("navbar-menu", {
    ["is-active"]: burgerOpen,
  });

  return (
    <nav
      className={`navbar ${classes.customNavbar}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className={`navbar-brand ${classes.navbarBrand}`}>
        <Link href="/">
          <Image
            className="navbar-item is-clickable"
            src={Logo}
            height={28}
            width={140}
          />
        </Link>
        <div className="is-flex is-align-items-center">
        <button className={classes.linearBtn}>Launch App</button>
        <a
          role="button"
          className={`navbar-burger is-flex is-justify-content-center is-align-items-center ${burgerOpen && "is-active"}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          
          {burgerOpen ? (
            <img
              className={classes.icon}
              src={CloseHanburger}
              onClick={() => setBurgerOpen(false)}
              alt="CloseHanburger"
            />
          ) : (
            <img
              className={classes.icon}
              onClick={() => setBurgerOpen(true)}
              src={Hamburger}
              alt="Hamburger"
            />
          )}
        </a>
        </div>
      </div>

      <div id="navbarBasicExample" className={`${menuClasses} ${classes.navbarMenu}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className={`buttons ${classes.buttonGroup}`}>
              <button className={classes.customBtn}>$ARS on Uniswap</button>
              {isDesktopScreen && <LinearButton  /> }
            </div>
          </div>
          <div className={`navbar-item ${classes.socialLink}`}>
            <Link href='/' >
            Medium
            </Link>
          </div>
          <div className={`navbar-item ${classes.socialLink}`}>
            <Link href='/' >
            Twitter
            </Link>
          </div>
          <div className={`navbar-item ${classes.socialLink}`}>
            <Link href='/' >
            Telegram
            </Link>
          </div>
          <div className={`navbar-item ${classes.socialLink}`}>
            <Link href='/' >
            Discord
            </Link>
          </div>
          <div className={`navbar-item ${classes.socialLink}`}>
            <Link href='/' >
            Documentaion
            </Link>
          </div>
          <div className={`navbar-item ${classes.socialLink}`}>
            <Link href='/' >
            Github
            </Link>
          </div>
        </div>
      </div>

      <div id="navbarBasicExample" className={`${menuClasses} ${classes.desktopMenu}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className={`buttons ${classes.buttonGroup}`}>
              <button className={classes.customBtn}>$ARS on Uniswap</button>
              <LinearButton  /> 
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
