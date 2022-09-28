import GlobalStyle from './globalstyle.js'
import styled from "styled-components"

import Logo from './Logo.js'
import Footer from './Footer.js'
import Deck from "./Deck.js"

export default function App () {
    return (
        <Background>
            <GlobalStyle/>
            <Logo/>
            <Deck/>
            <Footer/>
        </Background>
    )
}

const Background = styled.div`
    width: 375px;
    height: 100%;
    background-color: #FB6B6B;
`