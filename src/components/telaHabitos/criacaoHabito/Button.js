import { useState } from "react";
import styled from "styled-components";

export default function Button({dia, id, callback}) {

    const [selecionado, setSelecionado] = useState(false);

    return selecionado? (
        <Botao 
            onClick={() => {
                setSelecionado(false);
                callback(id);
            }} 
            className="selecionado"
            selecionado={selecionado}
        >{dia}</Botao>
    ):(
        <Botao 
            onClick={() => {
                setSelecionado(true);
                callback(id);
            }} 
            className=""
            selecionado={selecionado}
        >{dia}</Botao>
    )
}

const Botao = styled.button`
    width: 30px;
    height: 30px;
    margin: 4px;
    border: 1px solid #D4D4D4;
    background-color: ${props => props.selecionado? "#D4D4D4": "white"};
    color: ${props => props.selecionado? "white": "#D4D4D4"};
    border-radius: 5px;
`;