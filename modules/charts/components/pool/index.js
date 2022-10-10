import Image from "next/image";
import classes from "./index.module.scss";
import truncateHash from './../../../../utils/truncate';


const Share = "/assets/images/icons/share.svg";
const Copy = "/assets/images/icons/copy.svg";

const Pool = () => {
  return (
    <div className={classes.container}>
      <div className={classes.elementsWrapp}>
        <div className={classes.firstSection}>
          <div>
            <h2 className={classes.checkboxTitle}>Pool Type</h2>
            <div>
              <div className={classes.inputGroup}>
                <input id="option1" name="option1" type="checkbox" />
                <label for="option1">Token</label>
              </div>
              <div className={classes.inputGroup}>
                <input id="option2" name="option2" type="checkbox" />
                <label for="option2">NFT</label>
              </div>
              <div className={classes.inputGroup}>
                <input id="option3" name="option3" type="checkbox" />
                <label for="option3">Trade</label>
              </div>
            </div>
          </div>
          <div>
            <h2  className={`pt-5 mt-2 ${classes.checkboxTitle}`}>Bonding Curve</h2>
            <div>
              <div className={classes.inputGroup}>
                <input id="option4" name="option4" type="checkbox" />
                <label for="option4">Token</label>
              </div>
              <div className={classes.inputGroup}>
                <input id="option5" name="option5" type="checkbox" />
                <label for="option5">NFT</label>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.secondSection}>
          <div className={classes.wrapperCard}>
            <div className={classes.copyCard}>
              <span>0x2b2e8cda09bba9660dca5cb6233787738ad68329</span>
              <div>
                <Image src={Copy} height={24} width={24} />
                <Image src={Share} height={24} width={24} />
              </div>
            </div>
            <span className={classes.ownerTitle}>
              Owner: 0xif9834y5984hjfgoerjhti9y8t693erjhfg98y9
            </span>
            <div className={classes.twoCardWrapper}>
              <div className={classes.balanceCard}>
                <span>Balance</span>
                <div>
                  <p>DDG: 000.033</p>
                  <p>ETH: 0.0005</p>
                </div>
              </div>
              <div className={classes.priceCard}>
                <div>
                  <span>Current Price</span>
                  <p>20.90 ETH</p>
                </div>
                <div>
                  <span>Bonding Curve</span>
                  <p>Linear</p>
                </div>
                <div>
                  <span>Delta</span>
                  <p>2.490 ETH</p>
                </div>
                <div>
                  <span>Volume</span>
                  <p>1.189.28 ETH</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.wrapperCard} style={{ marginTop: "20px" }}>
            <div className={classes.copyCard}>
              <span>0x2b2e8cda09bba9660dca5cb6233787738ad68329</span>
              <div>
                <Image src={Copy} height={24} width={24} />
                <Image src={Share} height={24} width={24} />
              </div>
            </div>
            <span className={classes.ownerTitle}>
              Owner: 0xif9834y5984hjfgoerjhti9y8t693erjhfg98y9
            </span>
            <div className={classes.twoCardWrapper}>
              <div className={classes.balanceCard}>
                <span>Balance</span>
                <div>
                  <p>DDG: 000.033</p>
                  <p>ETH: 0.0005</p>
                </div>
              </div>
              <div className={classes.priceCard}>
                <div>
                  <span>Current Price</span>
                  <p>20.90 ETH</p>
                </div>
                <div>
                  <span>Bonding Curve</span>
                  <p>Linear</p>
                </div>
                <div>
                  <span>Delta</span>
                  <p>2.490 ETH</p>
                </div>
                <div>
                  <span>Volume</span>
                  <p>1.189.28 ETH</p>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.wrapperCard} style={{ marginTop: "20px" }}>
            <div className={classes.copyCard}>
              <span>0x2b2e8cda09bba9660dca5cb6233787738ad68329</span>
              <div>
                <Image src={Copy} height={24} width={24} />
                <Image src={Share} height={24} width={24} />
              </div>
            </div>
            <span className={classes.ownerTitle}>
              Owner: 0xif9834y5984hjfgoerjhti9y8t693erjhfg98y9
            </span>
            <div className={classes.twoCardWrapper}>
              <div className={classes.balanceCard}>
                <span>Balance</span>
                <div>
                  <p>DDG: 000.033</p>
                  <p>ETH: 0.0005</p>
                </div>
              </div>
              <div className={classes.priceCard}>
                <div>
                  <span>Current Price</span>
                  <p>20.90 ETH</p>
                </div>
                <div>
                  <span>Bonding Curve</span>
                  <p>Linear</p>
                </div>
                <div>
                  <span>Delta</span>
                  <p>2.490 ETH</p>
                </div>
                <div>
                  <span>Volume</span>
                  <p>1.189.28 ETH</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pool;
