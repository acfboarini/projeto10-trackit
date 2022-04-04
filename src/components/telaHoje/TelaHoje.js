import Header from "../header/Header";

export default function TelaHoje({token, imagem}) {
    return (
        <>
            <Header imagem={imagem}/>
            <h1>Tela Hoje</h1>
        </>
    );
}