import slide1 from "./../assets/images/banner1.jpg"
import slide2 from "./../assets/images/banner2.jpg"
import slide3 from "./../assets/images/banner3.jpg"

function MainBanner() {
    return (
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={slide1} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Tu Lugar de Transformación</h5>
                            <p className="bannertexto">Entrena sin límites en este espacio moderno y lleno de energía.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={slide2} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>La mejor opcion para lograr un cambio</h5>
                            <p className="bannertexto">Hambientes bien iluminados y equipados.</p>
                        </div>
                </div>
                <div className="carousel-item">
                    <img src={slide3} className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Zonas amplias y limpias</h5>
                            <p className="bannertexto">Liempieza de espacios y equipos de forma continua</p>
                        </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default MainBanner