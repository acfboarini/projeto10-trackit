import styled from "styled-components";
import { useState } from "react";

export default function Topo({listaHabitos, habitosFeitos}) {

    let dayjs = require('dayjs');
    dayjs.locale('pt-br');
    const weekday = dayjs().format('dddd');
    const dia = dayjs().format('DD');
    const mes = dayjs().format('MM');

    let totalHabitos = listaHabitos.length;
    let porcentagem = parseInt(habitosFeitos/totalHabitos*100);

    let texto = "";
    if (porcentagem === 0) {
        texto = `Nenhum hábito concluído ainda`;
    } else {
        texto = `${porcentagem}% dos hábitos concluídos`;
    }

    return (
        <>
            <Section>
                <H3>{weekday}, {dia}/{mes}</H3>
            </Section>
            <P porcentagem={porcentagem}>{texto}</P>
        </>
    )
}

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 5px;
`;

const H3 = styled.h3`
    font-size: 23px;
    color: #126BA5;
`;

const P = styled.p`
    width: 100%;
    font-size: 18px;
    color: ${props => props.porcentagem > 0? '#8FC549' : '#BABABA'};
    margin-bottom: 20px;
`;