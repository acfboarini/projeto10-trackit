import styled from "styled-components";

export default function Dia({dia, days, id }) {

    return days.indexOf(id) > -1? (
        <Botao  
            disabled
            className="selecionado"
            selecionado={true}
        >{dia}</Botao>
    ):(
        <Botao
            disabled 
            className=""
            selecionado={false}
        >{dia}</Botao>
    )
}

const Botao = styled.button`
    width: 30px;
    height: 30px;
    margin: 4px;
    border: 1px solid #D4D4D4;
    font-family: 'Lexend Deca';
    font-size: 20px;
    line-height: 10px;
    background-color: ${props => props.selecionado? "#D4D4D4": "white"};
    color: ${props => props.selecionado? "white": "#D4D4D4"};
    border-radius: 5px;
`;