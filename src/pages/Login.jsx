import "../components/styles/login.css";
export default function Login(){
    return(
        <div className="pageContainer">
            <section  className="loginContent">
                <form>
                    <label>Identifiant
                        <input name="identifier" placeholder="Entrez votre identifiant" type="text"/>
                    </label>
                    <label>Mot de passe
                        <input name="password" placeholder="Entrez votre mot de passe" type="password"/>
                    </label>
                    <button>Connexion</button>
                </form>
            </section>
            
        </div>
    )
}