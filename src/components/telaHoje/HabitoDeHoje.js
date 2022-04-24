import styled from "styled-components";
import axios from "axios";

export default function HabitoDeHoje(props) {
    const {id, token, name, setReload, done, sequenciaAtual, recorde, atualizaHabitosFeitos} = props;
    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };


    function atualizarHabito(id, done) {
        let rota = "";
        if (done) {
            rota = "uncheck";
            atualizaHabitosFeitos(false);
        } else {
            rota = "check";
            atualizaHabitosFeitos(true);
        }
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/${rota}`;
        const promise = axios.post(URL, {}, config)

        promise.then(response => {
            console.log(response);
            console.log("Tudo Certo");
            setReload(true);
        })
        promise.catch(err => {
            console.log("Erro");
        })
    }

    return (
        <Li>
            <div>
                <H1>{name}</H1>
                <H2>Sequência atual: {sequenciaAtual} dia(s)</H2>
                <H2>Seu recorde: {recorde} dia(s)</H2>
            </div>
            <Botao  done={done} onClick={() => atualizarHabito(id, done)}>
                <ion-icon name="checkbox"></ion-icon>
            </Botao>
        </Li>
    )
}

/********* Estilos ********/

const Li = styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #FFFFFF;
    padding: 13px;
    position: relative;
    margin: 10px 0px;
    border-radius: 5px;
`;

const H1 = styled.h1`
    font-size: 20px;
    margin-bottom: 7px;
    color: #666666;
`;

const H2 = styled.h2`
    font-family: 'Lexend Deca';
    font-size: 13px;
    color: #666666;
    margin-top: 7px;
`;

const Botao = styled.button`
    font-size: 70px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    border-radius: 5px;
    border: none;
    color: ${props => props.done? "#8FC549" : "#EBEBEB"}
`;