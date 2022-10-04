import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ChartSection from "./components/chart-section";
import Items from "./components/items";
import Pool from "./components/pool";

import classes from "./index.module.scss";

const ProfileImg = "/assets/images/svg/profileImg.svg";

const ChartModule = () => {
  const isTbaletScreen = useMediaQuery({
    query: "(max-width: 800px)",
  });

  const truncate = (input, size) => {
    if (typeof window !== undefined) {
   return      input?.length > size ? `${input.substring(0, size)}...` : input

    }
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.profileSection}>
        <div className={classes.profileImg}>
          <Image src={ProfileImg} layout="fill" />
        </div>
        <div className={classes.profileContent}>
          <h1>DigiDaigaku Genesis</h1>
          <span>Created by: 0x12ea1...f0af</span>
          <p>
            Shellz Orb is a lore and art-based brand. Our journey begins in NFTs with the goal of making Web3 within an arm's reach of every person on earth
          </p>
        </div>
      </div>
      <Tabs>
        <TabList className={classes.tabList}>
          <Tab>
            <div className={classes.tabItem}>
              <span>Volume</span>
              <p>234</p>
            </div>
          </Tab>
          <Tab>
            <div className={classes.tabItem}>
              <span>Items</span>
              <p>33</p>
            </div>
          </Tab>
          <Tab>
            <div className={classes.tabItem}>
              <span>Pools</span>
              <p>44</p>
            </div>
          </Tab>
          <Tab disabled>
            <div className={classes.tabItem}>
              <span>Uniq Users</span>
              <p>234</p>
            </div>
          </Tab>
        </TabList>

        <TabPanel>
          <ChartSection />
        </TabPanel>
        <TabPanel>
          <Items />
        </TabPanel>
        <TabPanel>
          <Pool />
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ChartModule;
