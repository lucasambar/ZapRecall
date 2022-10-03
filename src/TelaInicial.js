import styled from "styled-components";

import logo from "./img/logo.png"

export default function TelaInicial ({entrada, setEntrada}) {
  
    function mudarPagina () {
        console.log(setEntrada)
        entrada = false
        setEntrada(entrada)
    
    }
    
    return (
        <Tela>
            <img src={logo} alt=""/>
            <p>ZapRecall</p>
            <div><button onClick={mudarPagina} data-identifier="start-btn" >Iniciar Recal!</button></div>
        </Tela>
    )
}

const Tela = styled.div`
    position: absolute;
    left: 0;
    top: 0;

    width: 375px;
    height: 100%;
    background-color: #FB6B6B;

    img {
        height: 161px;
        width: 136px;

        display: block;
        margin: auto;
        margin-top: 150px;
    }
    
    p {
        font-family: Righteous;
        font-size: 36px;
        font-weight: 400;
        line-height: 45px;
        letter-spacing: -0.012em;
        text-align: center;
        color: #FFFFFF;

        display: block;
        margin: auto;
        margin-top: 13px;
    }
    
    div {
        width: 100%;
        display: flex;
        justify-content: center;
    }
    
    button {
        height: 54px;
        width: 246px;
        border-radius: 5px;
        border: none;
        background-color: #FFFFFF;

        font-family: Recursive;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: center;
        color: #D70900;

        margin-top: 15px;

        cursor: pointer;
    }

`