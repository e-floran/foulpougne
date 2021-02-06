import {useState, useEffect} from "react";

import "../components/styles/login.css";

export default function Login(){
    const [logged, setLogged] = useState(false);

    const handleLog = (e) =>{
        if(logged===null){
            localStorage.setItem('logged', true);
            setLogged(true);
        } else if (logged===false){
            localStorage.removeItem('logged');
            localStorage.setItem('logged', true);
            setLogged(true);
        } else{
            localStorage.removeItem('logged');
            localStorage.setItem('logged', false);
            setLogged(false);
        }
    }
    
    useEffect(()=>{
        if(logged.toString() !== localStorage.logged){
            setLogged(localStorage.logged);
        }
    })

    return(
        <div className="pageContainer">
            {logged
            ? <section  className="loginContent">
                <form onSubmit={handleLog}>
                    <button>Déconnexion</button>
                </form>
            </section>
            : <section  className="loginContent">
                <form onSubmit={handleLog}>
                    <label>Identifiant
                        <input name="identifier" placeholder="Entrez votre identifiant" type="text"/>
                    </label>
                    <label>Mot de passe
                        <input name="password" placeholder="Entrez votre mot de passe" type="password"/>
                    </label>
                    <button>Connexion</button>
                </form>
            </section>}
        </div>
    )
}