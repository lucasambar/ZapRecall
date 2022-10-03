import styled from "styled-components"

export default function Footer ({meta,setQuestoes,questoes}) {
    function atualiza (cor) {
        let arr = questoes
        for (let i = 0; i<questoes.length; i++){
            let a = questoes[i]
            if (a.B) {
                a.B = false
                a.cor = cor
            }
        }
        console.log(arr)
        setQuestoes(arr)  
    }

    return (
        <Foot>
            <div>
                <Button cor={"#FF3030"} onClick={()=>atualiza("#FF3030")} data-identifier="forgot-btn">Não lembrei</Button>
                <Button cor={"#FF922E"} onClick={()=>atualiza("#FF922E")} data-identifier="almost-forgot-btn">Quase não lembrei</Button>
                <Button cor={"#2FBE34"} onClick={()=>atualiza("#2FBE34")} data-identifier="zap-btn">Zap!</Button>
            </div>
            <div className="texto" data-identifier="flashcard-counter"><span>{meta}/8 CONCLUÍDOS</span></div>
        </Foot>
    )
}

let Foot = styled.div`
    height: 111px;
    width: 375px;
    background-color: #FFFFFF;


    padding-top: 10px;

    position: fixed;
    z-index: 3;
    left: 0;
    bottom: 0;

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
        cursor:pointer;

        font-family: Recursive;
        font-size: 12px;
        font-weight: 400;
        line-height: 14px;
        letter-spacing: 0em;
        text-align: center;
        color:#FFFFFF;
`