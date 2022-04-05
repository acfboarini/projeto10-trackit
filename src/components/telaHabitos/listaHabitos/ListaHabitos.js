import Habito from "./../habito/Habito";

import styled from "styled-components";

export default function ListaHabitos(props) {

    const {token, listaHabitos, setReload} = props;

    return (
        <>
            {listaHabitos.length === 0?
                <P>
                    Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!
                </P> : 

                listaHabitos.map(habito => {
                const {id, name, days} = habito;
                return (
                    <Habito 
                        key={id}
                        id={id} 
                        titulo={name} 
                        days={days} 
                        token={token} 
                        setReload={setReload}
                    />
                )
            })}  
        </>
    );
}

const P = styled.p`
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    margin-top: 10px;
`;