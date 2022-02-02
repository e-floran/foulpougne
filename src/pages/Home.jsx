import "../styles/home.css";

export default function Home() {
  return (
    <div className="pageContainer">
      <section className="homeContent">
        <h2>La prochaine édition du festival aura lieu</h2>
        <h2> du 23 au 25 septembre 2022</h2>
        <div className="homeDetailsContainer">
          <article>
            <h3>Vendredi 23</h3>
            <p>À venir</p>
          </article>
          <article>
            <h3>Samedi 24</h3>
            <p>À venir</p>
          </article>
          <article>
            <h3>Dimanche 25</h3>
            <p>À venir</p>
          </article>
        </div>
        <div className="homeDetailsContainer homeCovidContainer">
          <article>
            <h3>
              Le cadre sanitaire national s’imposant à tous, la réglementation
              relative au pass sanitaire s’appliquera à Foulpougne Festival.
            </h3>
            {/* <p>
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
            </ul> */}
          </article>
          {/* <img
            src="/pictures/affiche_2021.jpg"
            alt="L'affiche de l'édition 2021"
          ></img> */}
        </div>
      </section>
    </div>
  );
}
