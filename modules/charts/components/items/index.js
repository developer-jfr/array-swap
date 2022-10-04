import ItemCard from "../item-card";
import classes from "./index.module.scss";

import BuyNft from "./buy-nft-modal";
import { useState } from "react";

const Items = () => {
  const [showNft, setShowNft] = useState(false);

  return (
    <div className="is-flex">
      <div className={classes.itemsWrapp}>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((el) => (
          <ItemCard key={el} setShowNft={setShowNft} />
        ))}
      </div>
      <div>
        {showNft && <BuyNft setShowNft={setShowNft} />}
      </div>
    </div>
  );
};

export default Items;
