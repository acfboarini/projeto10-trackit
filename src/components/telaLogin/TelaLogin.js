import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

import Logo from "./../logo/Logo";

import "./login.css";

export default function TelaLogin({salvarToken}) {

    const [email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    const navigate = useNavigate();

    function login() {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login";

        const promise = axios.post(URL, {
            email: email,
            password: senha
        });
        promise.then(response => {
            const {data} = response;
            console.log(data);
            salvarToken(data.token);
            navigate("/habitos");
        });
        promise.catch(err => {
            console.log(err);
            console.log("usuario não existe");
        });
    }

    return (
        <Main>
            <Logo/>
            <section className="registros">
                <input type="text" placeholder="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <input type="password" placeholder="senha"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                <button onClick={login}>
                    <span>Entrar</span>
                </button>
                <Link to="/cadastro" style={{textDecoration: 'none'}}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </section>
        </Main>
    );
}

const Main = styled.main`
    margin: 0;
    height: 100vh;
    background-color: #FFFFFF;
`;