import "../styles/home.css";

export default function Informations() {
  return (
    <div className="pageContainer">
      <section className="homeContent">
        <h2>Tarifs et informations pratiques</h2>
        <div className="homeDetailsContainer programContent">
          <h3>Contact et renseignements</h3>
          <a
            href="/pictures/Plaquette_inscription_2022.docx"
            download="fiche_inscription_foulpougne_2022.docx"
          >
            Téléchargez la fiche d'inscription 2022
          </a>
          {/* <a
            href="/pictures/fiche_inscription_2021.jpg"
            download="fiche_inscription_foulpougne_2021"
          >
            <img
              src="/pictures/fiche_inscription_2021.jpg"
              alt="La fiche d'inscription 2021"
            ></img>
          </a> */}
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
          <p>
            Salle des fêtes, avenue du Général-De-Gaulle, Gond-Pontouvre (16)
          </p>
          <p>Coordonnées GPS : Latitude : 45.6672 / Longitude : 0.16127</p>
          <h3>Restauration</h3>
          <p>Foodtrucks et buvettes sur le site.</p>
          {/* <h3>Les tarifs</h3>
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
          </p> */}
        </div>
      </section>
      <section className="programContent">
        <h3>Les sites internet des copains</h3>
        <article className="buddysContainer">
          <div className="singleBuddy">
            <a href="https://traden16.wordpress.com/" className="buddyName">
              Trad en 16 (Gond-Pontouvre)
            </a>
            <a href="https://www.facebook.com/Traden16" className="buddySocial">
              Leur page Facebook
            </a>
          </div>
          <div className="singleBuddy">
            <p className="buddyName">Temps Danse Folk (Saint-Yrieix)</p>
            <a
              href="https://www.facebook.com/TempsDanseAreFolk/"
              className="buddySocial"
            >
              Leur page Facebook
            </a>
          </div>
          <div className="singleBuddy">
            <a
              href="https://sites.google.com/site/losvironaires/home"
              className="buddyName"
            >
              Los Vironaires (Saint-Adjutory)
            </a>
          </div>
          <div className="singleBuddy">
            <a href="http://www.lesrabalbots.sitew.fr/" className="buddyName">
              Les Rabalbots (Fléac)
            </a>
          </div>
          <div className="singleBuddy">
            <p className="buddyName">
              Amicale des Bretons d’Angoulême et de la Charente (Angoulême)
            </p>
            <a
              href="https://www.facebook.com/Amicale-des-Bretons-dAngoulême-et-de-la-Charente-567129210007467/"
              className="buddySocial"
            >
              Leur page Facebook
            </a>
          </div>
          <div className="singleBuddy">
            <p className="buddyName">Carantam (Angoulême)</p>
            <a
              href="https://m.facebook.com/carantam.fr/?ref=page_internal&mt_nav=0"
              className="buddySocial"
            >
              Leur page Facebook
            </a>
          </div>
          <div className="singleBuddy">
            <p className="buddyName">Isla (Saint-Yrieix)</p>
            <a
              href="https://www.facebook.com/groupeisla"
              className="buddySocial"
            >
              Leur page Facebook
            </a>
          </div>
          <div className="singleBuddy">
            <p className="buddyName">Les bœufs d’Angoulême</p>
            <a
              href="https://www.facebook.com/groups/1517791418460216/?fref=ts"
              className="buddySocial"
            >
              Leur page Facebook
            </a>
          </div>
          <div className="singleBuddy">
            <a href="http://www.balrousse.sitew.fr/" className="buddyName">
              Balrousse (Garat)
            </a>
          </div>
          <div className="singleBuddy">
            <a href="http://balensoir.simplesite.com/" className="buddyName">
              Bal en Soir (Salles d’Angles)
            </a>
          </div>
          <div className="singleBuddy">
            <p className="buddyName">La Ronde des Fins Bois (Rouillac)</p>
            <p>Leur numéro de téléphone : 05 45 21 79 48</p>
          </div>
          <div className="singleBuddy">
            <p className="buddyName">Lo Gerbo Baudo (Confolens)</p>
            <a
              href="https://www.facebook.com/logerbobaudo"
              className="buddySocial"
            >
              Leur page Facebook
            </a>
          </div>
          <div className="singleBuddy">
            <a
              href="https://feunouvia.wixsite.com/feunouvia"
              className="buddyName"
            >
              Feu Nouvia (Préguillac – Charente-Maritime)
            </a>
            <a
              href="https://www.facebook.com/Feu-Nouvia-1681356052128178/"
              className="buddySocial"
            >
              Leur page Facebook
            </a>
          </div>
          <div className="singleBuddy">
            <a href="https://www.lesetournias.fr/" className="buddyName">
              Les Etournias (Puilboreau – Charente-Maritime)
            </a>
          </div>
        </article>
      </section>
    </div>
  );
}
