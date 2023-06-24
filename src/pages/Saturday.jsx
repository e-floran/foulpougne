import { Link } from "react-router-dom";

import "../styles/home.css";

export default function Saturday() {
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
        <h2>Samedi 23 septembre</h2>
        <div className="homeDetailsContainer programContent">
          <h4>10 heures : stage de danses débutants</h4>
          <img
            src="/pictures/stage_danses_debutants.jpg"
            alt="danses débutants"
          />
          <p>
          Si vous avez deux pieds, deux jambes, deux bras, alors vous êtes parfaitement équipés pour venir participer à ce stage qui ne demande aucune disposition particulière. Si ce n’est un soupçon de curiosité pour découvrir les danses traditionnelles, toujours très festives. Avec les animateurs et les musiciens présents, vous irez à la rencontre des grands classiques des bals folks : scottish, en dro, polka, cercle circassien, bourrée, chapeloise…
Rendez-vous sur l’esplanade de l’Hôtel de ville.
          </p>
          <h4>12h : l’apéro !</h4>
          <p>
          Là aussi, c’est devenu une tradition : à midi pile, c’est l’heure de l’ouverture officielle du festival sur l’esplanade de l’Hôtel de ville. Trois blablas, deux interventions, trois jeux de mots, et quelques kilos de sourires, et c’est le p’tit apéro qui va bien. Histoire de bien lancer les « hostilités » folk et trad’ !
          </p>
          <h4>14h-17h : stage de danses de Wallonie</h4>
          <img
            src="/pictures/stage_danses_de_wallonie.jpg"
            alt="danse de Wallonie"
          />
          <p>
          Cette année, nous vous proposons de mettre le cap sur le nord ! Pour découvrir les danses de Wallonie. La Wallonie constituant, pour info, le sud de la Belgique ! Avec de belles cités comme Liège, Charleroi, Mons, Bastogne, Namur… C’est là, dans ce beau et plat pays qu’est née Marinette Bonnert qui a commencé l’accordéon à l’âge de 12 ans avec Louis Spagna, fameux maître de musique à danser en Wallonie. C’est avec lui qu’elle découvre l’importance de la relation entre les danseurs et les musiciens. Elle ira ensuite suivre des stages de danses un peu partout en Europe, avant de s’intéresser à la spécificité de la musique wallonne, en partageant son expérience lors d’ateliers de danse, stages d’accordéon, concerts, spectacles de danse tant en Belgique qu’à l’étranger. C’est avec Pere Romani, son compère de 21 Boutons qu’elle va animer ce stage de danses wallonnes.
Rendez-vous à la salle des fêtes.
          </p>
          <h4>14h-17h : stage d’accordéon diatonique</h4>
          <img src="/pictures/stage_accordeon.jpg" alt="Stage d'accordéon" />
          <p>
          Le diato, c’est rigolo. Et surtout, c’est beau ! C’est la raison pour laquelle on s’est dit qu’un stage dédié à ce bel instrument serait le bienvenu. Durant trois heures, les amateurs vont pouvoir faire du tiré-poussé en compagnie de Léon Ollivier, le « diato chef » du groupe Bargainatt. 
Pour cela, il conviendra de s’équiper d’un diato en tonalité Sol/Do comportant un minimum de deux rangées main droite et huit basses main gauche. Ensuite tout s’enchaînera, où il sera question d’écoute, de cadence, de « groove », de musicalité, d’harmonie, de rythmique, d’ornementation, de phrasé… tout cela au service de la danse, bien sûr ! Précaution : ayez déjà connaissance de votre instrument, un peu d’expérience ne fait pas de mal. Conseil : un crayon, un petit carnet, un enregistreur (pourquoi pas !), peuvent être utiles. 
Rendez-vous sur l’esplanade de l’Hôtel de ville.
          </p>
          <h4>17h-19h30 : la scène Découverte</h4>
          <img src="/pictures/projet_rustik.jpg" alt="Projet Rustik" />
          <p>
          Cette année, pour cette belle tranche horaire du samedi qui se glisse entre la fin des stages et le dîner, nous vous proposons de rencontrer « Projet Rustik ». Un duo que compose Laurent Papon, au violon alto, et Jean-Luc Barraud, à la guitare. Forts de leurs deux albums, dont le dernier est sorti en avril 2021, ces deux musiciens vont offrir un patchwork vivifiant de bourrée, scottish, mazurka, rondeau, valse, cercle… 
A découvrir : sur l’esplanade de l’Hôtel de ville (s’il fait beau temps), dans la grande salle du Centre Social (si le soleil boude).
          </p>
          <h4>19h30-21h : tous au ravitaillement !</h4>
          <p>
          Vous avez préparé votre sandwich ? C’est parfait, c’est l’heure de le sortir de la musette. Vous n’avez rien prévu ? Pas grave, vous allez trouver sur place, sur l’esplanade de l’hôtel de ville, deux foodtrucks prêts à vous proposer pas mal de choses très appétissantes. Avec en prime, la buvette ambulante du festival à vos côtés.
          </p>
          <h4>21 heures : ouverture du bal avec « Hoctomoz »</h4>
          <img src="/pictures/hoctomoz.jpg" alt="Hoctomoz" />
          <p>
          Après Initium et Brindezingue vendredi, savez-vous qui "Foulpougne Festival" a invité, pour ouvrir la soirée du 23 septembre ? Un ch'tit trio qui a fait ses preuves, des d'jeunes qui n'en veulent et qui vont bien chauffer la salle ! Ah oui, le nom du groupe ? "Hoctomoz" qu'il s'appelle le trio. Ca vous parle ? Une flûte traversière (Lilian Guillemeney), un diato (Régis Marlaud) et un violon (Paul Fermé), et au total, trois garçons qui ont en commun le plaisir de la composition, de l’arrangement et celui de danser et de faire danser. Autant dire que ça devrait le faire ! Prenez place !!!
          </p>

          <h4>23h15 : on enchaîne avec « Bargainatt »</h4>
          <img src="/pictures/bargainatt.jpg" alt="Bargainatt" />
          <p>
          On ne le présente plus. Enfin, si un peu, quand même… Bien ancré dans le paysage du trad’ européen (le groupe est né en 2016), Bargainatt écume les scènes et les salles depuis sept ans. Une belle bande de copains qui a commencé par emprunter aux grands prédécesseurs (Shillelagh, Naragonia…) et par taper dans les répertoires traditionnels avant de se lancer dans la composition de ses propres créations. 2018, 1er CD, 2020, 2ème CD. 150 bals plus tard, ils sont là, devant vous, pour vous entraîner de l’Auvergne à la Bretagne, en passant par le Poitou et la Gascogne. Un voyage aux multiples couleurs et influences, plein d’énergie et de fraicheur.
          </p>
          <p>Avec Youmi Bazoge (violon et chant), Léon Ollivier (accordéon diatonique), Camille Stimbre (violon) et Noé Bazoge (violoncelle).
          </p>
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
