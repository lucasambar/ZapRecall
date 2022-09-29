import styled from "styled-components"

export default function FlashCard ({num,questoes,setQuestoes}) {
    function abrirCarta (num) {
        let arr = questoes
        arr[num-1] = true
        setQuestoes(arr)
    }

    return (
    <FC>
        <p>Pergunta {num}</p>
        <ion-icon name="play-outline" onClick={()=>abrirCarta(num)}></ion-icon>
    </FC>
    )
}

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
        cursor:pointer;
    }
`