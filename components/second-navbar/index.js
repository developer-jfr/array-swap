import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ConnectedWallet from "../buttons/connectedWalletBtn";
import LinearButton from "../buttons/linear-button";
import ConnectWalletModal from "../../components/connectWallet";

import classes from "./index.module.scss";
import { useAccount } from "wagmi";
import { useMediaQuery } from "react-responsive";

const Logo = "/assets/images/svg/logo-white.svg";
const Hamburger = "/assets/images/icons/hamburger.svg";
const CloseHanburger = "/assets/images/icons/close-hamburger.svg";

const SecondNavbar = () => {
  const [openWallet, setOpenWallet] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);
  const { isConnected, address } = useAccount();
  const isNavbarShow = useMediaQuery({ query: '(max-width: 1023px)' })
  const isDesktop1200 = useMediaQuery({
    query: '(max-width: 1350px)'
  });
  const router = useRouter();

  const menuClasses = classNames("navbar-menu", {
    ["is-active"]: burgerOpen,
  });


  let connectedWallet = false;
  if (router.asPath.includes("swap")) {
    connectedWallet = true;
  }

  const getIsActive = (curr) => {
    if (router.pathname === curr) {
      return classes.active;
    }
  };

  return (
    <>
      {openWallet && <ConnectWalletModal openWallet={openWallet} setOpenWallet={setOpenWallet} />}
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

          <a
            role="button"
            className="navbar-burger  is-flex is-justify-content-center is-align-items-center "
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

        <div
          id="navbarBasicExample"
          className={`${menuClasses} ${classes.navbarMenu}`}
        >
          <div
            className={`navbar-start ml-5 pl-5 ${classes.navbarStart}`}
            style={{ gap: "5px" }}
          >
            <div
              className={`navbar-item ${classes.navbarItem} ${getIsActive(
                "/swap"
              )}`}
              onClick={() => setBurgerOpen(false)}
            >
              <Link href="/swap">
                <a >SWAP</a>
              </Link>
            </div>
            <div
             className={`navbar-item ${classes.navbarItem} ${getIsActive(
              "/pool"
            )}`}
            onClick={() => setBurgerOpen(false)}
            >
              <Link href="/pool" >
                <a> POOL</a>
              </Link>
            </div>
            <div
              className={`navbar-item ${classes.navbarItem} ${getIsActive(
                "/charts"
              )}`}
              onClick={() => setBurgerOpen(false)}
            >
              <Link href="/charts" >
                <a >CHARTS</a>
              </Link>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <div style={{width: '100%'}} className={`${isNavbarShow && 'is-flex is-justify-content-center'}`} >
                  {isConnected ? (
                    <ConnectedWallet text={address} />
                  ) : (
                    <LinearButton
                    fontSize={isDesktop1200 && '14px'} 
                      text="Connect Wallet"
                      setOpenWallet={setOpenWallet}
                      link="#"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default SecondNavbar;
