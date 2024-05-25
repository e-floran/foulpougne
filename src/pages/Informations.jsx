import "../styles/home.css";

export default function Informations() {
  return (
    <div className="pageContainer">
      <section className="homeContent">
        <h2>Tarifs et informations pratiques</h2>
        <div className="homeDetailsContainer programContent">
          <h3>Contact et renseignements</h3>
          {/* <a
            href="/pictures/Plaquette_inscription_2022.docx"
            download="fiche_inscription_foulpougne_2022.docx"
          >
            Téléchargez la fiche d'inscription 2022
          </a> */}
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
          {/* <p>Téléphone : 05 45 68 32 63 – 06 44 86 67 50 - 06 75 55 25 89</p> */}
          <p>Mail : contact.foulpougne@gmail.com</p>
          <a href="https://foulpougnefestival.netlify.app/">
            Notre site internet
          </a>
          <a href="https://www.facebook.com/FoulpougneFestival">
            Notre page Facebook
          </a>
          <a href="https://www.helloasso.com/associations/foulpougne-
festival/evenements/foulpougne-festival-2024">
  Notre page HelloAsso
</a>
          <h3>Le lieu</h3>
          <p>
            Salle des fêtes Joséphine Baker, avenue du Général-De-Gaulle, Gond-Pontouvre (16)
          </p>
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
            <p>9€</p>
            <p>9€</p>
            <p>Danses de Gascogne</p>
            <p>18€</p>
            <p>18€</p>
            <p>Stage de musique d'ensemble</p>
            <p>25€</p>
            <p>25€</p>
            <div className="pricingLeft" />
            <p className="pricingCenter">Bals</p>
            <div className="pricingRight" />
            <p>Vendredi</p>
            <p>14€ (prévente) 16€ (après le 15/09)</p>
            <p>10€</p>
            <p>Samedi</p>
            <p>14€ (prévente) 16€ (après le 15/09)</p>
            <p>10€</p>
            <p>Dimanche</p>
            <p>11€ (prévente) 13€ (après le 15/09)</p>
            <p>9€</p>
            <div className="pricingLeft" />
            <p className="pricingCenter">Pass</p>
            <div className="pricingRight" />
            <p>Pass 3 bals</p>
            <p>33€ (prévente)</p>
            <p>27€</p>
          </article>
          <p>
            Tarif réduit : adhérents de l’association Foulpougne Festival,
            jeunes de 12 à 18 ans, demandeurs d’emploi (sur justificatif).
          </p>
          <a href="https://www.helloasso.com/associations/foulpougne-
festival/evenements/foulpougne-festival-2024">Réservations sur Helloasso</a>
        </div>
      </section>
      <section className="programContent">
          <h3>Hébergements festivaliers</h3>
          <h4>Camping avec location possible de mobil homes</h4>
          <p>Camping du plan d'eau</p>
          <p>Terrain de camping</p>
          <p>Saint-Yrieix-sur-Charente - 05 45 92 14 64</p>
          <h4>Parking mobil home</h4>
          <p>Parking gratuit</p>
          <p>14 boulevard Besson-Bey</p>
          <p>16000 Angoulême</p>
          <h4>Parking gratuit</h4>
          <p>Place de l'Hôtel-de-Ville</p>
          <p>16160 Gond-Pontouvre</p>
          <h4>Hôtels et maisons d'hôtes</h4>
<p>B and B (2 étoiles) : 4 rue de la Croix-Blanche, 16160 Gond-Pontouvre. 0 890 10 67 04</p>
<p>Hôtel Saint Antoine (3 étoiles) : 2 rue du Gond, 16000 Angoulême. 05 45 68 38 21</p>
<p>Hôtel F1 Angoulême (1 étoile) : 210 rue des Meneaux, 16430 Champniers. 0 891 70 51 62</p>
<p>Ibis budget Angoulême Nord (2 étoiles) : 172 rue des Meneaux, 16430 Champniers. 0 892 70 09 41</p>
<p>Au Moulin Neuf : 34 rue du Moulin-Neuf, 16160 Gond-Pontouvre. 05 45 94 50 29</p>
<p>Bed & Breakfast Les Hauts de Chalonne (6 chambres)
Lieu-dit Chalonne, 27 rue Corneille, 16160 Gond-Pontouvre</p>
<p>Hôtel Kyriad Angoulême Nord - Champniers (3 étoiles) : 184 rue des Platanes, 16430 Champniers. 05 45 68 03 22</p>
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
