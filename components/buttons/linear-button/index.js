import Link from 'next/link';
import classes from './index.module.scss';

const LinearButton = ({text = 'Launch App', bG, width, padding, link= '#', setOpenWallet, fontSize = '16px', fontWeight}) => {
  return (
    <Link href={`${link}`}>
           <button onClick={() => {
            if(setOpenWallet) {
              setOpenWallet(true)
            } 
            console.log('not')
           }} className={classes.linearBtn} style={{background: `${bG}`, width: `${width}`, padding: `${padding}` , fontStyle: `${fontSize}`, fontWeight: `${fontWeight}`,}}>{text}</button>

      </Link>
    )
}

export default LinearButton