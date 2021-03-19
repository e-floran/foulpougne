import "../styles/home.css";

export default function Informations() {
  return (
    <div className="pageContainer">
      <section className="homeContent">
        <h2>Tarifs et informations pratiques</h2>
        <div className="homeDetailsContainer programContent">
          <h3>Contact et renseignements</h3>
          <p>
            Adresse postale : Foulpougne Festival, 5 Cité des Peupliers, 16160,
            Gond-Pontouvre
          </p>
          <p>Téléphone : 05 45 68 32 63 – 06 44 86 67 50</p>
          <a href="https://foulpougne.netlify.app/">Notre site internet</a>
          <p>Mail : patservant@yahoo.fr</p>
          <a href="https://www.facebook.com/FoulpougneFestival">
            Notre page Facebook
          </a>
          <h3>Le lieu</h3>
          <p>Salle des fêtes de Gond-Pontouvre (16)</p>
          <p>Coordonnées GPS : Latitude : 45.6672 / Longitude : 0.16127</p>
          <h3>Restauration</h3>
          <p>Foodtrucks et buvettes sur le site.</p>
          <h3>Les tarifs</h3>
          <article className="pricing">
            <p>Activité</p>
            <p>Tarif standard</p>
            <p>Tarif réduit</p>
            <div className="pricingLeft" />
            <p className="pricingCenter">Stages</p>
            <div className="pricingRight" />
            <p>Danses débutants</p>
            <p>8€</p>
            <p>6€</p>
            <p>Danses du Poitou</p>
            <p>15€</p>
            <p>13€</p>
            <p>Musique d’ensemble</p>
            <p>15€</p>
            <p>13€</p>
            <div className="pricingLeft" />
            <p className="pricingCenter">Bals</p>
            <div className="pricingRight" />
            <p>Vendredi - Castanha é Vinovèl</p>
            <p>10€</p>
            <p>8€</p>
            <p>Samedi - Laüsa et Chaï</p>
            <p>12€</p>
            <p>10€</p>
            <p>Dimanche - Ma Petite</p>
            <p>10€</p>
            <p>8€</p>
            <div className="pricingLeft" />
            <p className="pricingCenter">Pass</p>
            <div className="pricingRight" />
            <p>Pass festival</p>
            <p>50€</p>
            <p>40€</p>
          </article>
          <p>
            Tarif réduit : adhérents de l’association Foulpougne Festival,
            jeunes de 12 à 18 ans, demandeurs d’emploi.
          </p>
        </div>
      </section>
    </div>
  );
}
