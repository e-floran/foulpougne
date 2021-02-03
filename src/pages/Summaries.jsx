import "../components/styles/summaries.css";
export default function Summaries(){
    return(
        <div className="pageContainer">
            <section className="summariesMenu">
            <ul>
                <li>2019</li>
                <li>2018</li>
            </ul>
            <button>Ajouter un résumé</button>
            </section>
            <section  className="summariesContent">
                <h2>Retrouvez les résumés des éditions précédentes</h2>
                <p>Pour revivre les éditions auxquelles vous avez participé ou voir ce que vous avez raté, vous pouvez consulter nos archives.</p>
            </section>
            
        </div>
    )
}