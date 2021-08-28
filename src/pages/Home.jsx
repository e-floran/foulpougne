import "../styles/home.css";

export default function Home() {
  return (
    <div className="pageContainer">
      <section className="homeContent">
        <h2>La prochaine édition du festival aura lieu</h2>
        <h2> du 24 au 26 septembre 2021</h2>
        <div className="homeDetailsContainer">
          <article>
            <h3>Vendredi 24</h3>
            <p>
              Le grand bal d'ouverture avec le duo Benoît Roblin - Christian
              Pacher
            </p>
          </article>
          <article>
            <h3>Samedi 25</h3>
            <p>
              Stages de musique d’ensemble (répertoire Gascogne), stages de
              danses (stage danses débutants et stage danses du Poitou),
              « l’Entre Deux » (scène découverte), rencontres, expo photos…
            </p>
            <p>Double bal avec « Chaï » puis avec « Laüsa ».</p>
          </article>
          <article>
            <h3>Dimanche 26</h3>
            <p>
              Le casse-croûte sympa et le p’tit bal de clôture avec « Ma
              Petite ».
            </p>
          </article>
        </div>
        <div className="homeDetailsContainer homeCovidContainer">
          <article>
            <h3>
              Le cadre sanitaire national s’imposant à tous, la réglementation
              relative au pass sanitaire s’appliquera à Foulpougne Festival.
            </h3>
            <p>
              Pour les stages et les bals, il sera obligatoire de pouvoir
              présenter :
            </p>
            <ul>
              <li>
                Soit une attestation certifiant d’un schéma vaccinal complet (de
                plus de 15 jours)
              </li>
              <li>
                Soit la preuve d’un test négatif (PCR ou antigénique) de moins
                de 48 heures
              </li>
              <li>
                Soit le résultat d’un test positif (PCR ou antigénique)
                attestant du rétablissement de la Covid-19 (datant d’au moins 11
                jours et de moins de 6 mois)
              </li>
            </ul>
          </article>
          <img
            src="/pictures/affiche_2021.jpg"
            alt="L'affiche de l'édition 2021"
          ></img>
        </div>
      </section>
    </div>
  );
}
