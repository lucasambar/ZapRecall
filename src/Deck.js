import styled from "styled-components"

import FlashCard from "./FlashCard"
import FlashCardAberto from "./FlashCardAberto"


export default function Deck ({meta,setMeta,questoes,setQuestoes}) {

    return (
        <Dk>
            {questoes.map ((a) => a.B ? <FlashCardAberto q={a.Q} r={a.R} key={a.num}/>
            :<FlashCard num={a.num} key={a.num} 
            questoes={questoes} setQuestoes={setQuestoes} meta={meta} setMeta={setMeta} cor={a.cor}/>)}
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