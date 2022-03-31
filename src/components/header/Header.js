import bobsponja from "./../../assets/bobsponja.png";
import styled from "styled-components";

export default function Header() {
    return (
        <Container>
            <H1>TrackIt</H1>
            <img src={bobsponja} alt="bobsponja"/>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    background-color: #126BA5;
`;

/* position: fixed; colopcar isso no cointainer */

const H1 = styled.h1`
    font-family: 'Playball', cursive;
    font-size: 40px;
    color: white;
`;