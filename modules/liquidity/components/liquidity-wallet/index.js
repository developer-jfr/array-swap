import classes from './index.module.scss';
import LinearButton from './../../../../components/buttons/linear-button';
import ConnectWalletModal from '../../../../components/connectWallet';
import { useState } from 'react';


const LiquidityWallet = () => {
  const [openWallet, setOpenWallet] = useState(false);

  return (
    <>
          {openWallet && <ConnectWalletModal openWallet={openWallet} setOpenWallet={setOpenWallet} />}

    <div className={classes.container}>
        <h2>Your Liquidity</h2>
        <p>Remove liquidity to receive tokens back</p>
        <div className={classes.btnGroup}>
            <button onClick={() => setOpenWallet(true)} className={classes.customBtn}>Connect to a wallet to view your liquidity.</button>
            <LinearButton width='100%' text='Connect Wallet' setOpenWallet={setOpenWallet}/>
        </div>
    </div>
    </>
  )
}

export default LiquidityWallet