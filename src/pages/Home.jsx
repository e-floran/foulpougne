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
            <p>Bal d’ouverture du festival avec « Castanha é Vinovèl ».</p>
          </article>
          <article>
            <h3>Samedi 25</h3>
            <p>
              Stages de musique d’ensemble (répertoire Gascogne), stages de
              danses (stage danses débutants et stage danses du Poitou),
              « l’Entre Deux » (scène découverte), rencontres, expo photos…
            </p>
            <p>Double bal avec « Laüsa » puis avec « Chaï ».</p>
          </article>
          <article>
            <h3>Dimanche 26</h3>
            <p>
              Le casse-croûte sympa et le p’tit bal de clôture avec « Ma
              Petite ».
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
