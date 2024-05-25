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
        <h2>Samedi 21 septembre</h2>
        <div className="homeDetailsContainer programContent">
          <h4>10 heures : stage de danses débutants</h4>
          <img
            src="/pictures/2024_stage_danses_debutants.jpg"
            alt="danses débutants"
          />
          <p>
          Si vous avez deux pieds, deux jambes, deux bras, alors vous êtes parfaitement équipés pour venir participer à ce stage qui ne demande aucune disposition particulière. Si ce n’est un soupçon de curiosité pour découvrir les danses traditionnelles, toujours très festives. Avec les animateurs et les musiciens présents, vous irez à la rencontre des grands classiques des bals folks : scottish, en dro, polka, cercle circassien, bourrée, chapeloise…
          </p>
          <h4>10 heures : stage de musique d'ensemble</h4>
          <img
            src="/pictures/2024_michael_4b.jpg"
            alt="danses débutants"
          />
          <p>
          Vous avez un accordéon diatonique (en Sol/Do), une guitare, un violon, un nickelharpa, une flûte traversière, une clarinette (liste non exhaustive) et vous avez deux ou trois ans de pratique de votre instrument, alors vous avez tout ce qu’il faut pour venir participer activement au stage de musique d’ensemble que propose Foulpougne Festival. A la baguette (magique ?) Mickaël Auger. Prof de diato, auteur de deux recueils de partitions du répertoire Poitou-Vendée, musicien du groupe Arbadétorne, Mickaël saura idéalement faire découvrir la polaïe, le rond de l’île d’Yeu et la maraichine durant les 5 heures de ce stage (10h-12h, 14h-17h).
          </p>
          <p>Rendez-vous sur l’esplanade de l’Hôtel de ville.
</p>
          <h4>12h : l’apéro !</h4>
          <p>
          Là aussi, c’est devenu une tradition : à midi pile, c’est l’heure de l’ouverture officielle du festival sur l’esplanade de l’Hôtel de ville. Trois blablas, deux interventions, trois jeux de mots, et quelques kilos de sourires, et c’est le p’tit apéro qui va bien. Histoire de bien lancer les « hostilités » folk et trad’ !
          </p>
          <h4>14h : stage de danses de Gascogne</h4>
          <img
            src="/pictures/2024_joachim_montbord.jpg"
            alt="Joachim Montbord"
          />
          <p>
          Joachim Montbord aime transmettre. C’est la raison pour laquelle il sera le maître d’œuvre du stage de danses gasconnes que « Foulpougne Festival » propose cette année. Multi-instrumentiste, multi-styles, Joachim va chercher dans les entrailles du patrimoine musical gascon des perles cachées, qu’il compose, décompose et recompose, qu’il interprète, crée, recrée… « Je déconstruis vraiment les mouvements, note Joachim, pour que tout le monde reparte en sachant danser correctement ». Au menu, congòs et branles d’Ossau.
          </p>
          <p>
            Rendez-vous à la salle des fêtes.
          </p>
          <h4>17h : la scène découverte</h4>
          <img src="/pictures/2024_aux_bons_saucissons_limousins.jpg" alt="Aux bons saucissons limousins" />
          <p>
          « Aux bons saucissons limousins » ! Ca met l’eau à la bouche, non ? Pour un p’tit grignotage en forme de goûter sur le coup de 17 heures ! Aux manettes, un duo de compères qui se connaissent depuis… Oh là là, longtemps ! A la musette du Centre, Philippe Randonneix, « Rando » pour les intimes, au gros chromatique, Gilles Ratier, maître es danses trad’ et par ailleurs expert hexagonal reconnu en bandes dessinées. Au menu du duo, valses, polkas, bourrées, mazurkas, scottishs, branles, sautières, cercles, et aussi, et sans supplément, brise-pieds, polkas piquées, scottish-valses, bourrée-valses…
          </p>
          <p>
          Esplanade de l’Hôtel de Ville (ou salle polyvalente du centre social).
          </p>
          <h4>19h30-21h : tous au ravitaillement !</h4>
          <p>
          Vous avez préparé votre sandwich ? C’est parfait, c’est l’heure de le sortir de la musette. Vous n’avez rien prévu ? Pas grave, vous allez trouver sur place, sur l’esplanade de l’hôtel de ville, deux foodtrucks prêts à vous proposer pas mal de choses très appétissantes. Avec en prime, la buvette ambulante du festival à vos côtés.
          </p>
          <h4>21 heures : bal folk avec Man Encantada</h4>
          <img src="/pictures/2024_man_encantada.jpg" alt="ManEncantada" />
          <p>
          La Man Encantada à Foulpougne ! La main du chaman qui trouble la volonté et le discernement dans la Foulpougne, la… main folle ! Quel programme ! Man Encantada propose un super bal gascon chanté en langue d’òc. Les belles mélodies chantées, textes traditionnels et compositions originales, sont rythmés par l’accordéon et la mandole, et s’envolent au souffle du bugle. Le trio associe les spécialités de chacun : Joachim chante les mélodies de Gascogne, et aime mettre en musique les poètes et les textes traditionnels du Sud-Ouest. Gilles apporte sa connaissance des musiques traditionnelles du Périgord et des alentours, tandis que Jérôme apporte une touche de musique actuelle et de jazz.
          </p>
          <p>
          Avec Joachim Montbord (mandole), Gilles de Becdelièvre (accordéon diatonique), Jérôme Dubois (bugle).
          </p>
          <p>
          Salle des fêtes Joséphine Baker
          </p>

          <h4>23h : bal folk avec Cyrille Brotto – Stéphane Milleret</h4>
          <img src="/pictures/2024_brotto_milleret.jpg" alt="Brotto - Milleret" />
          <p>
          On pourrait penser leur univers et leur approche de la musique à danser très différents, mais la rencontre entre Stéphane Milleret et Cyrille Brotto, talentueux diatoniciens parmi les plus plus groovy du dance floor, est logique tant le respect est mutuel. Après quelques instants d'échange musical, l'intuition intime qu'ils étaient fait pour jouer ensemble s'est révélée évidence. Ce duo est le reflet de deux parcours artistiques qui se questionnent, se frôlent, se rejoignent, entre compositions et airs traditionnels, entre complémentarité et complicité, entre accords et désaccords, entre joute et symbiose.
Diatonique… dynamique, technique, rythmique, atypique !</p>
          <p>
            Salle des fêtes Joséphine Baker
          </p>
        </div>
      </section>
    </div>
  );
}
