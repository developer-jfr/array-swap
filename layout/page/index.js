import Navbar from "./../../components/nav-bar";
import Footer from "./../../components/footer";
import { useRouter } from "next/router";
import SecondNavbar from "../../components/second-navbar";
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
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";

const alchemyId = '0A4psHhVUg4Mtu6ZhuISMyCNAY34uLpm';

// Configure chains & providers with the Alchemy provider.
// Two popular providers are Alchemy (alchemy.com) and Infura (infura.io)
const { chains, provider, webSocketProvider } = configureChains(defaultChains, [
  alchemyProvider({ apiKey: '0A4psHhVUg4Mtu6ZhuISMyCNAY34uLpm' }),
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
    }),
    new CoinbaseWalletConnector({
      chains,
    }),
  ],
  provider,
  webSocketProvider,
});

const Page = ({ children }) => {
  const router = useRouter();

  let renderNavbar = false;
  if (
    router.asPath.includes("pool") ||
    router.asPath.includes("swap") ||
    router.asPath.includes("selected-chart") ||
    router.asPath.includes("charts")
  ) {
    renderNavbar = true;
  }
  return (
    <WagmiConfig client={client}>
      {renderNavbar ? <SecondNavbar /> : <Navbar />}
      {children}
      <Footer />
    </WagmiConfig>
  );
};

export default Page;
