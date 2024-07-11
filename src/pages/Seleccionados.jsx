import { useEffect, useState } from 'react';
import { ApiWebURL } from '../utils';

function Seleccionados() {
  const [empleadosSeleccionados, setEmpleadosSeleccionados] = useState([]);

  useEffect(() => {
    // Leer empleados seleccionados del localStorage
    const seleccionados = JSON.parse(localStorage.getItem('empleadosSeleccionados')) || [];
    setEmpleadosSeleccionados(seleccionados);
  }, []);

  return (
    <section className="padded">
      <div className="container">
        <h2>Empleados Seleccionados</h2>
        {empleadosSeleccionados.length > 0 ? (
          <div className="row">
            {empleadosSeleccionados.map((empleado) => (
              <div key={empleado.idempleado} className="col-md-3 mb-3">
                <div className="card">
                  <img
                    src={empleado.foto ? ApiWebURL + "fotos/" + empleado.foto : '/default-image.jpg'}
                    className="card-img-top"
                    alt={empleado.nombres}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{empleado.nombres} {empleado.apellidos}</h5>
                    <p className="card-text">{empleado.cargo}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p>No hay empleados seleccionados.</p>
        )}
      </div>
    </section>
  );
}

export default Seleccionados;
