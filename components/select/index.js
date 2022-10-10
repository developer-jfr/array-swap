import Image from "next/image";
import { useState } from "react";
import classes from "./index.module.scss";

const SelectDown = "/assets/images/icons/select-down.svg";

const data = [
  { name: "Etherum", src: "/assets/images/icons/ethrerum-cyan.svg" },
  { name: "Polygon", src: "/assets/images/svg/polygon-matic.svg" },
  { name: "Binance BSC", src: "/assets/images/svg/bihance.svg" },
];

const TokenSelect = () => {
  const [dropdownMarketType, setDropdownMarketType] = useState(false);
  const [index, setIndex] = useState(0);
  const [showOptions, setShowOptions] = useState(false);
  const itemClick = (index) => {
    setIndex(index);
    setDropdownMarketType(!dropdownMarketType);
  };
  return (
    <div>
      <div>
        <div className={`button ${classes.dropdown}`}>
          <Image src={data[index].src} width={30} height={30} />
          <h2>{data[index].name} market</h2>
          <Image
            onClick={() => {
              setShowOptions(true);
              setDropdownMarketType((el) => !el);
            }}
            src={SelectDown}
            width={18}
            height={18}
          />
          {showOptions && (
            <div className={classes.optionsWrapp}>
              {data.map((item, index) => {
                return (
                  <div
                    onClick={() => {
                      setShowOptions(false);
                      itemClick(index);
                    }}
                    key={index}
                  >
                    <img
                      src={item.src}
                      style={{ height: "24px", marginRight: "8px" }}
                    />
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
      {showOptions && <div onClick={() => setShowOptions(false)} className={classes.bigBg}></div>}
    </div>
  );
};

export default TokenSelect;
