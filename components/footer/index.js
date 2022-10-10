import Image from "next/image";
import Link from "next/link";
import LinearButton from "../buttons/linear-button";

import classes from "./index.module.scss";

import classnames from "classnames";
import useMediaQuery from "react-responsive";
import { useState } from "react";

const Logo = "/assets/images/svg/logo-white.svg";
const Hamburger = "/assets/images/icons/hamburger.svg";
const CloseHanburger = "/assets/images/icons/close-hamburger.svg";

const Footer = ({burgerOpen, setBurgerOpen}) => {
  const isDesktopScreen = useMediaQuery({ query: "(max-width: 1023px)" });
  

  return (
    <footer
      className={`navbar ${classes.customNavbar}`}
      role="navigation"
      aria-label="main navigation"
    >
      <div className={`navbar-brand ${classes.footerBrank}`}>
        <Link href="/">
          <Image
            className="navbar-item is-clickable"
            src={Logo}
            height={28}
            width={140}
          />
        </Link>

        <a
          role="button"
          className="navbar-burger is-flex is-justify-content-center is-align-items-center"
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

      <div id="navbarBasicExample" className='navbar-menu'>
        <div className="navbar-start" >
        <div className={`navbar-item ${classes.footerItem}`}>
            <Link href='/' >
            Medium
            </Link>
          </div>
          <div className={`navbar-item ${classes.footerItem}`}>
            <Link href='/' >
            Twitter
            </Link>
          </div>
          <div className={`navbar-item ${classes.footerItem}`}>
            <Link href='/' >
            Telegram
            </Link>
          </div>
          <div className={`navbar-item ${classes.footerItem}`}>
            <Link href='/' >
            Discord
            </Link>
          </div>
          <div className={`navbar-item ${classes.footerItem}`}>
            <Link href='/' >
            Documentaion
            </Link>
          </div>
          <div className={`navbar-item ${classes.footerItem}`}>
            <Link href='/' >
            Github
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
