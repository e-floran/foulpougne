import { Link } from "react-router-dom";
import axios from "axios";
import {useState, useEffect} from "react";

// import getSummaries from "../utils/apiConsuming";

import "../components/styles/summaries.css";

export default function Summaries(props){
    const {logged}=props;
    const [summariesList, setSummariesList] = useState([]);
    // const summariesGetter = async () =>{
    //     const result = await getSummaries();
    //     return result;
    // }
    useEffect(()=>{
        axios
        .get("http://localhost:5000/api/summaries")
        .then((response) => response.data)
        .then((data) => {
            setSummariesList(data)
        });
    },[])
    if (summariesList !==[]){
        console.log(summariesList);
    }
    return(
        <div className="pageContainer">
            <section className="summariesMenu">
            <ul>
            {summariesList.map((s) => (
            <Link   key={s.id} to="/add/" title={s.eventReference} ><li>{s.eventReference}</li></Link>
            ))}
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