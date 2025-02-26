import logo from "../../assets/logo.png"
import "./index.scss"

function Header() {
    return (
        <header>
            <img src={logo} alt="test" />
            <div>
                <h1>On commande quoi</h1>
                <h2>Aujourd'hui?</h2>
            </div>
        </header>
    );
    }
    
    export default Header;