import Image from "next/image";
import classes from "./index.module.scss";

const HiX = "/assets/images/icons/hix.svg";
const Search = "/assets/images/icons/search.svg";
const EthrerumCyan = "/assets/images/icons/ethrerum-cyan.svg";
const EthrerumBlack = "/assets/images/icons/black-ethrerum.svg";

const SelectToken = ({ setShowToken }) => {
  return (
    <div className={`modal is-active ${classes.modal}`}>
      <div
        className="modal-background"
        style={{ background: "rgba(50, 53, 70, 0.6)" }}
      ></div>
      <div className={`modal-card ${classes.modalCard}`}>
        <header className={`modal-card-head ${classes.modalHeader}`}>
          <Image
            onClick={() => setShowToken(false)}
            className="is-clickable"
            src={HiX}
            height={15}
            width={15}
          />
        </header>
        <section className={`modal-card-body ${classes.modalBody}`}>
          <div className={classes.modalSearch}>
            <h2 className={classes.title}>Select token</h2>
            <div className={classes.customSearchBar}>
              <img
                className={`ml-1 ${classes.searchIcon}`}
                src={Search}
                height={20}
                width={20}
              />
              <input type="email" placeholder="Token search.." />
            </div>

            <div className="is-flex pt-5 mt-1" style={{ gap: "10px" }}>
              <div className={classes.currencyItem}>
                <Image src={EthrerumCyan} height={20} width={20} />
                <span>ETH</span>
              </div>
              <div className={classes.currencyItem}>
                <Image src={EthrerumCyan} height={20} width={20} />
                <span>ETH</span>
              </div>
              <div className={classes.currencyItem}>
                <Image src={EthrerumCyan} height={20} width={20} />
                <span>ETH</span>
              </div>
              <div className={classes.currencyItem}>
                <Image src={EthrerumCyan} height={20} width={20} />
                <span>ETH</span>
              </div>
            </div>
            <div className="is-flex pt-4" style={{ gap: "10px" }}>
              <div className={classes.currencyItem}>
                <Image src={EthrerumCyan} height={20} width={20} />
                <span>ETH</span>
              </div>
              <div className={classes.currencyItem}>
                <Image src={EthrerumCyan} height={20} width={20} />
                <span>ETH</span>
              </div>
              <div className={classes.currencyItem}>
                <Image src={EthrerumCyan} height={20} width={20} />
                <span>ETH</span>
              </div>
              <div className={classes.currencyItem}>
                <Image src={EthrerumCyan} height={20} width={20} />
                <span>ETH</span>
              </div>
            </div>
          </div>
          <div className={classes.swapList}>
            <div style={{borderRight: '0.5px solid #CCCCCC'}}>
              <h2 className={classes.swapTitle}>SWAP List</h2>
              <div>
                <div className={classes.swapCard}>
                  <div className={classes.swapNaming}>
                    <Image src={EthrerumBlack} height={30} width={30} />
                    <div>
                      <span>ether</span>
                      <p>ETH</p>
                    </div>
                  </div>
                  <div className={classes.swapPrice}>
                    <span>0.00121</span>
                    <p>Delete</p>
                  </div>
                </div>
                <div className={classes.swapCard}>
                  <div className={classes.swapNaming}>
                    <Image src={EthrerumBlack} height={30} width={30} />
                    <div>
                      <span>ether</span>
                      <p>ETH</p>
                    </div>
                  </div>
                  <div className={classes.swapPrice}>
                    <span>0.00121</span>
                    <p>Delete</p>
                  </div>
                </div>
                <div className={classes.swapCard}>
                  <div className={classes.swapNaming}>
                    <Image src={EthrerumBlack} height={30} width={30} />
                    <div>
                      <span>ether</span>
                      <p>ETH</p>
                    </div>
                  </div>
                  <div className={classes.swapPrice}>
                    <span>0.00121</span>
                    <p>Delete</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className={classes.swapTitle}>saved</h2>
              <div>
                <div className={classes.swapCard}>
                  <div className={classes.swapNaming}>
                    <Image src={EthrerumCyan} height={30} width={30} />
                    <div>
                      <span>ether</span>
                      <p>ETH</p>
                    </div>
                  </div>
                  <div className={classes.swapPrice}>
                    <span>0.00121</span>
                    <p>Delete</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SelectToken;
