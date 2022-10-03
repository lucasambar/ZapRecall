import GlobalStyle from './globalstyle.js'
import styled from "styled-components"
import { useState } from 'react'

import Logo from './Logo.js'
import Footer from './Footer.js'
import Deck from "./Deck.js"
import QUESTOES from './questoes.js'
import TelaInicial from './TelaInicial.js'


export default function App () {    
    const [meta,setMeta] = useState(0)
    const [questoes,setQuestoes] = useState(QUESTOES)
    const [entrada, setEntrada] = useState(true)

    return (
        <>
            {entrada ? <TelaInicial setEntrada={setEntrada} entrada={entrada}/>
            :<Background>
                <GlobalStyle/>
                <Logo/>
                <Deck meta={meta} setMeta={setMeta} questoes={questoes} setQuestoes={setQuestoes}/>
                <Footer meta={meta} questoes={questoes} setQuestoes={setQuestoes}/>
            </Background>}
        </>
    )
}

const Background = styled.div`
    width: 375px;
    height: 100%;
    background-color: #FB6B6B;
    margin-bottom: 111px;
    padding-bottom:10px;
`