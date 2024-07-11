import { Link } from "react-router-dom";
import 'bootstrap-icons/font/bootstrap-icons.css'; // Importa los estilos de Bootstrap Icons

function MainNav() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container">
                <Link className="navbar-brand" to="/">EGY</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/proveedores">
                                <i className="bi bi-box-seam"></i> Proveedores
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/empleados">
                                <i className="bi bi-people"></i> Empleados
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/tienda">
                                <i className="bi bi-shop"></i> Tienda
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/directores">
                                <i className="bi bi-person-badge"></i> Directores
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/futbol">
                                <i className="bi bi-football"></i> Fútbol
                            </Link>
                        </li>
                        {/* Nuevo enlace para Pedidos */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/pedidos">
                                <i className="bi bi-file-earmark-text"></i> Pedidos
                            </Link>
                        </li>
                        {/* Nuevo enlace para Seleccionados */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/seleccionados">
                                <i className="bi bi-person-check"></i> Seleccionados
                            </Link>
                        </li>
                        {/* Nuevo enlace para Paises */}
                        <li className="nav-item">
                            <Link className="nav-link" to="/paises">
                                <i className="bi bi-globe"></i> Paises
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/carrito">
                                <i className="bi bi-basket"></i> Carrito
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                <i className="bi bi-person"></i> Iniciar sesión
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MainNav;
