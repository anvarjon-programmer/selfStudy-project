import styles from './Loader.module.scss';
import ReactDOM from "react-dom";
const Loader = () => {
  return ReactDOM.createPortal(
    <div className={styles.wrapper}>
      <div className={styles.loader}>
        <img src="https://github.com/zinotrust/eshop-ecommerce/blob/master/src/assets/loader.gif?raw=true" alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
}

export default Loader

// https://github.com/zinotrust/eshop-ecommerce/blob/master/src/assets/loader.gif?raw=true