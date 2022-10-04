import Image from "next/image";
import classes from "./index.module.scss";

const EthrerumCyan = "/assets/images/icons/ethrerum-cyan.svg";
const ArrowLeftWithoutLine = "/assets/images/icons/arrow-left-without-line.svg";
const closeRed = "/assets/images/icons/close-red.svg";
const turtles = "/assets/images/svg/tutle.svg";

const BuyNft = ({setShowNft}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.modalBody}>
      <div className={classes.modalNaming}>
        <h2>Buy 5 NFT’s</h2>
        <span>Clear</span>
      </div>
      <div className="pt-3">
        <div className={classes.card}>
          <div className="is-flex is-align-items-center">
          <Image src={turtles} height={80} width={80} />
          <div className={classes.cardTags}>
            <span>#2311</span>
            <div>
              <Image src={EthrerumCyan} height={24} width={24} />
              <p>3.3</p>
            </div>
          </div>
          </div>
          <Image src={closeRed} height={14} width={14} />
        </div>
        <div className={classes.card}>
          <div className="is-flex is-align-items-center">
          <Image src={turtles} height={80} width={80} />
          <div className={classes.cardTags}>
            <span>#2311</span>
            <div>
              <Image src={EthrerumCyan} height={24} width={24} />
              <p>3.3</p>
            </div>
          </div>
          </div>
          <Image src={closeRed} height={14} width={14} />
        </div>
      </div>
      <div className={classes.totalWrapp}>
        <div>
        <Image onClick={() => setShowNft(false)} className='is-clickable' src={ArrowLeftWithoutLine} height={15} width={8} />
        <div>Buy Total: <strong>10.000</strong> ETH</div>
        </div>
        <button>BUY</button>
      </div>
      </div>
    </div>
  );
};

export default BuyNft;
