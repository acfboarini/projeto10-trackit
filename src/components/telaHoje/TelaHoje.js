import { useState } from "react";
import axios from "axios";

import Footer from "../footer/Footer";
import Topo from "./Topo";
import HabitoDeHoje from "./HabitoDeHoje";
import Header from "../header/Header";
import styled from "styled-components";

export default function TelaHoje({token, imagem}) {

    function atualizaHabitosFeitos(boolean) {
        if (boolean) {
            setHabitosFeitos(habitosFeitos+1);
        } else {
            setHabitosFeitos(habitosFeitos-1);
        }
    }

    function valor(lista) {
        let valor = 0;
        for (let i = 0; i < lista.length; i++) {
            if (lista[i].done) {
                valor++;
            }
        }
        console.log(valor);
        return valor;
    }
    
    const [reload, setReload] = useState(true);
    const [listaHabitos, setListaHabitos] = useState([]);
    const qtdHabitosFeitos = valor(listaHabitos);
    console.log(qtdHabitosFeitos);
    const [habitosFeitos, setHabitosFeitos] = useState(qtdHabitosFeitos);     
    console.log(habitosFeitos);

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };

    console.log(reload);

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
    }

    return listaHabitos.length === 0?
    (
        <>
            <p>Carregando...</p>
            <Footer/>
        </>
    ): (
        <>
            <Header imagem={imagem}/>
            <main>
                <Topo 
                    listaHabitos={listaHabitos} 
                    habitosFeitos={habitosFeitos}
                />
                <Ul>
                    {listaHabitos.map(habito => {
                        const {id, name, done, currentSequence, highestSequence} = habito;
                        return <HabitoDeHoje 
                            key={id} token={token} id={id} name={name} done={done} setReload={setReload}
                            sequenciaAtual={currentSequence}
                            recorde={highestSequence}
                            atualizaHabitosFeitos={atualizaHabitosFeitos}
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