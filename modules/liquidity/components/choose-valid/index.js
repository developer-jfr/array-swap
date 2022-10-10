import Image from "next/image";
import classes from "./index.module.scss";
import LinearButton from "../../../../components/buttons/linear-button";

const ArrowLeft = "/assets/images/icons/arrow-left.svg";
const SquarePlus = "/assets/images/icons/square-plus.svg";
const SquareDelete = "/assets/images/icons/square-delete.svg";

const ChooseValid = ({setChooseValid}) => {
  return (
    <div className="is-flex is-flex-direction-column">
    <div className={classes.container}>
      <div className={classes.arrowSection}>
        <Image className="is-clickable" onClick={() => setChooseValid(false)} src={ArrowLeft} height={20} width={20} />
        <div>
          <h2>Your Liquidity</h2>
          <p>Receive LP tokens and earn 0.17% trading fees</p>
        </div>
      </div>
      <div className={classes.wrapper}>
        <h2>CHOOSE A VALID PAIR</h2>
        <div className={classes.chooseValidWrapp}>
          <div>
            <div className={classes.balanceCard}>
              <div className="is-flex is-justify-content-space-between">
                <h2>BNB</h2>
                <div>
                  <span>Balance:</span>
                  <span>0.0067</span>
                </div>
              </div>
              <input type="text" placeholder="0.0" />
            </div>
            <div className="pt-5 pb-5 mb-4">
              <div className="is-flex is-justify-content-space-between">
                <h2>APV</h2>
                <div>
                  <span>Balance:</span>
                  <span>0.0067</span>
                </div>
              </div>
              <div className={classes.apv}>
                <input type="text" placeholder="0.0" />
                <div className={classes.numberGroup}>
                  {[
                    2, 5, 7, 7, 7, 7, 7, 7, 5, 7, 7, 7, 5, 5, 2, 3, 4, 5, 7, 5,
                  ].map((el) => (
                    <p>{el}</p>
                  ))}
                </div>
              </div>
            </div>
            <LinearButton width="100%" text="+ Add Liquidity" />
          </div>
          <div className={classes.stepTwoSecond}>
            <div className={classes.stepTwo}>
              <div className={classes.stepTwoNaming}>
                <span>STEP-2</span>
                <p>Pool Confugarations</p>
              </div>
              <input className={classes.stepTwoInput} type="text" placeholder="Spot prices" />
              <div className={classes.priceChange}>
                <input type="text" placeholder="Price change" />
                <div className="is-flex">
                  <img className="mr-3" src={SquarePlus} height={25} width={25} />
                  <Image  src={SquareDelete} height={25} width={25} />
                </div>
              </div>
              <input  className={`mt-5 ${classes.stepTwoInput}`}  type="text" placeholder="Fee" />
            </div>
            <div className={classes.details}>
              <span>Details</span>
              <p>
                If a user buys 5 NFTs for a Spot Price of 0.05 the new Spot
                price will be 0.45
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className={classes.mobileStepTwo}>
            <div className={classes.stepTwo}>
              <div className={classes.stepTwoNaming}>
                <span>STEP-2</span>
                <p>Pool Confugarations</p>
              </div>
              <input className={classes.stepTwoInput} type="text" placeholder="Spot prices" />
              <div className={classes.priceChange}>
                <input type="text" placeholder="Price change" />
                <div className="is-flex">
                  <img className="mr-3" src={SquarePlus} height={25} width={25} />
                  <Image  src={SquareDelete} height={25} width={25} />
                </div>
              </div>
              <input  className={`mt-5 ${classes.stepTwoInput}`}  type="text" placeholder="Fee" />
            </div>
            <div className={classes.details}>
              <span>Details</span>
              <p>
                If a user buys 5 NFTs for a Spot Price of 0.05 the new Spot
                price will be 0.45
              </p>
            </div>
          </div>
    </div>
  );
};

export default ChooseValid;
