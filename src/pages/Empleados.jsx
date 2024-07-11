import { useEffect, useState } from "react";
import { ApiWebURL } from "../utils";

function Empleados() {
    const [listaEmpleados, setListaEmpleados] = useState([]);
    const [empleadosSeleccionados, setEmpleadosSeleccionados] = useState(
        JSON.parse(localStorage.getItem('empleadosSeleccionados')) || []
    );

    useEffect(() => {
        leerServicio();
    }, []);

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "empleados.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                setListaEmpleados(data);
            })
            .catch(error => console.error("Error al cargar empleados:", error));
    };

    const toggleSeleccionado = (empleado) => {
        const yaSeleccionado = empleadosSeleccionados.some(e => e.idempleado === empleado.idempleado);

        let nuevosSeleccionados;
        if (yaSeleccionado) {
            nuevosSeleccionados = empleadosSeleccionados.filter(e => e.idempleado !== empleado.idempleado);
        } else {
            nuevosSeleccionados = [...empleadosSeleccionados, empleado];
        }

        setEmpleadosSeleccionados(nuevosSeleccionados);
        localStorage.setItem('empleadosSeleccionados', JSON.stringify(nuevosSeleccionados));
    };

    const esSeleccionado = (empleado) => {
        return empleadosSeleccionados.some(e => e.idempleado === empleado.idempleado);
    };

    const dibujarCuadricula = () => {
        return (
            <div className="row">
                {listaEmpleados.map(item => (
                    <div className="col" key={item.idempleado} onClick={() => toggleSeleccionado(item)} style={{ cursor: 'pointer' }}>
                        <div className={`card ${esSeleccionado(item) ? 'selected' : ''}`}>
                            <img src={ApiWebURL + "fotos/" + item.foto} className="card-img-top" alt={item.nombres} />
                            <div className="card-body">
                                <h5 className="card-title">{item.nombres} {item.apellidos}</h5>
                                <p className="card-text">{item.cargo}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <section id='empleados' className='padded'>
            <div className="container">
                <h2>Empleados</h2>

                {dibujarCuadricula()}
            </div>
        </section>
    );
}

export default Empleados;
