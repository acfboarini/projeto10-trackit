import axios from "axios";
import Button from "../criacaoHabito/Button";

import styled from "styled-components";

export default function Habito({id, titulo, dias, token, setReload}) {

    let dias_semana = ["S", "T", "Q", "Q", "S", "S", "D"];

    function deletarHabito() {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`;
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        const promise = axios.delete(URL, config)

        promise.then(response => {
            alert("deletado com sucesso");
            console.log(response);
            setReload(true);
        })
        promise.catch(err => {
            alert("erro");
            console.log(err);
        })
    }

    return (
        <Li id={id}>
            <H1>{titulo}</H1> 
            <div className="dias-semana">
                {dias_semana.map((dia,index) => {
                    return (
                        <Button key={index} dia={dia} id={index+1}
                        />
                    )
                })}
            </div>
            <Botao onClick={deletarHabito}>
                <ion-icon name="trash-outline"></ion-icon>
            </Botao>
        </Li>
    )
}

const Li = styled.li`
    background-color: #FFFFFF;
    padding: 13px;
    position: relative;
    margin: 10px 17px;
    border-radius: 5px;
`;

const H1 = styled.h1`
    font-size: 20px;
    margin-bottom: 13px;
    color: #666666;
`;

/*const Div = styled.div`

`;*/

const Botao = styled.button`
    position: absolute;
    top: 10px;
    right: 3px;
    border: none;
    background-color: #ffffff;
`;