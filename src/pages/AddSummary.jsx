import "../components/styles/add.css";
export default function AddSummary(props){
    const {logged}=props;
    return(
        <div className="pageContainer">
            {logged && <section  className="addContent">
                <form>
                    <label>Reférence
                        <input name="reference" placeholder="Entrez la reférence" type="text"/>
                    </label>
                    <label>Date
                        <input name="date" type="date"/>
                    </label>
                    <label>Titre
                        <input name="title" placeholder="Entrez le titre" type="text"/>
                    </label>
                    <label>Texte
                        <textarea name="text" placeholder="Entrez le texte" maxlength="30000"/>
                    </label>
                    <button>Envoyer</button>
                </form>
            </section>}
        </div>
    )
}