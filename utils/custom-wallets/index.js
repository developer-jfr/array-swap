import { Connector, Chain } from 'wagmi'
import { CoolWalletOptions, CoolWalletProvider } from 'cool-wallet-sdk'

export class CoolWalletConnector extends Connector{
  id = 'coolWallet'
   name = 'Cool Wallet'
   ready = true


  constructor(config) {
    super(config)
  };

  connect({chainId});

  async getProvider() {
    if (!this.#provider) {
      this.#provider = new CoolWalletProvider(this.options)
    }
    return this.#provider
  }

  // Implement other methods
  // connect, disconnect, getAccount, etc.
}