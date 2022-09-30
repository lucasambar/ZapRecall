import styled from "styled-components"

export default function Footer ({meta}) {
    return (
        <Foot>
            <div>
                <Button cor={"#FF3030"}>Não lembrei</Button>
                <Button cor={"#FF922E"}>Quase não lembrei</Button>
                <Button cor={"#2FBE34"}>Zap!</Button>
            </div>
            <div className="texto"><span>{meta}/4 CONCLUÍDOS</span></div>
        </Foot>
    )
}

let Foot = styled.div`
    height: 111px;
    width: 375px;
    background-color: #FFFFFF;


    padding-top: 10px;


    div {
        height: 37px;
        width: 265px;

        display: flex;
        gap:5px;

        margin: auto;
    }

    .texto{
        margin:auto;
        margin-top: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        font-family: Recursive;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color:#333333;
    }
`
let Button = styled.button`
        height: 37px;
        width: 85px;
        border-radius: 5px;
        border: none;
        background-color: ${props => props.cor};

        font-family: Recursive;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0em;
        text-align: center;
        color:#FFFFFF;
`