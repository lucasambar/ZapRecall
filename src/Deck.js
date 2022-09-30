import { useState } from "react"
import styled from "styled-components"

import FlashCard from "./FlashCard"
import FlashCardAberto from "./FlashCardAberto"
import QUESTOES from "./questoes"

export default function Deck () {
    const [questoes,setQuestoes] = useState(QUESTOES)

    return (
        <Dk>
            {questoes.map ((a) => a.B ? <FlashCardAberto q={a.Q} r={a.R} key={a.num}/>
            :<FlashCard num={a.num} key={a.num} questoes={questoes} setQuestoes={setQuestoes}/>)}
            
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


/* <FlashCardAberto q={"Natasha bonassera?"} r={"Bonassera Catuxa"}/>
            {questoes.map ((a) => <FlashCard num={a.num} key={a.num} questoes={questoes} setQuestoes={setQuestoes}/>)}*/