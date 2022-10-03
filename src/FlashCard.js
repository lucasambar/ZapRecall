import styled from "styled-components"

import Icone from "./Icone"

export default function FlashCard ({num,questoes,setQuestoes,meta,setMeta,cor}) {
    function abrirCarta (num) {
        let arr = questoes
        arr[num-1].B = true
        setQuestoes(arr)
        setMeta(meta+1)
    }
    return (
        <FC onClick={() => abrirCarta(num)} >
            <Texto data-identifier="flashcard" cor={cor}>Pergunta {num}</Texto>
            <Icone cor={cor}/>
        </FC>
    )
}

const FC = styled.div`
    height: 65px;
    width: 300px;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px 0px #00000026;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;


    ion-icon{
        font-size: 30px;
        font-weight: bolder;
        cursor:pointer;
    }
`
const Texto = styled.p`
        font-family: Recursive;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
        color: ${props => props.cor};
        text-decoration: ${props => props.cor !== "#333333" ? "line-through" : "none" };
`