import Envios from "../home/Envios"
import MainBanner from "../home/MainBanner"
import Nosotros from "../home/Nosotros"
import Rutinas from '../home/Rutinas';
import Noticias from "../home/Noticias"

function Inicio() {
    return (
        <>
            <MainBanner/>
            <Nosotros/>
            <Noticias/>
            <Rutinas />
            <Envios/>
        </>
    )
}

export default Inicio