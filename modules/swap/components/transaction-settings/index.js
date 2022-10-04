import Image from "next/image";
import classes from "./index.module.scss";

const HiX  = '/assets/images/icons/hix.svg'

const TransactionSettings = ({setShowSettings}) => {
  return (
    <div className={`modal is-active ${classes.modal}`}>
      <div className="modal-background" style={{background: 'rgba(50, 53, 70, 0.6)'}}></div>
      <div className={`modal-card ${classes.modalCard}`}>
        <header className={`modal-card-head ${classes.modalHeader}`}>
          <p className="modal-card-title">Transaction settings</p>
          <Image onClick={() => setShowSettings(false)} className="is-clickable" src={HiX} height={20} width={20} />
        </header>
        <section className={`modal-card-body ${classes.modalBody}`}>
            <div className={classes.modalItems}>
                <span>Item Purchase Per/Pool</span>
                <div className={classes.modalInput}>
                    <input type="text" placeholder="5"/>
                    <div>
                        <span>ITEMS</span>
                    </div>
                </div>
            </div>
        </section>
      </div>
    </div>
  );
};

export default TransactionSettings;