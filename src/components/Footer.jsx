import { Link } from "react-router-dom";

import "../styles/footer.css";

export default function Footer(){
    return(
        <section className="footerContainer">
            <Link to="/" title="Accueil">Accueil</Link>
            <p>Site réalisé par <a href="https://floran-eiclies.netlify.app/" title="Portfolio de Floran Eiclies">Floran Eiclies</a></p>
        </section>
    )
}