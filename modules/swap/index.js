import Image from "next/image";
import classes from "./index.module.scss";

import LinearButton from "./../../components/buttons/linear-button";
import TransactionSettings from "./components/transaction-settings";
import { useState } from "react";
import SelectToken from "./components/select-token";
import BuyNft from "./components/buy-nft";
import TokenSelect from "../../components/select";
import ConnectWalletModal from '../../components/connectWallet';

const SmallArrowRight = "/assets/images/icons/small-arrow-right.svg";
const EtherumBlack = "/assets/images/icons/black-ethrerum.svg";
const ArrowDownWithoutLine = "/assets/images/icons/arrow-without-line-down.svg";
const SelectBlack = "/assets/images/icons/select-black.svg";
const Statisticks = "/assets/images/icons/statisticks.svg";
const Settings = "/assets/images/svg/settings.svg";

const Swap = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [ isInline, setIsInline ] = useState(false);
  const [ walletModalShow, setWalletModalShow ] = useState(false);

  const [showToken, setShowToken] = useState(false);
  const [showNft, setShowNft] = useState(false);

  return (
    <div>
      {showToken && <SelectToken setShowToken={setShowToken} />}
      {showSettings && (
        <TransactionSettings setShowSettings={setShowSettings} />
      )}
      {walletModalShow && <ConnectWalletModal />}
      <div
        className={`${classes.marketWrapp} ${showNft && !isInline ? classes.paddingLeft : ''}`}
      >
        <TokenSelect />
        <div className="is-flex ml-3 mt-5 pt-2">
          <Image src={Statisticks} width={50} height={50} />
          <div className={`ml-2 ${classes.statNaming}`}>
            <span>Net worth</span>
            <p>0.00000000</p>
          </div>
        </div>
      </div>
      <div className={`is-flex ${classes.inlineWrapp}`} style={{ background: "#F1F1F3"}}>
        <div className={`${classes.transactionMain} ${showNft && classes.mainInline}`}>
          <div className={`${classes.transactionWrapp} ${showNft && classes.transactionWrappActive} ${isInline && classes.isInline}`}>
            <div className="is-flex is-justify-content-end mb-3">
              <Image
                onClick={() => setShowSettings(true)}
                className="is-clickable"
                src={Settings}
                height={30}
                width={30}
              />
            </div>
            <div className={classes.transactionNaming}>
              <h2>Exchange</h2>
              <p>Swap NFT For Tokens</p>
            </div>
            <div className={classes.inputWrapp}>
              <input type="text" placeholder="0.1" />
              <div onClick={() => setShowToken(true)}>
                <Image src={EtherumBlack} height={30} width={30} />
                <span>ETH</span>
                <Image src={SelectBlack} height={20} width={20} />
              </div>
            </div>
            <div className="is-flex is-justify-content-center is-align-items-center pb-5">
              <Image
                className="is-clickable"
                src={ArrowDownWithoutLine}
                height={14}
                width={14}
              />
            </div>
            <div className={classes.secondInputWrapp}>
              <div className={classes.secondInputGroup}>
                <input type="text" placeholder="0.1" />
                <div onClick={() => setShowToken(true)}>
                  <Image src={EtherumBlack} height={30} width={30} />
                  <span>ETH</span>
                  <Image src={SelectBlack} height={20} width={20} />
                </div>
              </div>
              <div className={classes.secondNumberGroup}>
                <div>
                  <div className={classes.secondNumbers}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((el) => (
                      <span key={el}>{el}</span>
                    ))}
                  </div>
                  <div className={`is-clickable ${classes.more}`} onClick={() => {
                    setShowNft(true);
                    setIsInline(true);
                  }}>
                    <span>More</span>
                    <Image src={SmallArrowRight} height={10} width={10} />
                  </div>
                </div>
              </div>
            </div>
           <div>
           <LinearButton text="Connect wallet" width="100%" padding="24px 0"  link="#" />
           </div>
          </div>
        </div>
        {showNft && <BuyNft setIsInline={setIsInline} showNft={showNft} isInline={isInline} setShowNft={setShowNft} />}
      </div>
    </div>
  );
};

export default Swap;
