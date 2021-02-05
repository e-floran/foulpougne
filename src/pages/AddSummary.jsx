import axios from "axios";
import {useState} from "react";
import { useHistory } from 'react-router-dom';


import "../components/styles/add.css";

export default function AddSummary(props){
    const {logged}=props;
    const [formContent, setFormContent] = useState({
        eventReference : "",
        eventDate : "",
        eventTitle : "",
        eventText : ""
    });
    const history = useHistory();


    const handleChange = (name) => {
        return ({ target: { value } }) => {
          setFormContent((oldValues) => ({ ...oldValues, [name]: value }));
        };
      };
    const handleSubmit = (e) =>{
        e.preventDefault();
        const { eventReference, eventDate, eventTitle, eventText } = formContent;
        if(eventReference && eventDate && eventTitle && eventText){
            axios.post("http://localhost:5000/api/summaries", formContent)
            .then((response) => response.data)
            .then(
            (res) => {
                console.log('success', res);
                history.replace('/');
            },
            (err) =>
            console.log('error', 'Your login details are wrong')
            );
        } else {
            console.log("All fields must be completed");
        }
    }

    return(
        <div className="pageContainer">
            {logged && <section  className="addContent">
                <form onSubmit={handleSubmit}>
                    <label>Reférence
                        <input name="eventReference" type="text" value={formContent.eventReference || ""} onChange={handleChange('eventReference')}/>
                    </label>
                    <label>Date
                        <input name="eventDate" type="date" value={formContent.eventDate || ""} onChange={handleChange('eventDate')}/>
                    </label>
                    <label>Titre
                        <input name="eventTitle" type="text" value={formContent.eventTitle || ""} onChange={handleChange('eventTitle')}/>
                    </label>
                    <label>Texte
                        <textarea name="eventText" maxlength="30000" value={formContent.eventText || ""} onChange={handleChange('eventText')}/>
                    </label>
                    <button>Envoyer</button>
                </form>
            </section>}
        </div>
    )
}