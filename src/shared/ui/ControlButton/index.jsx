import styles from "./ui/styles.module.css"

const ControlButton = ({ children }) => {
  return <button className={styles.btn}>{children}</button>
}

export default ControlButton