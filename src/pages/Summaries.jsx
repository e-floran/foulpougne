import { Link } from "react-router-dom";

import getSummaries from "../utils/apiConsuming";

import "../components/styles/summaries.css";

export default function Summaries(props){
    const {logged}=props;
    const summariesGetter = async () =>{
        return await getSummaries();
    } 

    return(
        <div className="pageContainer">
            <section className="summariesMenu">
            <ul>
                <li>2019</li>
                <li>2018</li>
            </ul>
            {logged && <Link to="/add/" title="Ajout d'un résumé">Ajouter un résumé</Link>}
            
            </section>
            <section  className="summariesContent">
                <h2>Retrouvez les résumés des éditions précédentes</h2>
                <p>Pour revivre les éditions auxquelles vous avez participé ou voir ce que vous avez raté, vous pouvez consulter nos archives.</p>
            </section>
            
        </div>
    )
}