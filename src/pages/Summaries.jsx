import { Link } from "react-router-dom";
import {useState, useEffect} from "react";

import getSummaries from "../utils/apiConsuming";

import "../components/styles/summaries.css";

export default function Summaries(props){
    const {logged}=props;
    const [summariesList, setSummariesList] = useState([]);
    
    useEffect(()=>{
        getSummaries(setSummariesList);
    },[])
    
    return(
        <div className="pageContainer">
            <section className="summariesMenu">
            <ul>
            {summariesList.map((s) => (
            <Link   key={s.id} to={"/summaries/"+ s.id} title={s.eventReference}><li>{s.eventReference}</li></Link>
            ))}
            </ul>
            {logged && <Link to="/add/" title="Ajout d'un résumé">Ajouter un résumé</Link>}
            
            </section>
            <section  className="summariesContent">
                <h2>Retrouvez les résumés des éditions précédentes</h2>
                <p>L’univers de la musique et de la danse trad’ en Charente relève-t-il plus d’un monde en perte de vitesse que d’un secteur culturel prometteur ? A la lueur du niveau d’activité dans ce domaine en Charente, la réponse serait volontiers… « oui ».</p>
                <p>Ce constat a été formulé il y a déjà quelques années par Patrick, un vieux routier de ce monde des musiques et des danses traditionnelles. Lequel, pour conjurer le « mauvais sort » -en clair la disparition complète à terme des danses et des musiques trad’ en Charente- a provoqué une réunion inédite à la fin de l’année 2016, invitant tout ce que la Charente compte -encore- de forces vives dans ce domaine. Convaincus du bien-fondé de la démarche, une poignée d’amoureux du trad, issus de diverses associations charentaises, s’est immédiatement mobilisée pour imaginer un rendez-vous annuel, festif, convivial. « Foulpougne Festival » était né.</p>
            </section>
            
        </div>
    )
}