import Image from 'next/image';
import classes from './index.module.scss';

const Share = '/assets/images/svg/share-2.svg';

const ChartTable = () => {
  return (
    <div className={classes.tableWrapp}>
       <table className={`table ${classes.customTable}`}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Quantity</th>
        <th>Av. Price</th>
        <th>Tx</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>Buy</th>
        <th>6</th>
        <th>0.00001</th>
        <th>
          <Image  src={Share} height={17} width={17} />
        </th>
      </tr>
      <tr>
        <th>Buy</th>
        <th>6</th>
        <th>0.00001</th>
        <th>
          <Image  src={Share} height={17} width={17} />
        </th>
      </tr>
    </tbody>
  </table>
    </div>
  )
}

export default ChartTable