import Image from "next/image";
import { useAccount, useConnect, useDisconnect,  } from "wagmi";
import classes from './index.module.scss';

const Close = "/assets/images/icons/hix.svg";
const Metamask = "/assets/images/svg/metamask.svg";
const ConnectWalletIcon = "/assets/images/svg/walletconnect-logo.svg";
const Coinbase = '/assets/images/icons/coinbase.svg';

const ConnectWallet = ({ setOpenWallet, openWallet }) => {
  const { address, connector, isConnected,status } = useAccount();
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();


    console.log(error)

  return (
    <div class={`modal ${isConnected && openWallet ? "" : "is-active"} ${classes.modal}`}>
      <div
        class="modal-background"
        style={{ background: "rgba(50, 53, 70, 0.6)" }}
        onClick={() => setOpenWallet(false)}
      ></div>
      <div class={`modal-card ${classes.modalCard}`}>
        <div className={`is-flex is-justify-content-end p-5 is-clickable ${classes.modalHeader}`}>
          <Image
            src={Close}
            height={20}
            width={20}
            onClick={() => setOpenWallet(false)}
            alt='cool'
          />
        </div>
        <section class="modal-card-body">
          <div className={classes.itemsWrapp}>
            <a onClick={() => {
              connect({ connector: connectors[0] })
              setOpenWallet(false)
            }}>
              <img src={Metamask} alt="" />
            </a>
            <a onClick={() => {
              connect({ connector: connectors[1] })
              setOpenWallet(false)
              }}>
              <img src={ConnectWalletIcon} alt="" />
            </a>
            <a onClick={() => {
              connect({ connector: connectors[2] })
              setOpenWallet(false)
              }}>
              <img src={Coinbase} alt="" />
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ConnectWallet;
