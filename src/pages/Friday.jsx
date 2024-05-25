import { Link } from "react-router-dom";

import "../styles/home.css";

export default function Friday() {
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
        <h2>Vendredi 20 septembre</h2>
        <div className="homeDetailsContainer programContent">
          <h4>21 heures : bal folk avec Trio Bonnin-Campino-Laplanche</h4>
          {/* <img src="/pictures/Initium.jpg" alt="Initium" /> */}
          <p>
          Ils auront l’honneur d’ouvrir la 7ème édition de « Foulpougne Festival » ! Nicolas Campin, Gabriel Bonnin et Anne Laplanche, respectivement à l'accordéon, au violon et au violoncelle, sont trois musiciens issus du collectif de musique traditionnelle tourangeau "La Grand' Bête". Ils proposent un répertoire de compositions et de reprises, autour des danses de la région Centre et d’ailleurs ! Scottishs, mazurkas, bourrées… seront à l'honneur. Le trio, c’est de la musique à danser, de la musique à écouter et surtout à partager.</p>
          <p>Salle des fêtes « Joséphine Baker »</p>
          <h4>23h : bal folk avec Arbadétorne</h4>
          <img src="/pictures/2024_arbadetorne.jpg" alt="Arbadétorne" />
          <p>
          Arbadétorne, aujourd’hui en trio, porte les musiques traditionnelles de Vendée depuis plus de 20 ans. Arbadétorne, c’est un pilier, un fief, un château fort. Avec au sommet de la tour, l’incontournable Maxime Chevrier, tout à la fois musicien, chanteur, danseur, conteur et bateleur. Avec à ses côtés, Mickaël Auger, le prof de diato, l’un des meilleurs spécialistes du répertoire de musique traditionnelle du Poitou-Vendée, et Benoit Michaud, l’homme à la vielle à roue, le musicien à la fois inventif et à l’écoute de l’ensemble.</p>
          <p>Salle des fêtes « Joséphine Baker »</p>
          <h4>L’expo photo</h4>
          <img src="/pictures/2024_myriam_jegat.jpg" alt="Expo" />
          <p>L’équipe de « Foulpougne Festival » est fière d’accueillir cette année la photographe Myriam Jegat. Installée en Bretagne, Myriam Jégat, voue une véritable passion pour la musique bretonne, dans ses formes traditionnelles comme les plus contemporaines, et plus encore, un véritable amour pour les sonneurs, chanteurs, musiciens, danseurs, tous ces porteurs et transmetteurs d’un patrimoine vivant en perpétuel renouvellement. Fêtes, festivals, rencontres interculturelles, créations pour la scène et portraits d’artistes … Voici maintenant plus de dix ans que ses reportages sur l’actualité des musiques traditionnelles de Bretagne sont publiés dans la revue Musique Bretonne. Ces photos inédites témoignent de la bouillonnante scène bretonne de ces dernières années.</p>
          <p>Expo Myriam Jegat, Salle des fêtes. Aux heures d’ouverture durant les trois jours.</p>
          <h4>La grande rétro</h4>
          <img src="/pictures/grande_retro.jpg" alt="Grande rétro" />
          <p>« Foulpougne Festival » propose de revenir en arrière pour découvrir, voir -ou revoir- les temps forts en images de l’édition 2023. Sur grand écran, en boucle et en continu durant tout le festival, ce sera un véritable bonheur de retrouver Initium et Bruno Le Tron, Brindezingue avec Camille Jagueneau, le trio Hoctomoz, Bargainatt avec la « Bazoge Family », Projet Rustik, Marinette et Pere de 21 Boutons !</p>
<p>La grande rétro. Salle des fêtes. Aux heures d’ouverture durant les trois jours.</p>
        </div>
      </section>
    </div>
  );
}
