import classes from './index.module.scss';
import Chart from '../chart';
import ChartTable from '../chart-table';

const ChartSection = () => {
  return (
    <div className={classes.wrapper}>
        <Chart />
        <ChartTable />
    </div>
  )
}

export default ChartSection