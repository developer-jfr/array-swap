import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useAccount } from "wagmi";
import ConnectedWallet from "../buttons/connectedWalletBtn";
import ConnectWalletModal from "./../connectWallet";
import LinearButton from "../buttons/linear-button";

import classes from "./index.module.scss";

const Logo = "/assets/images/svg/logo-white.svg";
const Hamburger = "/assets/images/icons/hamburger.svg";
const CloseHanburger = "/assets/images/icons/close-hamburger.svg";
const RankingNavbar = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [openWallet, setOpenWallet] = useState(false);
  const { isConnected, address } = useAccount();

  return (
    <>
      {openWallet && (
        <ConnectWalletModal
          openWallet={openWallet}
          setOpenWallet={setOpenWallet}
        />
      )}

      <nav
        className={`navbar ${classes.customNavbar}`}
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
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

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start ml-5 pl-5" style={{ gap: "5px" }}>
            <div className={`navbar-item ${classes.navbarItem}`}>
              <Link href="/">Home</Link>
            </div>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {isConnected ? (
                  <ConnectedWallet text={address}  />
                ) : (
                  <LinearButton text="Connect Wallet" setOpenWallet={setOpenWallet} />
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default RankingNavbar;
