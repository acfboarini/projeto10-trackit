import styled from "styled-components"

export default function TopoHabito({setCriacaoHabito}) {
    
    return (
        <Section className="habitos">
            <H3>Meus habitos</H3>
            <Botao onClick={() => setCriacaoHabito(true)}>
                <Span>+</Span>
            </Botao>
        </Section>
    )
}

const Section = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
`;

const H3 = styled.h3`
    font-size: 23px;
    color: #126BA5;
`;

const Botao = styled.button`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    border: none;
`;

const Span = styled.span`
    color: #ffffff;
    font-size: 27px;
`;