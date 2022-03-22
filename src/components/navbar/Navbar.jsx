import styles from "./navbar.module.css"
import {BsMoon, BsFillMoonFill} from "react-icons/bs"
const Navbar = ({setDark,dark}) => {
  return (
    <nav className={dark?` dark-bg-element  ${styles.navbar} ${styles.dark_border}`:`${styles.navbar} light-bg-element ${styles.light_border}`}>
      <h1>Where in the world?</h1>
      <button className={`${styles.navbar__theme_btn} ${dark?"dark":"light"}`} onClick={()=>setDark(!dark)}>{dark?<BsFillMoonFill/>:<BsMoon />} Dark Mode</button>
    </nav>
  )
}

export default Navbar