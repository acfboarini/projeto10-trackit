import styled from "styled-components";
import ellipse from "./../../assets/ellipse.png";
import vector1 from "./../../assets/vector1.png";
import vector2 from "./../../assets/vector2.png";
import vector3 from "./../../assets/vector3.png";
import vector4 from "./../../assets/vector4.png";

export default function Logo() {
    return (
        <Section>
            <Img 
                src={vector1} 
                alt=""
                position={"absolute"}
                width={"18.05px"}
                height={"22.63px"}
                left={"148.2px"}
                top={"87.4px"}
                background={"#8FC549"}
            />
            <Img 
                src={vector2} 
                alt=""
                position={"absolute"}
                width={"18.05px"}
                height={"42.31px"}
                left={"172.45px"}
                top={"79.05px"}
                background={"#E75766"}
            />
            <Img 
                src={vector3} 
                alt=""
                position={"absolute"}
                width={"18.05px"}
                height={"63.32px"}
                left={"197.24px"}
                top={"68px"}
                background={"#8FC549"}
            />
            <Img 
                src={vector4} 
                alt=""
                position={"absolute"}
                width={"154.94px"}
                height={"48.5px"}
                left={"109.4px"}
                top={"106.8px"}
                background={"#126BA5"}
            />
            <Img 
                src={ellipse} 
                alt=""
                position={"absolute"}
                width={"142.28px"}
                height={"15.63px"}
                left={"122.33px"}
                top={"144.53px"}
                background={"#E6E7E8"}
                index={"-1"}
            />
            <H2>TrackIt</H2>
        </Section>
    )
}

const Section = styled.section`
`;

const H2 = styled.h2`
    font-family: 'Playball';
    font-size: 69px;
    color: #126BA5;
    margin-top: 160px;
`;

const Img = styled.img`
    position: ${props => props.position};
    width: ${props => props.width};
    height: ${props => props.height};
    left: ${props => props.left};
    top: ${props => props.top};
    z-index: ${props => props.index}
`;