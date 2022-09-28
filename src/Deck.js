import styled from "styled-components"

let questoes = [
    {num:1,
     Q:"O que é JSX?",
     R:"Uma extensão de linguagem do JavaScript"},
    {num:2,
    Q:"O React é __ ",
    R:"uma biblioteca JavaScript para construção de interfaces"},
    {num:3,
    Q: "Componentes devem iniciar com __ ",
    R:"letra maiúscula"},
    {num:4,
    Q:"Podemos colocar __ dentro do JSX",
    R:"expressões"},
    {num:5,
    Q:"O ReactDOM nos ajuda __ ",
    R:"interagindo com a DOM para colocar componentes React na mesma"},
    {num:6,
    Q:"Usamos o npm para __ ",
    R:"gerenciar os pacotes necessários e suas dependências"},
    {num:7,
    Q:"Usamos props para __ ",
    R:"passar diferentes informações para componentes"},
    {num:8,
    Q:"Usamos estado (state) para __ ",
    R:"dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"}
]

function FlashCard ({num,q,r}) {
    return (
    <FC>
        <p>Pergunta {num}</p>
        <ion-icon name="play-outline"></ion-icon>
    </FC>
    )
}

export default function Deck () {
    return (
        <Dk>
            {questoes.map((a)=><FlashCard num={a.num} key={a.num}/>)}
        </Dk>
    )
}

const Dk = styled.div`
    width: 100%;
    height: 720px;

    display: flex;
    flex-direction: column;
    gap: 28px;
    align-items: center;

    margin-bottom: 20px;
`

const FC = styled.div`
    height: 65px;
    width: 300px;
    border-radius: 5px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px 0px #00000026;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    p{
        font-family: Recursive;
        font-size: 16px;
        font-weight: 700;
        line-height: 19px;
        letter-spacing: 0em;
        text-align: left;
    }

    ion-icon{
        font-size: 30px;
        font-weight: bolder;
    }
`
