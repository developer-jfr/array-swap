import Image from "next/image";
import classes from "./index.module.scss";


import ChooseValid from "./components/choose-valid";

import AddLiquitidy from "./components/add-liquidity";
import RemoveLiquidity from "./components/remove-liquidity";
import Configuration from "./components/configuration";
import LiquidityWallet from "./components/liquidity-wallet";
import TokenSelect from '../../components/select';


const Statisticks = "/assets/images/icons/statisticks.svg";

const Liquidity = () => {
  return (
    <div>
      <div className={classes.marketWrapp}>
        <TokenSelect />
        <div className="is-flex ml-3 mt-5 pt-2">
          <Image src={Statisticks} width={50} height={50} />
          <div className={`ml-2 ${classes.statNaming}`}>
            <span>Net worth</span>
            <p>0.00000000</p>
          </div>
        </div>
      </div>
      <div className={`is-flex is-justify-content-center ${classes.liquidityWrapp}`}>
         {/* <ChooseValid /> */}
         {/*  <AddLiquitidy />
         {/* <RemoveLiquidity /> */}
      {/*  <Configuration /> */}
      <LiquidityWallet />
      </div>
    </div>
  );
};

export default Liquidity;
