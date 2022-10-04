import classes from './index.module.scss';

const LinearButton = ({text = 'Launch App', bG, width, padding}) => {
  return (
    <button className={classes.linearBtn} style={{background: `${bG}`, width: `${width}`, padding: `${padding}`}}>{text}</button>
  )
}

export default LinearButton