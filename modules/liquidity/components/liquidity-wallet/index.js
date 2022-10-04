import classes from './index.module.scss';
import LinearButton from './../../../../components/buttons/linear-button';


const LiquidityWallet = () => {
  return (
    <div className={classes.container}>
        <h2>Your Liquidity</h2>
        <p>Remove liquidity to receive tokens back</p>
        <div className={classes.btnGroup}>
            <button className={classes.customBtn}>Connect to a wallet to view your liquidity.</button>
            <LinearButton width='100%' text='Connect Wallet' />
        </div>
    </div>
  )
}

export default LiquidityWallet