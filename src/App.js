import GlobalStyle from './globalstyle.js'
import styled from "styled-components"

import Logo from './Logo.js'
import Footer from './Footer.js'
import Deck from "./Deck.js"
import { useState } from 'react'


export default function App () {    
    const [meta,setMeta] = useState(0)

    return (
        <Background>
            <GlobalStyle/>
            <Logo/>
            <Deck meta={meta} setMeta={setMeta}/>
            <Footer meta={meta}/>
        </Background>
    )
}

const Background = styled.div`
    width: 375px;
    height: 100%;
    background-color: #FB6B6B;
`