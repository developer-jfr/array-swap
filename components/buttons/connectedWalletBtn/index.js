import Image from "next/image";
import { useState } from "react";
import classes from "./index.module.scss";
import truncateHash from './../../../utils/truncate';
import { useDisconnect } from "wagmi";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { copyTextToClipboard } from "../../../utils/copyText";


const Share = "/assets/images/icons/share-2.svg";
const Copy = "/assets/images/icons/copy-2.svg";
const Exit = "/assets/images/icons/exit.svg";
const ArrowDown = "/assets/images/icons/arrounded-arrow-down.svg";


const ConnectedWallet = ({text = '01x3290...4454'}) => {
  const [showMenu, setShowMenu] = useState(false);
  const { disconnect } = useDisconnect();
 
  return (
    <div className={`dropdown is-right  ${showMenu && 'is-active'}`}>
      
      <div className="dropdown-trigger">
        <button
          className={classes.dropdown}
          aria-haspopup="true"
          aria-controls="dropdown-menu6"
          onClick={() => setShowMenu(el => !el)}
        >
          <span>{truncateHash(text)}</span>
          <span className="icon is-small">
            <Image src={ArrowDown} height={10} width={10} alt="cool" />
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
              <Image src={Copy} height={18} width={18} alt="cool"  />
              <span onClick={() => copyTextToClipboard(text)}>Copy Address</span>
              
            </div >
            <a href={`https://etherscan.io/address/${text}`} rel="noreferrer" target='_blank' onClick={() => setShowMenu(el => !el)}>
              <Image src={Share} height={18} width={18} />
              <span>View on explorer</span>
            </a>
            <div onClick={() => setShowMenu(el => !el)}>
              <Image src={Exit} height={18} width={18} alt="cool"  />
              <span onClick={() => disconnect()}>Disconnect wallet</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectedWallet;
