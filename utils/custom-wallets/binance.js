import { InjectedConnector } from "wagmi/connectors/injected";
import { Chain,Ethereum  } from 'wagmi';

export  class BinanceConnector extends InjectedConnector {
     id = "bsk";
     ready = true
    constructor({ chains, options: options_, }) {
        chains: Chain;
        options: 'shimChainChangedDisconnect' | 'shimDisconnect';
   };
    connect({ chainId }) {
        account;
        chain: {
            id;
            unsupported;
        };
        provider: Ethereum;
    }
    getProvider() {

    }
}