import "./Header.css";
import logo from '../assets/rocket.png'

export function Header() {
    return(
        <div className="headerArea">
            <div className="logo">
                <img src={logo} alt="foguete" />
                <p className="logoText">to<span>do</span></p>
            </div>
        </div>
    )
}