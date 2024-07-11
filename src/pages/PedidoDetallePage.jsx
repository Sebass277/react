import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiWebURL } from "../utils";
import nofoto from "./../assets/images/nofoto.jpg";

function PedidoDetallePage() {
    const { idpedido } = useParams(); // Captura el idpedido desde la URL
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log('ID del pedido:', idpedido);
        if (idpedido) {
            leerServicio();
        } else {
            setError("ID del pedido no proporcionado");
            setLoading(false);
        }
    }, [idpedido]);

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "pedido-detalle.php?idpedido=" + idpedido;
        console.log('Ruta del servicio:', rutaServicio);

        fetch(rutaServicio)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta del servidor');
                }
                return response.json();
            })
            .then(data => {
                console.log('Datos recibidos:', data);
                if (Array.isArray(data) && data.length > 0) {
                    setProductos(data);
                } else {
                    setError("No se encontraron detalles para este pedido");
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error al obtener los detalles del pedido:', error);
                setError("Error al obtener los detalles del pedido");
                setLoading(false);
            });
    };

    return (
        <section className='padded'>
            <div className="container">
                <h2>Detalles del Pedido #{idpedido}</h2>
                {loading && <p>Cargando...</p>}
                {error && <p>{error}</p>}
                {productos.length > 0 ? (
                    <div className="row">
                        {productos.map(producto => (
                            <div key={producto.idproducto} className="col-md-4 mb-4">
                                <div className="card">
                                    <img 
                                        src={producto.imagenchica ? `${ApiWebURL}${producto.imagenchica}` : nofoto}
                                        className="card-img-top" 
                                        alt={producto.nombre} 
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{producto.nombre}</h5>
                                        <p className="card-text">{producto.detalle}</p>
                                        <p className="card-text">Cantidad: {producto.cantidad}</p>
                                        <p className="card-text">Precio: S/ {parseFloat(producto.precio).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    !loading && !error && <p>No hay detalles disponibles para este pedido</p>
                )}
            </div>
        </section>
    );
}

export default PedidoDetallePage;
