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
        <h2>Dimanche 24 septembre</h2>
        <div className="homeDetailsContainer programContent">
          <h4>14h30 : le bel après-midi avec « 21 Boutons »</h4>
          <img src="/pictures/21_boutons.jpg" alt="21 Boutons" />
          <p>
          Mais comment font-ils ? Lui en Catalogne, elle en Belgique. Réponse : ils font… Malgré la distance qui les sépare. Et ça dure depuis 2006 ! Et brillamment ! Tout là-haut, Marinette Bonnert. Tout en bas, Pere Romani. Deux accordéons diatoniques qui s’accordent à merveille. 17 ans de balades, de virées, de voyages avec 21 boutons d’un côté, 21 boutons de l’autre (c’est le minimum pour un diato !), beaucoup de kilomètres, de pays traversés, de musiciens rencontrés, de solides amitiés forgées… En ce bel après-midi dominical, ils sont là, à Gond-Pontouvre, pour refermer la page de « Foulpougne Festival » 2023. Ils vous attendent. 
          </p>
          <p>Avec Marinette Bonnert (accordéon diatonique) et Pere Romani (accordéon diatonique).</p>
          <h4>L’expo photo</h4>
          <img src="/pictures/expo_photo.jpg" alt="Expo" />
          <p>Cette année « Foulpougne Festival » donne la parole à Patrice Dalmagne. Photographe installé à Lorient, Patrice Dalmagne est depuis une quarantaine d’années un spécialiste des clichés liés à la musique, la danse, la lutherie et les portraits d'artistes des musiques traditionnelles du monde. Journaliste durant très longtemps à « Trad Magazine » il a croisé des centaines d’artistes, sur scène et en coulisses. Chanteurs pakistanais, derviches tourneurs, virtuoses du bouzouki, sonneurs des bagadou de Bretagne, artistes africains, violoneux du Limousin ou spécialistes du zydéco de Louisiane, Patrice Dalmagne a tout photographié. Ce sont ces traces indélébiles sur la pellicule que l’on vous propose de découvrir.
Expo Patrice Dalmagne. Salle des fêtes. Aux heures d’ouverture.</p>
          <h4>La grande rétro</h4>
          <img src="/pictures/grande_retro.jpg" alt="Grande rétro" />
          <p>Comme tous les ans, « Foulpougne Festival » propose de revenir en arrière pour découvrir, voir -ou revoir- les temps forts en images de l’édition 2022. Sur grand écran, en boucle et en continu durant tout le festival, ce sera un véritable bonheur de retrouver Naragonia, Rémi Geffroy, Trio Traezh, Socam, Komred et les Tralala Lovers ! 
La grande rétro. Salle des fêtes. Aux heures d’ouverture.</p>
        </div>
      </section>
    </div>
  );
}
