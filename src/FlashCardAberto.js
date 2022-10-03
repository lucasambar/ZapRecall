import { useState } from "react";
import styled from "styled-components";
import girar from "./img/seta_virar.png"


export default function FlashCardAberto ({q,r}) {
    let [texto,setTexto] = useState(q)
    let [imagem, setImagem] = useState("flex")

    function resposta () {
        setTexto(r)
        setImagem("none")
    }

    return (
        <FCA  data-identifier="flashcard-index-item">
            <Texto> <p data-identifier="flashcard-answer flashcard-question">{texto}</p> </Texto>
            <Imagem imagem={imagem} onClick={resposta}> <img src={girar} alt="icone virar" data-identifier="flashcard-turn-btn"/> </Imagem>
        </FCA>
    )
}

const FCA = styled.div`
    height: 131px;
    width: 300px;
    border-radius: 5px;
    background-color: #FFFFD4;

    display: flex;
    justify-content: space-around;

    cursor: pointer;

`
const Imagem = styled.div`
    height:100%;
    display: ${props=>props.imagem};
    align-items: flex-end;

    padding-bottom: 10px;
`
const Texto = styled.div`
    width: 240px;
    height:100%;
    display: flex;

    padding-top: 7px;
    padding-bottom: 7px;
    
    p{
        font-family: Recursive;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color:#333333;
    }
`
