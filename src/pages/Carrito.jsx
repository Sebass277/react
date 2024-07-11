import { useEffect, useState, useCallback } from "react";

function Carrito() {
    const [listaItems, setListaItems] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        leerServicio();
    }, []);

    const leerServicio = () => {
        const datosCarrito = JSON.parse(sessionStorage.getItem("carritocompras")) || [];
        setListaItems(datosCarrito);
        calcularTotal(datosCarrito);
    };

    const eliminarItem = useCallback((item) => {
        const carritoMenos = listaItems.filter(itemCart => itemCart.idproducto !== item.idproducto);
        setListaItems(carritoMenos);
        sessionStorage.setItem("carritocompras", JSON.stringify(carritoMenos));
        calcularTotal(carritoMenos);
    }, [listaItems]);

    const calcularTotal = (datosCarrito) => {
        const sumaTotal = datosCarrito.reduce((acumulador, fila) => acumulador + fila.precio * fila.cantidad, 0);
        setTotal(sumaTotal);
    };

    const vaciarCarrito = () => {
        setListaItems([]);
        sessionStorage.removeItem("carritocompras");
        setTotal(0);
    };

    const dibujarTabla = () => (
        <table className="table">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Producto</th>
                    <th className="text-end">Precio</th>
                    <th className="text-end">Cantidad</th>
                    <th className="text-end">Subtotal</th>
                    <th className="text-center">Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {listaItems.length ? listaItems.map(item => (
                    <tr key={item.idproducto}>
                        <td>{item.idproducto}</td>
                        <td>{item.nombre}</td>
                        <td className="text-end">{Number(item.precio).toFixed(2)}</td>
                        <td className="text-end">{item.cantidad}</td>
                        <td className="text-end">{(item.precio * item.cantidad).toFixed(2)}</td>
                        <td className="text-center">
                            <i className="bi bi-x-lg icono-eliminar" title="Eliminar" onClick={() => eliminarItem(item)}></i>
                        </td>
                    </tr>
                )) : (
                    <tr>
                        <td colSpan="6" className="text-center">
                            <div className="alert alert-warning" role="alert">
                                Su carrito de compras está actualmente vacío
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
            <tfoot>
                <tr>
                    <th colSpan="4" className="text-end">Total</th>
                    <th className="text-end">{total.toFixed(2)}</th>
                    <th></th>
                </tr>
            </tfoot>
        </table>
    );

    return (
        <section className='padded'>
            <div className="container">
                <h2>Carrito de compras</h2>
                {dibujarTabla()}
                <button className="btn btn-danger" onClick={vaciarCarrito}>Vaciar carrito</button>
            </div>
        </section>
    );
}

export default Carrito;
