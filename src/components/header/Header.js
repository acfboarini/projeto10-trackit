import styled from "styled-components";

export default function Header({imagem}) {
    return (
        <Container>
            <H1>TrackIt</H1>
            <img src={imagem} alt="imagem usuario"/>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #126BA5;
`;

const H1 = styled.h1`
    font-family: 'Playball', cursive;
    font-size: 40px;
    color: white;
`;

const Img = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 98.5px;
`;