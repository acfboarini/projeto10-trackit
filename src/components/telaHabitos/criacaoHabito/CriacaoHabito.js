import { useState } from "react";
import axios from "axios";

import Button from "./Button";

export default function CriacaoHabito({callback, setReload, token}) {

    const [nome, setNome] = useState("");
    const [listaDias, setListaDias] = useState([]);
    let dias_semana = ["S", "T", "Q", "Q", "S", "S", "D"];
    let lista_dias = listaDias;

    function alteraListaDias(numero) {
        let index = lista_dias.indexOf(numero);

        if(index > -1) {
            lista_dias.splice(index, 1);
            setListaDias(lista_dias);
        } else {
            lista_dias.push(numero);
            setListaDias(lista_dias);
        }
    }

    function validarDados(lista, nome) {
        if (nome.length === 0 || lista.length === 0) {
            alert("por favor preencha todos os campos");
        } else {
            lista.sort((a,b) => {
                if (a > b) return 1;
                if (a < b) return -1;
                return 0;
            });
            enviarHabito(lista, nome);
        }
    }

    function enviarHabito(lista, nome) {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        const promise = axios.post(URL, {
            name: nome,
            days: lista
        }, config);
        
        promise.then(response => {
            console.log(response);
            callback(false);
            setReload(true);
        })
        promise.catch(err => {
            console.log("Erro");
        })
    }

    return (
        <li>
            <input 
                type="text" 
                value={nome} 
                onChange={(e) => {
                    setNome(e.target.value)
                }}/>
            <div className="dias-semana">
                {dias_semana.map((dia,index) => {
                    return (
                        <Button key={index} dia={dia} id={index+1}
                        callback={alteraListaDias}/>
                    )
                })}
            </div>
            <button onClick={() => callback(false)}>Cancelar</button>
            <button onClick={() => {
                validarDados(listaDias, nome);
            }}>Salvar</button>
        </li>
    )
}