import Image from "next/image";
import classes from "./index.module.scss";

const ArrowLeft = "/assets/images/icons/arrow-left.svg";
const Copy = "/assets/images/icons/copy.svg";
const Share = "/assets/images/icons/share.svg";
const Warning = "/assets/images/icons/warning.svg";

const Configuration = ({setIsConfiguration}) => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.arrowSection}>
        <Image className="is-clickable" onClick={() => setIsConfiguration(false)} src={ArrowLeft} height={20} width={20} />
        <div>
          <h2>Configurations</h2>
          <p>Pool Confugarations</p>
        </div>
      </div>
      <div className={classes.configBody}>
        <div>
          <div className={classes.copyCardWrapp}>
            <div className={classes.copyCard}>
              <span>0x2b2e8cda09bba9660dca5cb6233787738ad68329</span>
              <div>
                <Image src={Copy} height={25} width={25} />
                <Image src={Share} height={25} width={25} />
              </div>
            </div>
          </div>
          <div className={classes.warning}>
            <Image src={Warning} height={20} width={20} />
            <span>This is your Pair address</span>
          </div>
        </div>
        <div>
          <div className={classes.apv}>
            <div className="is-flex is-justify-content-space-between pb-2">
              <h2>APV</h2>
              <div className="is-flex">
                <span>Balance: </span>
                <span className="ml-2"> 0.0067</span>
              </div>
            </div>
            <div className={classes.withDraw}>
              <div className={classes.inputGroup}>
                <input type="text" placeholder="0.00" />
                <div>
                  <span>Withdraw</span>
                  <span>Deposit</span>
                </div>
              </div>
              <div className={classes.numberGroup}>
                {[
                  2, 5, 7, 7, 7, 7, 7, 7, 5, 7, 7, 7, 5, 5, 2, 3, 4, 5, 7, 5,
                ].map((el) => (
                  <p>{el}</p>
                ))}
              </div>
            </div>
          </div>
          <div className={classes.warning}>
            <Image src={Warning} height={20} width={20} />
            <span>
              Select NFT Ids you'd like to deposit or withdraw, from the pair
            </span>
          </div>
        </div>
        <div>
          <div className={classes.amountCard}>
            <input type="text" placeholder="0.00" />
            <div>
              <span>Withdraw</span>
              <span>Deposit</span>
            </div>
          </div>
          <div className={classes.warning}>
            <Image src={Warning} height={20} width={20} />
            <span>
              Ether amount you'd like to deposit or withdraw, from the pair
            </span>
          </div>
        </div>
        <div>
          <div className={classes.amountCard} style={{background :'#F1F1F3'}}>
            <input type="text" placeholder="0.00" />
            <div>
              <span style={{color: '#9B9B9B'}}>Withdraw</span>
              <span style={{color: '#9B9B9B'}}>Deposit</span>
            </div>
          </div>
          <div className={classes.warning}>
            <Image src={Warning} height={20} width={20} />
            <span>
            ERC-20 amount you'd like to deposit or withdraw, from the pair
            </span>
          </div>
        </div>
        
        <div>
          <div className={classes.amountCard}>
            <input type="text" placeholder="0.00" />
            <div>
              <span>Update</span>
            </div>
          </div>
          <div className={classes.warning}>
            <Image src={Warning} height={20} width={20} />
            <span>
            Update the price increase (delta) for this pair
            </span>
          </div>
        </div>

        <div>
          <div className={classes.amountCard}>
            <input type="text" placeholder="0.00" />
            <div>
              <span>Update</span>
            </div>
          </div>
          <div className={classes.warning}>
            <Image src={Warning} height={20} width={20} />
            <span>
            Update fee for this pair
            </span>
          </div>
        </div>

        <div>
          <div className={classes.amountCard}>
            <input type="text" placeholder="0.00" />
            <div>
              <span>Update</span>
            </div>
          </div>
          <div className={classes.warning}>
            <Image src={Warning} height={20} width={20} />
            <span>
            Update the address that receives assets from this pair
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Configuration;
