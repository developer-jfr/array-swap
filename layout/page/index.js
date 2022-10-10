import Navbar from "./../../components/nav-bar";
import Footer from "./../../components/footer";
import { useRouter } from "next/router";
import SecondNavbar from "../../components/second-navbar";
import RankingNavbar from "../../components/ranking-navbar";
import { useState } from "react";
import {
  WagmiConfig,
  createClient,
  defaultChains,
  configureChains,
} from "wagmi";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";

import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const alchemyId = process.env.ALCHEMY_ID;

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ alchemyId }),
  publicProvider(),
]);

// Set up client
const client = createClient({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new WalletConnectConnector({
      chains,
      options: {
        qrcode: true,
      },
    })
  ],
  provider,
  webSocketProvider,
});

const Page = ({ children }) => {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const router = useRouter();

  let renderNavbar = false;
  let renderRankingNav = false;
  if (
    router.asPath.includes('pool') || router.asPath.includes('swap') || router.asPath.includes('selected-chart')
  ) {
    renderNavbar = true;
  } else if (router.asPath.includes('charts')) {
    renderRankingNav = true
    }
  return (
    <WagmiConfig client={client}>
      {renderNavbar ? <SecondNavbar /> : renderRankingNav ? <RankingNavbar /> :  <Navbar burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen}  /> }
      {children}
      <Footer burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
    </WagmiConfig>
  );
};

export default Page;
