import styled from "styled-components"
import logo from "./img/logo.png"

export default function Logo () {
    return (
        <Imagem>
            <div>
                <img src={logo} alt="logo"/>
                <p>ZapRecall</p>
            </div>
        </Imagem>
    )
}

const Imagem = styled.div`
    height: 150px;
    width: 375px;
    background-color: #FB6B6B;
    /* box-shadow: 0px 4px 5px 0px #00000026; */


    display: flex;
    justify-content: center;
    align-items: center;

    /* position: fixed;
    z-index:2;
    left: 0;
    top: 0; */

    div{
        height: 60px;
        width: 226px;

        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    img{
        height: 60px;
        width: 52px;
    }
    p {
        font-family: Righteous;
        font-size: 36px;
        font-weight: 400;
        line-height: 45px;
        letter-spacing: -0.012em;
        text-align: center;
        color:#FFFFFF;
    }

`