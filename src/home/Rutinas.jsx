// src/components/Rutinas.jsx
import React, { useEffect } from 'react';
import { Button, OverlayTrigger, Popover } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de que Bootstrap está importado

function Rutinas() {
    useEffect(() => {
        // Inicializa los popovers de Bootstrap
        const popovers = document.querySelectorAll('[data-bs-toggle="popover"]');
        popovers.forEach(popover => new window.bootstrap.Popover(popover));
    }, []);

    const renderPopover = (title, content) => (
        <Popover id="popover-basic" className="custom-popover">
            <Popover.Header as="h3">{title}</Popover.Header>
            <Popover.Body>{content}</Popover.Body>
        </Popover>
    );

    return (
        <section className="padded">
            <div className="container">
                <h2>Rutinas</h2>
                <div className="row">
                    <div className="col">
                        <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={renderPopover('Rutina de Fuerza', 'Esta rutina está diseñada para construir músculo y aumentar la fuerza. Incluye ejercicios básicos como sentadillas, press de banca, y levantamiento de peso muerto. Realiza 4 series de 8-12 repeticiones por ejercicio.')}
                        >
                            <Button className="custom-btn">Rutina de Fuerza</Button>
                        </OverlayTrigger>
                    </div>
                    <div className="col">
                        <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={renderPopover('Rutina de Cardio', 'Ideal para mejorar tu resistencia y quemar calorías. Puedes alternar entre correr, nadar o andar en bicicleta durante 30-45 minutos, 4 veces a la semana. Incluye intervalos para maximizar los beneficios.')}
                        >
                            <Button className="custom-btn">Rutina de Cardio</Button>
                        </OverlayTrigger>
                    </div>
                    <div className="col">
                        <OverlayTrigger
                            trigger="click"
                            placement="right"
                            overlay={renderPopover('Rutina de Flexibilidad', 'Mejora tu rango de movimiento y reduce el riesgo de lesiones con esta rutina de estiramientos. Dedica 20 minutos a estiramientos estáticos y dinámicos, 3 veces a la semana, enfocándote en todos los grupos musculares principales.')}
                        >
                            <Button className="custom-btn">Rutina de Flexibilidad</Button>
                        </OverlayTrigger>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Rutinas;
