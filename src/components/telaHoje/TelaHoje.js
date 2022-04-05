import { useState } from "react";
import axios from "axios";

import Footer from "../footer/Footer";
import HabitoDeHoje from "./HabitoDeHoje";
import Header from "../header/Header";
import styled from "styled-components";

export default function TelaHoje({token, imagem}) {
    
    const [reload, setReload] = useState(true);
    const [listaHabitos, setListaHabitos] = useState([]);

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    if (reload) {
        const promise = axios.get(URL, config);
        promise.then(response => {
            const {data} = response;
            setListaHabitos(data);
            setReload(false);
            console.log(data);
        });
        promise.catch(err => {
            console.log("Erro");
        });
    } else {
        <>Carregando...</>
    }

    return listaHabitos.length === 0?
    (
        <p>Carregando...</p>
    ): (
        <>
            <Header imagem={imagem}/>
            <main>
                <Ul>
                    {listaHabitos.map(habito => {
                        const {id, name, done, currentSequence, highestSequence} = habito;
                        return <HabitoDeHoje 
                            key={id} token={token} id={id} name={name} done={done} setReload={setReload}
                            sequenciaAtual={currentSequence}
                            recorde={highestSequence}
                        />
                    })}
                </Ul>
            </main>
            <Footer/>
        </> 
    );
}

const Ul = styled.ul`
    width: 100%;
`;