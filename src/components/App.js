import { BrowserRouter, Routes, Route } from "react-router-dom";


/* Imports Telas */
import Header from "./header/Header";
import TelaLogin from "./telaLogin/TelaLogin";
import TelaCadastro from "./telaCadastro/TelaCadastro";
import TelaHabitos from "./telaHabitos/TelaHabitos";
import TelaHoje from "./telaHoje/TelaHoje";
import TelaHistorico from "./telaHistorico/TelaHistorico";

/* Imports estilos */
import "./../styles/reset.css";
import "./../styles/style.css";

export default function App() {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<TelaLogin/>}></Route>
                <Route path="/cadastro" element={<TelaCadastro/>}></Route>
                <Route path="/habitos" element={<TelaHabitos/>}></Route>
                <Route path="/hoje" element={<TelaHoje/>}></Route>
                <Route path="/historico" element={<TelaHistorico/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}