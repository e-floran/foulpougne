import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

import "../components/styles/summaries.css";

export default function SingleSummary(props){
    const [summary, setSummary] = useState({})
    const { eventTitle, eventText } = summary;
    const {id} = useParams();

    useEffect(()=>{
            axios
            .get(`http://localhost:5000/api/summaries/${id}`)
            .then((response) => response.data)
            .then((data) => {
                setSummary(data)
            });
    },[id])

    return(
        <div className="pageContainer">
            <section  className="summariesContent">
                <h2>{eventTitle}</h2>
                <p>{eventText}</p>
            </section>
            
        </div>
    )
}