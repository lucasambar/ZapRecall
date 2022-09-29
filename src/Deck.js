import { useState } from "react"
import styled from "styled-components"
import FlashCard from "./FlashCard"
import FlashCardAberto from "./FlashCardAberto"

const QUESTOES = [
    {num:1,
     Q:"O que é JSX?",
     B: false,
     R:"Uma extensão de linguagem do JavaScript"},
    {num:2,
    Q:"O React é __ ",
    B: false,
    R:"uma biblioteca JavaScript para construção de interfaces"},
    {num:3,
    Q: "Componentes devem iniciar com __ ",
    B: false,
    R:"letra maiúscula"},
    {num:4,
    Q:"Podemos colocar __ dentro do JSX",
    B: false,
    R:"expressões"},
    {num:5,
    Q:"O ReactDOM nos ajuda __ ",
    B: false,
    R:"interagindo com a DOM para colocar componentes React na mesma"},
    {num:6,
    Q:"Usamos o npm para __ ",
    B: false,
    R:"gerenciar os pacotes necessários e suas dependências"},
    {num:7,
    Q:"Usamos props para __ ",
    B: false,
    R:"passar diferentes informações para componentes"},
    {num:8,
    Q:"Usamos estado (state) para __ ",
    B: false,
    R:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
]

export default function Deck () {
    const [questoes,setQuestoes] = useState(QUESTOES)

    return (
        <Dk>
            <FlashCardAberto/>
            {questoes.map((a)=><FlashCard num={a.num} key={a.num} questoes={questoes} setQuestoes={setQuestoes}/>)}
        </Dk>
    )
}

const Dk = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: center;

    margin-bottom: 20px;
`