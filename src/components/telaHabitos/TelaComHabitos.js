import CriacaoHabito from "./criacaoHabito/CriacaoHabito";
import Habito from "./habito/Habito";

export default function TelaComHabitos(props) {

    const {token, listaHabitos, setReload, setCriacaoHabito, criacaoHabito} = props;

    if (criacaoHabito) {
        return (
            <main>
                <section className="habitos">
                    <h3>Meus habitos</h3>
                    <button onClick={() => setCriacaoHabito(true)}>
                        <span>+</span>
                    </button>
                </section>
                <ul>    
                    <CriacaoHabito callback={setCriacaoHabito} token={token} setReload={setReload}/>
                    {listaHabitos.map(habito => {
                        const {id, name, days} = habito;
                        return <Habito key={id} id={id} titulo={name} dias={days} token={token} setReload={setReload}/>
                    })}  
                </ul>
            </main>
        )
    } else {
        return (
            <main>
                <section className="habitos">
                    <h3>Meus habitos</h3>
                    <button onClick={() => setCriacaoHabito(true)}>
                        <span>+</span>
                    </button>
                </section>
                <ul>
                    {listaHabitos.map(habito => {
                        const {id, name, days} = habito;
                        return <Habito key={id} id={id} titulo={name} dias={days} token={token} setReload={setReload}/>
                    })}   
                </ul>
            </main>
        )
    }
}