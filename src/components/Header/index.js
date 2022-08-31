import logo from "../../images/ironhack-logo-xs.png";
import menu from "../../images/menu-top-xs.png";
import style from "./style.module.css";

export function Header () {
    return (
        <div className={style.container}>
        <img src={logo} alt="logo" className={style.logo} />
        <img src={menu} alt="menu" className={style.menu} />
    </div>
    )
    
}
