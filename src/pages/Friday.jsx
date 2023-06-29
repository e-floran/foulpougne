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
        <h2>Vendredi 22 septembre</h2>
        <div className="homeDetailsContainer programContent">
          <h4>21 heures : ouverture du bal avec « Initium »</h4>
          <img src="/pictures/Initium.jpg" alt="Initium" />
          <p>
          C’est parti ! Ce vendredi 22, on est au taquet et on attaque ! Nous vous invitons à entrer dans la danse avec... "Initium" le groupe cher à Bruno Le Tron. La musique du trio, inspirée des balades entre Préalpes et Cévennes, en passant par l'île de Bréhat, est une franche invitation à se lever de sa chaise et à chalouper une mazurka ou à se déchaîner sur une chapeloise. Le diato répond à la guitare douze cordes, quand ce ne sont pas les clarinettes qui s'en mêlent. Des "notes énergiques ou satinées, rayonnantes ou intimes" comme le disent eux-mêmes les musicos ! Bon bal !          </p>
          <p>Avec Bruno Le Tron (diato), Franck Fagon (saxo-clarinette), Pablo Molard (guitare) et Laurent Cabané (contrebasse).</p>
          <h4>23h15 : on continue avec « Brindezingue »</h4>
          <img src="/pictures/Brindezingue.jpg" alt="Brindezingue" />
          <p>
          Attention ! Le bal continue ! Car juste après Initium va débarquer… «Brindezingue» ! Si, si, Brindezingue, les furieux du Poitou ! Un trio dont l’histoire tient d’une « sympathique collision poitevine » (avouent-ils…) entre deux violoneux complices et bagarreurs, et un claviériste à l’humeur légèrement perturbatrice. Ensemble, cela donne un trio assez unique qui met un point d’honneur à livrer une belle musique à danser, composée de morceaux issus de collectages mais aussi de compositions très travaillées, laquelle musique, sous les doigts du trio, devient carrément… Brindezingue !</p>
          <p>Avec Camille Jagueneau au violon et à la voix, Alexandre Benoist au violon, et Julien Deborde aux claviers.</p>
          <h4>L’expo photo</h4>
          <img src="/pictures/expo_photo.jpg" alt="Expo" />
          <p>Cette année « Foulpougne Festival » donne la parole à Patrice Dalmagne. Photographe installé à Lorient, Patrice Dalmagne est depuis une quarantaine d’années un spécialiste des clichés liés à la musique, la danse, la lutherie et les portraits d'artistes des musiques traditionnelles du monde. Journaliste durant très longtemps à « Trad Magazine » il a croisé des centaines d’artistes, sur scène et en coulisses. Chanteurs pakistanais, derviches tourneurs, virtuoses du bouzouki, sonneurs des bagadou de Bretagne, artistes africains, violoneux du Limousin ou spécialistes du zydéco de Louisiane, Patrice Dalmagne a tout photographié. Ce sont ces traces indélébiles sur la pellicule que l’on vous propose de découvrir.
</p>
<p>Expo Patrice Dalmagne. Salle des fêtes. Aux heures d’ouverture durant les trois jours.</p>
          <h4>La grande rétro</h4>
          <img src="/pictures/grande_retro.jpg" alt="Grande rétro" />
          <p>Comme tous les ans, « Foulpougne Festival » propose de revenir en arrière pour découvrir, voir -ou revoir- les temps forts en images de l’édition 2022. Sur grand écran, en boucle et en continu durant tout le festival, ce sera un véritable bonheur de retrouver Naragonia, Rémi Geffroy, Trio Traezh, Socam, Komred et les Tralala Lovers ! 
</p>
<p>La grande rétro. Salle des fêtes. Aux heures d’ouverture durant les trois jours.</p>
        </div>
      </section>
    </div>
  );
}
