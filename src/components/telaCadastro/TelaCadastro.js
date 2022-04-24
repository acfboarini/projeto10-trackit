import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Logo from "./../logo/Logo";

export default function TelaCadastro({salvarImagem}) {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [nome, setNome] = useState("");
    const [foto, setFoto] = useState("");

    const navigate = useNavigate();

    function cadastrar() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up";
        const promise = axios.post(URL, {
            email: email,
            name: nome,
            image: foto,
            password: senha
        });
        
        promise.then(response => {
            const {data} = response;
            console.log("cadastrado com sucesso", data);
            alert("cadastrado com sucesso");
            navigate("/");
        });

        promise.catch(err => {
            alert("Preencha os dados corretamente");
        });
    }

    return (
        <Main>
            <Logo/>
            <section className="registros">
                <input type="text" placeholder="email"
                    onChange={e => setEmail(e.target.value)}
                    value={email}
                />
                <input type="password" placeholder="senha"
                    onChange={e => setSenha(e.target.value)}
                    value={senha}
                />
                <input type="text" placeholder="nome"
                    onChange={e => setNome(e.target.value)}
                    value={nome}
                />
                <input type="text" placeholder="foto"
                    onChange={e => setFoto(e.target.value)}
                    value={foto}
                />
                <button onClick={cadastrar}>
                    <span>Cadastrar</span>
                </button>
                <Link to="/" style={{textDecoration: 'none'}}>
                    <p>Jé tem uma conta? Faça login</p>
                </Link>
            </section>
        </Main>
    )
}

const Main = styled.main`
    margin: 0;
    height: 100vh;
    background-color: #FFFFFF;
`;