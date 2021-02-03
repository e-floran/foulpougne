import "./styles/header.css";
export default function Header(){
    return(
        <header>
            <img src="../../foulpougne-logo.jpg" alt="Foulpougne festival" className="logoImg"/>
            <nav>
                <ul>
                    <li>Résumés</li>
                    <li>Connexion</li>
                </ul>
            </nav>
        </header>
    )
}