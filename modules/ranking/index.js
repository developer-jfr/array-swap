import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import classes from "./index.module.scss";

const increateIcon = "/assets/images/icons/select-3.svg";
const selectBlack = "/assets/images/icons/select-black-2.svg";
const arrowRight = "/assets/images/icons/arrow-right.svg";
const Chain = "/assets/images/icons/chain.svg";
const EthrerumTransparent = "/assets/images/icons/ethrerum-transparent.svg";
const TableImg1 = "/assets/images/svg/table-img-1.svg";

const Ranking = () => {

  const isDesktopScreen = useMediaQuery({ query: '(max-width: 1000px)' });

  return (
    <div className={classes.wrapper}>
      <div className={classes.collectionNaming}>
        <h2>Collections</h2>
        <div className={classes.selectGroup}>
          <div>
            <div className="dropdown">
              <div className="dropdown-trigger">
                <button
                  className={`button ${classes.customSelect}`}
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <span>All Categories</span>
                  <span className="icon is-small">
                    <img src={selectBlack} alt="selectBlack" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="#" className="dropdown-item">
                    Dropdown item
                  </a>
                  <a className="dropdown-item">Other dropdown item</a>
                  <a href="#" className="dropdown-item is-active">
                    Active dropdown item
                  </a>
                  <a href="#" className="dropdown-item">
                    Other dropdown item
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    With a divider
                  </a>
                </div>
              </div>
            </div>
            <div className="dropdown">
              <div className="dropdown-trigger">
                <button
                  className={`button ${classes.customSelect} ml-4`}
                  aria-haspopup="true"
                  aria-controls="dropdown-menu"
                >
                  <img src={Chain} alt="Chain" />
                  <span>All Chains</span>
                  <span className="icon is-small">
                    <img src={selectBlack} alt="selectBlack" />
                  </span>
                </button>
              </div>
              <div className="dropdown-menu" id="dropdown-menu" role="menu">
                <div className="dropdown-content">
                  <a href="#" className="dropdown-item">
                    Dropdown item
                  </a>
                  <a className="dropdown-item">Other dropdown item</a>
                  <a href="#" className="dropdown-item is-active">
                    Active dropdown item
                  </a>
                  <a href="#" className="dropdown-item">
                    Other dropdown item
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    With a divider
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.daysGroup}>
            <span>24h</span>
            <span>7d</span>
            <span>30d</span>
            <span>All</span>
          </div>
        </div>
      </div>
      <div className={classes.customTable}>
        <div className={`${classes.tableScroll} table-container`}>
        <table class="table">
          <thead className={classes.customHead}>
            <tr>
              <th><div>
              #</div></th>
              <th><div>
                
              Collection</div></th>
              <th>
                <div>Floor Price <img src={increateIcon} alt="increateIcon" /></div>
              </th>
              <th>
                <div>Volume <img src={increateIcon} alt="increateIcon" /></div>
              </th>
              <th>
                <div>
                Sales <img src={increateIcon} alt="increateIcon" />
                </div>
              </th>
              <th>
                <div>
                Items <img src={increateIcon} alt="increateIcon" />
                </div>
              </th>
              <th>
               <div>
               Pools <img src={increateIcon} alt="increateIcon" />
               </div>
              </th>
            </tr>
          </thead>
          <tbody className={classes.customBody}>
            <tr>
              <th>
                <div>1</div>
              </th>
              <td>
                <div>
                  <div className={classes.bodyImgCard}>
                    <Image src={TableImg1} height={40} width={40} /> Boreed ape
                    yacht...
                  </div>
                </div>
              </td>
              <td>
                <div className={classes.priceItem}>
                   <Image src={EthrerumTransparent} height={14} width={14} />
                   80
                </div>
              </td>
              <td>
                <div className={classes.priceItem}>
                   <Image src={EthrerumTransparent} height={14} width={14} />
                   80
                </div>
              </td>
              <td>
                <div className={classes.priceItem}>
                   <Image src={EthrerumTransparent} height={14} width={14} />
                   80
                </div>
              </td>
              <td>Items</td>
              <td>Pools</td>
            </tr>
            <tr>
              <th>2</th>
              <td>
                <div>
                  <div className={classes.bodyImgCard}>
                    <Image src={TableImg1} height={40} width={40} /> Boreed ape
                    yacht...
                  </div>
                </div>
              </td>{" "}
              <td>
                <div className={classes.priceItem}>
                   <Image src={EthrerumTransparent} height={14} width={14} />
                   80
                </div>
              </td>
              <td>
                <div className={classes.priceItem}>
                   <Image src={EthrerumTransparent} height={14} width={14} />
                   80
                </div>
              </td>
              <td>
                <div className={classes.priceItem}>
                   <Image src={EthrerumTransparent} height={14} width={14} />
                   80
                </div>
              </td>
              <td>Items</td>
              <td>Pools</td>
            </tr>
            <tr>
              <th>3</th>
              <td>
                <div>
                  <div className={classes.bodyImgCard}>
                    <Image src={TableImg1} height={40} width={40} /> Boreed ape
                    yacht...
                  </div>
                </div>
              </td>{" "}
              <td>
                <div className={classes.priceItem}>
                   <Image src={EthrerumTransparent} height={14} width={14} />
                   80
                </div>
              </td>
              <td>
                <div className={classes.priceItem}>
                   <Image src={EthrerumTransparent} height={14} width={14} />
                   80
                </div>
              </td>
              <td>
                <div className={classes.priceItem}>
                   <Image src={EthrerumTransparent} height={14} width={14} />
                   80
                </div>
              </td>
              <td>Items</td>
              <td>Pools</td>
            </tr>
            <tr>
              <th>4</th>
              <td>
                <div>
                  <div className={classes.bodyImgCard}>
                    <Image src={TableImg1} height={40} width={40} /> Boreed ape
                    yacht...
                  </div>
                </div>
              </td>{" "}
              <td>
                <div className={classes.priceItem}>
                   <Image src={EthrerumTransparent} height={14} width={14} />
                   80
                </div>
              </td>
              <td>
                <div className={classes.priceItem}>
                   <Image src={EthrerumTransparent} height={14} width={14} />
                   80
                </div>
              </td>
              <td>
                <div className={classes.priceItem}>
                   <Image src={EthrerumTransparent} height={14} width={14} />
                   80
                </div>
              </td>
              <td>Items</td>
              <td>Pools</td>
            </tr>
          </tbody>
        </table>
        </div>
        <div className='is-flex is-justify-content-center'>
        <div className={classes.pagination}>
          <div>
            <p className={classes.active}>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
            <p>7</p>
          </div>
          <div className={classes.arrowIcon}>
          <Image src={arrowRight} height={14} width={14} />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Ranking;
