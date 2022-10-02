import icone_certo from "./img/icone_certo.png"
import icone_erro from "./img/icone_erro.png"
import icone_quase from "./img/icone_quase.png"
import seta_play from './img/seta_play.png'

export default function Icone (cor) {
    if (cor === "#FF3030") {
        return <img src={icone_erro} alt=""/>
    }
    else if (cor === "#FF922E") {
        return <img src={icone_quase} alt=""/>
    }
    else if (cor === "#2FBE34") {
        return <img src={icone_certo} alt=""/>
    }
    else {
        return <img src={seta_play} alt=""/>
    }
}
