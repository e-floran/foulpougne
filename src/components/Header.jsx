import { Link } from "react-router-dom";

import "./styles/header.css";

export default function Header(props){
    const {logged}=props;
    return(
        <header>
            <img src="../../foulpougne-logo.jpg" alt="Foulpougne festival" className="logoImg"/>
            <nav>
                <ul>
                    <Link to="/" title="Résumés de nos éditions précédentes">
                        <li>Résumés</li>
                    </Link>
                    <Link to="/login/" title="Connexion administrateur">
                        <li>{logged ? "Déconnexion" : "Connexion"}</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}