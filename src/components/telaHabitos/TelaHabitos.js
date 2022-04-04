import { useState } from "react";
import axios from "axios"; 

import TelaSemHabitos from "./TelaSemHabitos";
import TelaComHabitos from "./TelaComHabitos";
import "./telaHabitos.css";

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

    if (listaHabitos.length === 0) {
        return <TelaSemHabitos 
            token={token} 
            setReload={setReload} 
            setCriacaoHabito={setCriacaoHabito} 
            criacaoHabito={criacaoHabito}
        />
    } else {
        return <TelaComHabitos 
            token={token} 
            listaHabitos={listaHabitos}
            setReload={setReload} 
            setCriacaoHabito={setCriacaoHabito} 
            criacaoHabito={criacaoHabito}
        />
    }
}