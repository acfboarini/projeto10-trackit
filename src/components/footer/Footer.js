import { Link } from "react-router-dom";
import styled from "styled-components"

export default function Footer() {

    const menu = [
        {titulo: "Hábitos", url: "habitos"}, 
        {titulo: "Hoje", url: "hoje"}, 
        {titulo: "Histórico", url: "historico"}
    ];

    return (
        <Container>
            {menu.map((botao, index) => {
                return (
                    <Link key={index} 
                        to={`/${botao.url}`} 
                        style={linkStyle}
                    >
                        <H1 id={index}>{botao.titulo}</H1>
                    </Link>
                )
            })}
        </Container>
    )
}

const Container = styled.footer`
    width: 100%;
    height: 70px;
    position: fixed;
    bottom: 0px;
    left: 0px;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    background-color: #FFFFFF;
`;

const H1 = styled.h1`
    font-family: 'Lexend Deca';
    font-size: 20px;
    background-color: ${props => props.id === 1? "#52B6FF": "#FFFFFF"};
    color: ${props => props.id ===1? "#FFFFFF": "#52B6FF"};
    padding: 8px;
`;

const linkStyle = {
    textDecoration: "none",
}