import Image from "next/image";
import { useState } from "react";
import classes from "./index.module.scss";

const Share = "/assets/images/icons/share-2.svg";
const Copy = "/assets/images/icons/copy-2.svg";
const Exit = "/assets/images/icons/exit.svg";
const ArrowDown = "/assets/images/icons/arrounded-arrow-down.svg";

const ConnectedWallet = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={`dropdown is-right  ${showMenu && 'is-active'}`}>
      <div className="dropdown-trigger">
        <button
          className={classes.dropdown}
          aria-haspopup="true"
          aria-controls="dropdown-menu6"
          onClick={() => setShowMenu(el => !el)}
        >
          <span>01x3290...4454</span>
          <span className="icon is-small">
            <Image src={ArrowDown} height={10} width={10} />
          </span>
        </button>
      </div>
      <div
        className={`dropdown-menu ${classes.dropdownMenu}`}
        id="dropdown-menu6"
        role="menu"
      >
        <div className={`dropdown-content ${classes.dropdownContent}`}>
          <span>Network</span>
          <p>Etherum</p>
          <div className={classes.cardWrapp}>
            <div onClick={() => setShowMenu(el => !el)}>
              <Image src={Copy} height={18} width={18} />
              <span>Copy Address</span>
            </div >
            <div onClick={() => setShowMenu(el => !el)}>
              <Image src={Share} height={18} width={18} />
              <span>View on explorer</span>
            </div>
            <div onClick={() => setShowMenu(el => !el)}>
              <Image src={Exit} height={18} width={18} />
              <span>Disconnect wallet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedWallet;
