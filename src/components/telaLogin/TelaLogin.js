import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import axios from "axios";

import "./login.css";

export default function TelaLogin() {

    const [email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    return (
        <main>
            <section>
                <img src="" alt=""/>
                <h2>TrackIt</h2>
            </section>
            <section className="section-login">
                <input placeholder="email"></input>
                <input placeholder="senha"></input>
                <button>Entrar</button>
                <Link to="/cadastro" style={{textDecoration: 'none'}}>
                    <p>Não tem uma conta? Cadastre-se!</p>
                </Link>
            </section>
        </main>
    );
}