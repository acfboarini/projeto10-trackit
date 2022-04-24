import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

/* Imports Telas */
import TelaLogin from "./telaLogin/TelaLogin";
import TelaCadastro from "./telaCadastro/TelaCadastro";
import TelaHabitos from "./telaHabitos/TelaHabitos";
import TelaHoje from "./telaHoje/TelaHoje";
import TelaHistorico from "./telaHistorico/TelaHistorico";

/* Imports estilos */
import "./../styles/reset.css";
import "./../styles/style.css";

export default function App() {

    const [token, setToken] = useState(null);
    const [imagem, setImagem] = useState(null);

    function salvarImagem(imagem) {
        setImagem(imagem);
    }

    function salvarToken(token) {
        setToken(token);
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" 
                    element={
                        <TelaLogin 
                            salvarToken={token => salvarToken(token)}
                            salvarImagem={salvarImagem}
                        />
                    }
                ></Route>

                <Route path="/cadastro" 
                    element={<TelaCadastro/>}
                ></Route>

                <Route path="/habitos" 
                    element={<TelaHabitos token={token} imagem={imagem}/>}
                ></Route>

                <Route path="/hoje" 
                    element={<TelaHoje token={token} imagem={imagem}/>}
                ></Route>

                <Route path="/historico" 
                    element={<TelaHistorico token={token} imagem={imagem}/>}
                ></Route>
            </Routes>
        </BrowserRouter>
    )
}