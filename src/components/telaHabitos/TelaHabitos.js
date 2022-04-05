import { useState } from "react";
import axios from "axios"; 
import styled from "styled-components";

import Header from "../header/Header";
import TopoHabito from "./topoHabito/TopoHabito";
import CriacaoHabito from "./criacaoHabito/CriacaoHabito";
import ListaHabitos from "./listaHabitos/ListaHabitos";
import Footer from "../footer/Footer";

export default function TelaHabitos({token, imagem}) {

    const [reload, setReload] = useState(true);
    const [criacaoHabito, setCriacaoHabito] = useState(false);
    const [listaHabitos, setListaHabitos] = useState([]);

    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";

    if (reload) {
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.get(URL, config);
        promise.then(response => {
            const {data} = response;
            setListaHabitos(data);
            setReload(false);
            console.log("Tudo OK");
            console.log(listaHabitos);
            console.log(data);
        });
        promise.catch(err => {
            console.log("Erro");
        });
    }

    return (
        <>
            <Header imagem={imagem}/>
            <main>
                <TopoHabito setCriacaoHabito={setCriacaoHabito}/>
                <Ul>
                    {criacaoHabito? 
                        <CriacaoHabito 
                            callback={setCriacaoHabito} 
                            token={token} 
                            setReload={setReload}
                        /> : 
                        <></>
                    }
                    <ListaHabitos
                        token={token}
                        listaHabitos={listaHabitos}
                        criacaoHabito={criacaoHabito}
                        setCriacaoHabito={setCriacaoHabito}
                        setReload={setReload}
                    /> 
                </Ul>
            </main>
            <Footer/>
        </>
    )
}

const Ul = styled.ul`
    width: 100%;
`;