import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApiWebURL } from "../utils";

function PedidosPage() {
  const [listaPedidos, setListaPedidos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    leerServicio();
  }, []);

  const leerServicio = () => {
    const rutaServicio = ApiWebURL + "pedidos.php";
    fetch(rutaServicio)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setListaPedidos(data);
      })
      .catch((error) => {
        console.error("Error al cargar los pedidos:", error);
      });
  };

  const verDetalles = (idpedido) => {
    navigate(`/pedidos/${idpedido}`);
  };

  return (
    <section className="padded">
      <div className="container">
        <h2>Pedidos</h2>
        <table className="table">
          <thead>
            <tr>
              <th>ID Pedido</th>
              <th>Fecha</th>
              <th>Usuario</th>
              <th>Nombre</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {listaPedidos.length > 0 ? (
              listaPedidos.map((pedido) => (
                <tr key={pedido.idpedido} onClick={() => verDetalles(pedido.idpedido)} style={{ cursor: 'pointer' }}>
                  <td>{pedido.idpedido}</td>
                  <td>{pedido.fechapedido}</td>
                  <td>{pedido.usuario}</td>
                  <td>{pedido.nombres}</td>
                  <td>S/ {parseFloat(pedido.total).toFixed(2)}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No hay pedidos disponibles</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default PedidosPage;
