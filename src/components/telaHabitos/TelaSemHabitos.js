import CriacaoHabito from "./criacaoHabito/CriacaoHabito";

export default function TelaSemHabitos(props) {

    const {token, setReload, setCriacaoHabito, criacaoHabito} = props;

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
                </ul>
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
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
                <p>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </p>
            </main>
        )
    }
}