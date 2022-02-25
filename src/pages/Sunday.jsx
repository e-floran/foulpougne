import { Link } from "react-router-dom";

import "../styles/home.css";

export default function Sunday() {
  return (
    <div className="pageContainer">
      <section className="innerMenu">
        <ul>
          <Link to={"/fullProgram/friday/"} title="Le programme du vendredi">
            <li>Vendredi</li>
          </Link>
          <Link to={"/fullProgram/saturday/"} title="Le programme du samedi">
            <li>Samedi</li>
          </Link>
          <Link to={"/fullProgram/sunday/"} title="Le programme du dimanche">
            <li>Dimanche</li>
          </Link>
        </ul>
      </section>
      <section className="homeContent">
        <h2>Dimanche 25 septembre</h2>
        <div className="homeDetailsContainer programContent">
          <h4>15h, bal avec « Naragonia »</h4>
          <img src="/pictures/Naragonia.jpg" alt="Naragonia" />
          <p>
            Ils nous arrivent du « grand nord » : de cette Flandre belge si
            attachante, si riche, si étonnante. Fondé en 2003 lors du festival
            « Andanças » au Portugal, Naragonia s’appuie dès le départ sur le
            duo formé par Toon Van Mierlo (accordéon et cornemuse irlandaise) et
            Pascale Rubens (accordéon). Le duo s’est ensuite métamorphosé en
            quartet avec l’arrivée de Maarten Decombel (guitare et mandoline) et
            de Luc Pilartz (violon). Le quatuor s’est très vite mis en avant,
            grâce à son sens de la mélodie et surtout le doigté avec lequel il
            met en évidence le son de chaque instrument. Au départ de quelques
            notes d’accordéon diatonique, la mélodie s’éveille en douceur puis,
            les autres instruments comme la guitare et le violon viennent alors
            compléter le tableau musical, tout en restant des plus mélodiques.
            Entre « néo-classique » et « néotrad », toujours ancrée dans les
            traditions d’ici et d’ailleurs, la musique ou plutôt la mélodie de
            Naragonia invite à une écoute attentive car ici, c’est encore une
            fois l’essence des instruments qui est mis en valeur.
          </p>
          <p>Pascale RUBENS : accordéon diatonique, violon</p>
          <p>Toon VAN MIERLO : accordéon diatonique, cornemuse</p>
          <p>Luc PILARTZ : violon</p>
          <p>Maarten DECOMBEL : mandole, guitare</p>
        </div>
      </section>
    </div>
  );
}
