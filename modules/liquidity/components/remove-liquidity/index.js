import classes from './index.module.scss';
import LinearButton from './../../../../components/buttons/linear-button';
import Image from 'next/image';

const EthrerumBlack = '/assets/images/icons/black-ethrerum.svg';
const BihanceBlack = '/assets/images/icons/bihance-black.svg';

const RemoveLiquidity = () => {
  return (
    <div className={classes.container}>
        <h2>Your Liquidity</h2>
        <p>Remove liquidity to receive tokens back</p>
        <div className={classes.btnGroup}>
            <div className={classes.currencyWrapp}>
                <div className={classes.currencyItem}>
                   <div className={classes.currencyIcons}>
                     <Image src={EthrerumBlack} height={30} width={30} />
                     <Image src={BihanceBlack} height={30} width={30} />
                      <span>ETH/BNB</span>
                   </div>
                   <span>0.0000034832</span>
                   <p>(0.00 USD)</p>
                </div>
                <div className={classes.currencyItem}>
                   <div className={classes.currencyIcons}>
                     <Image src={EthrerumBlack} height={30} width={30} />
                     <Image src={BihanceBlack} height={30} width={30} />
                      <span>ETH/BNB</span>
                   </div>
                   <span>0.0000034832</span>
                   <p>(0.00 USD)</p>
                </div>
                <div className={classes.currencyItem}>
                   <div className={classes.currencyIcons}>
                     <Image src={EthrerumBlack} height={30} width={30} />
                     <Image src={BihanceBlack} height={30} width={30} />
                      <span>ETH/BNB</span>
                   </div>
                   <span>0.0000034832</span>
                   <p>(0.00 USD)</p>
                </div>
                <div className={classes.currencyItem}>
                   <div className={classes.currencyIcons}>
                     <Image src={EthrerumBlack} height={30} width={30} />
                     <Image src={BihanceBlack} height={30} width={30} />
                      <span>ETH/BNB</span>
                   </div>
                   <span>0.0000034832</span>
                   <p>(0.00 USD)</p>
                </div>
            </div>
            <LinearButton width='100%' text='Add Liquidity' />
        </div>
    </div>
  )
}

export default RemoveLiquidity