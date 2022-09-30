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
        <FCA onClick={resposta}>
            <Texto> <p>{texto}</p> </Texto>
            <Imagem imagem={imagem}> <img src={girar} alt="icone virar"/> </Imagem>
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
