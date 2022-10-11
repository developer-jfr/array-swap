import Image from "next/image";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import classes from "./index.module.scss";

const EnthrerumBlack = "/assets/images/icons/black-ethrerum.svg";
const Grid = "/assets/images/icons/grid.svg";
const Grow = "/assets/images/icons/grow.svg";
const Turtle = "/assets/images/svg/tutle.svg";
const ArrowLeftWithoutLine = "/assets/images/icons/arrow-left-without-line.svg";
const HiX = "/assets/images/icons/hix.svg";

const BuyNft = ({ setShowNft , isInline, setIsInline, showNft}) => {
  const isDesktop = useMediaQuery({
    query: '(max-width: 900px)'
  });
  const isMobileScreeen = useMediaQuery({
    query: '(max-width: 600px)'
  });
  return (
    <>
    <div onClick={() => setShowNft(false)} className={showNft && isInline ? classes.inlineBg : ''}></div>
      <div className={`${classes.container} ${isInline  && !isDesktop ? classes.sidepabelInline : ''}`}>
      <div className={classes.modalBody}>
        <div className={classes.headerWrapp}>
          <h2>Buy 5 NFT’s</h2>
          <div>
            <span>Clear</span>
            {isMobileScreeen ? (
              <Image
              className={`is-clickable ${isInline && classes.isInline}`}
              onClick={() => setShowNft(false)} 
              src={HiX}
              height={16}
              width={16} />
            )
           : (
              <Image
            className={`is-clickable ${isInline && classes.isInline}`}
            onClick={() => setIsInline(el => !el)} 
            src={Grid}
            height={24}
            width={24}
          />)
}     
          </div>
        </div>
        <div className={classes.totalWrapp}>
          <div>
            <Image className="is-clickable" onClick={() => setShowNft(false)} src={ArrowLeftWithoutLine} height={18} width={6} />
            <span>Buy Total:</span>
          </div>
          <div>
            <Image src={EnthrerumBlack} height={24} width={24} />
            <span>10.000</span>
          </div>
        </div>
        <div className={classes.cardGroup}>
          <div className={classes.card}>
            <div className={classes.cardHeader}>
              <Image src={Turtle} height={76} width={80} />
              <div>
                <span>Clone X - X Tak...</span>
                <p>#1</p>
              </div>
            </div>
            <div className={classes.cardBody}>
              <Image src={EnthrerumBlack} height={24} width={24} />

              <span>3.3</span>
              <Image src={Grow} height={14} width={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default BuyNft;
