import Image from 'next/image';
import classes from './index.module.scss';

const profileImg = '/assets/images/svg/profileImg.svg';

const ItemCard = ({setShowNft}) => {
  return (
    <div className={classes.itemCard}>
       <div className={classes.itemBody}>
          <div className={classes.itemImgWrapp}>
           <div className={classes.itemImg}>
           <img  src={profileImg} />
           </div>
           <div>#1975</div>
          </div>
          <div className={classes.itemPrice}>
             <div className={classes.priceContent}>
               <span>Price</span>
               <p>11.00003 ETH</p>
             </div>
             <div className={classes.btnGroup}>
             <button onClick={() => setShowNft(true)} >Buy</button>
             <button>+ Add</button>
             </div>
          </div>
       </div>
    </div>
  )
}

export default ItemCard