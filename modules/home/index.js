import Image from "next/image";
import classes from "./index.module.scss";

import useMediaQuery from "react-responsive";

const SomethingSmellsGood = "/assets/images/svg/something-smells-good.svg";
const SomethingSmellsMobile = '/assets/images/svg/smells-good-mobile.svg';
const desert = "/assets/images/svg/desert.svg";
const dashed = "/assets/images/static-images/dashed-line.png";
const Etherum = "/assets/images/svg/cryptocurrency.svg";
const polygonMatic = "/assets/images/svg/polygon-matic.svg";
const Bihance = "/assets/images/svg/bihance.svg";
const Discord = "/assets/images/svg/discord.svg";
const Telegram = "/assets/images/svg/telegram.svg";
const Twitter = "/assets/images/svg/twitter.svg";

const Home = () => {

  return (
    <div className={classes.main}>
      <div className={classes.somethingWrapp}>
        <div className={classes.somethingSmell}>
         <Image className={classes.someThingMobile} layout="fill" src={SomethingSmellsMobile} /> 
         <Image className={classes.someThingDesktop}  layout="fill" src={SomethingSmellsGood} />
        </div>
      </div>
      <div className={classes.desertWrapp}>
        <div className={classes.desertImg}>
          <Image layout="fill" src={desert} />
        </div>
        <h2>We're Making Desert</h2>
      </div>
      <div className={classes.dashed}>
        <Image src={dashed} layout="fill" />
      </div>
      <div>
        <div className={classes.cryptoNaming}>
          <h2>Available on</h2>
          <p>Buy, List and Swap NFTs on the following chains</p>
        </div>
        <div className={`is-flex is-justify-content-space-between ${classes.cryptoWrapp}`}  >
          <div className={classes.cryptoCard}>
            <div className={classes.cryptoImg}>
              <Image src={Etherum} layout="fill" />
            </div>
            <h2 className="has-text-white">Available</h2>
          </div>
          <div className={classes.cryptoCard}>
            <div className={classes.cryptoImg}>
              <Image src={polygonMatic} layout="fill" />
            </div>
            <h2>Coming Soon</h2>
          </div>
          <div className={classes.cryptoCard}>
            <div className={classes.cryptoImg}>
              <Image src={Bihance} layout="fill" />
            </div>
            <h2>Coming Soon</h2>
          </div>
        </div>
      </div>
      <div className={classes.dashed}>
        <Image src={dashed} layout="fill" />
      </div>
      <div>
      <div className={classes.cryptoNaming}>
          <h2>Join the community</h2>
          <p>In a gentle way, you can shake the world</p>
        </div>
        <div className={classes.socialWrapp}  >
          <div className={`is-flex is-justify-content-space-between ${classes.socialCardWrapp}`}>
          <div className={classes.socialCard}>
            <div className={classes.socialImg}>
              <Image src={Discord} layout="fill" />
            </div>
            <h2 >Discord</h2>
          </div>
          <div className={classes.socialCard}>
            <div className={classes.socialImg}>
              <Image src={Telegram} layout="fill" />
            </div>
            <h2>Telegram</h2>
          </div>
          <div className={classes.socialCard}>
            <div className={classes.socialImg}>
              <Image src={Twitter} layout="fill" />
            </div>
            <h2>Twitter</h2>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
