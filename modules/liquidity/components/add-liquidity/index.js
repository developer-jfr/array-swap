import Image from "next/image";
import LinearButton from "../../../../components/buttons/linear-button";
import classes from "./index.module.scss";

const selectDown = "/assets/images/icons/select-down-2.svg";
const EtherumBlack = "/assets/images/icons/black-ethrerum.svg";

const AddLiquitidy = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.liquidityNaming}>
      <h2>Your Liquidity</h2>
      <p>Receive LP tokens and earn 0.17% trading fees</p>
      </div>
      <div className={classes.validWrapp}>
        <h2>CHOOSE A VALID PAIR</h2>
        <div className={classes.validGroup}>
        <div className={classes.validSelectGroup}>
          <div>
            <div className={classes.cryptoSelect}>
              <div className="is-flex is-align-items-center">
              <Image src={EtherumBlack} height={22} width={22} />
              <span className="ml-3">0.1</span>
              </div>
              <img src={selectDown} height={15} width={15} />
            </div>
            <p className={`t-2 ${classes.item}`}>LP reward APR</p>
          </div>
          <div>
            <div className={classes.cryptoSelect}>
              <div className="is-flex is-align-items-center">
              <Image src={EtherumBlack} height={22} width={22} />
              <span className="ml-3">CAKE</span>
              </div>
              <img src={selectDown} height={15} width={15} />
            </div>
            <div>
           <div className="is-flex is-flex-direction-row-reverce is-justify-content-space-between">
            <p className={`pt-2 ${classes.mobileItem}`}>LP reward APR</p>
           <p className='pt-2'>0.86%</p>
           </div>
            </div>
          </div>
        </div>
        <LinearButton text="+ Add Liquidity" width="100%" />
        </div>
      </div>
      <div className={classes.liquidityFooter}>
        By adding liquidity you'll earn 0.17% of all trades on this pair
        proportional to your share of the pool. Fees are added to the pool,
        accrue in real time and can be claimed by withdrawing your liquidity.
      </div>
    </div>
  );
};

export default AddLiquitidy;
