import Navbar from "./../../components/nav-bar";
import Footer from "./../../components/footer";
import { useRouter } from "next/router";
import SecondNavbar from "../../components/second-navbar";
import RankingNavbar from "../../components/ranking-navbar";
import { useState } from "react";

const Page = ({ children }) => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const router = useRouter();

  let renderNavbar = false;
  let renderRankingNav = false;
  if (
    router.asPath.includes('charts') || router.asPath.includes('swap') || router.asPath.includes('liquidity') 
  ) {
    renderNavbar = true;
  } else if (router.asPath.includes('ranking')) {
    renderRankingNav = true
    }
  return (
    <>
      {renderNavbar ? <SecondNavbar /> : renderRankingNav ? <RankingNavbar /> :  <Navbar burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen}  /> }
      {children}
      <Footer burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
    </>
  );
};

export default Page;
