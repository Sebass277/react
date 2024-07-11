import { useEffect, useState } from "react";
import { ApiWebURL } from "../utils";

function Paises() {
    const [listaPaises, setListaPaises] = useState([]);
    const [nuevoPais, setNuevoPais] = useState({
        codpais: "",
        pais: "",
        capital: "",
        area: "",
        poblacion: "",
        continente: ""
    });
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        leerPaises();
    }, []);

    const leerPaises = () => {
        const rutaServicio = "https://servicios.campus.pe/paises.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                setListaPaises(data);
            });
    };

    const manejarCambio = (event) => {
        const { name, value } = event.target;
        setNuevoPais({ ...nuevoPais, [name]: value });
    };

    const manejarEnvio = (event) => {
        event.preventDefault();

        const rutaInsert = "https://servicios.campus.pe/paisesinsert.php";
        const formData = new FormData();
        Object.keys(nuevoPais).forEach(key => {
            formData.append(key, nuevoPais[key]);
        });

        fetch(rutaInsert, {
            method: "POST",
            body: formData
        })
        .then(response => response.text())
        .then(data => {
            setMensaje("País agregado con éxito");
            leerPaises(); // Actualizar la lista de países después de agregar uno nuevo
        })
        .catch(error => {
            console.error("Error al insertar el país:", error);
            setMensaje("Error al agregar el país");
        });
    };

    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Código</th>
                        <th>País</th>
                        <th>Capital</th>
                        <th>Área</th>
                        <th>Población</th>
                        <th>Continente</th>
                    </tr>
                </thead>
                <tbody>
                    {listaPaises.map(pais => (
                        <tr key={pais.idpais}>
                            <td>{pais.idpais}</td>
                            <td>{pais.codpais}</td>
                            <td>{pais.pais}</td>
                            <td>{pais.capital}</td>
                            <td>{pais.area}</td>
                            <td>{pais.poblacion}</td>
                            <td>{pais.continente}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <section id="paises" className="padded">
            <div className="container">
                <h2>Paises</h2>
                <div className="mb-3">
                    <form onSubmit={manejarEnvio}>
                        <div className="mb-3">
                            <label htmlFor="codpais" className="form-label">Código de País</label>
                            <input type="text" className="form-control" id="codpais" name="codpais" value={nuevoPais.codpais} onChange={manejarCambio} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pais" className="form-label">País</label>
                            <input type="text" className="form-control" id="pais" name="pais" value={nuevoPais.pais} onChange={manejarCambio} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="capital" className="form-label">Capital</label>
                            <input type="text" className="form-control" id="capital" name="capital" value={nuevoPais.capital} onChange={manejarCambio} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="area" className="form-label">Área</label>
                            <input type="number" className="form-control" id="area" name="area" value={nuevoPais.area} onChange={manejarCambio} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="poblacion" className="form-label">Población</label>
                            <input type="number" className="form-control" id="poblacion" name="poblacion" value={nuevoPais.poblacion} onChange={manejarCambio} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="continente" className="form-label">Continente</label>
                            <input type="text" className="form-control" id="continente" name="continente" value={nuevoPais.continente} onChange={manejarCambio} required />
                        </div>
                        <button type="submit" className="btn btn-custom">Agregar País</button>
                    </form>
                    {mensaje && <p className="mensaje">{mensaje}</p>}
                </div>
                {dibujarTabla()}
            </div>
        </section>
    );
}

export default Paises;
