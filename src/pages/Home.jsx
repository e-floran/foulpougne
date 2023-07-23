import "../styles/home.css";

export default function Home() {
  return (
    <div className="pageContainer">
      <section className="homeContent">
        <h2>La prochaine édition du festival aura lieu</h2>
        <h2> du 22 au 24 septembre 2023</h2>
        <article className="homePictureContainer">
          <img src="/pictures/affiche_2023.png" alt="affiche 2023 du festival Foulpougne" />
        </article>
        {/* <div className="homeDetailsContainer">
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
        </div> */}
      </section>
    </div>
  );
}
