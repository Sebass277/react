import React from 'react';
import ensalada from '../assets/images/comida2.jpg'; // Ajusta la ruta si es necesario
import batido from '../assets/images/comida1.jpg';
import pollo from '../assets/images/comida3.jpg';

function Noticias() {
    return (
        <section className="padded">
            <div className="container">
                <h2>Comida sana</h2>
                <p>Nuestros especialistas ofrecen opciones sanas para la alimentación</p>
                <div className="row">
                    <article className="col">
                        <h3>Ensalada de Quinoa y Verduras</h3>
                        <p>Disfruta de una ensalada fresca y saludable con quinoa, pepino, pimiento rojo, tomates cherry y cebolla roja, aderezada con una vinagreta de aceite de oliva y jugo de limón. Perfecta para una comida ligera y nutritiva.</p>
                        <img src={ensalada} alt="Ensalada de Quinoa y Verduras" />
                    </article>
                    <article className="col">
                        <h3>Batido de Proteínas con Plátano y Mantequilla de Maní</h3>
                        <p>Recarga tus energías con un delicioso batido de plátano, mantequilla de maní, proteína en polvo de vainilla y leche de almendras. Ideal para después de tu entrenamiento en El Gran Gym.</p>
                        <img src={batido} alt="Batido de Proteínas con Plátano y Mantequilla de Maní" />
                    </article>
                    <article className="col">
                        <h3>Pollo al Horno con Verduras</h3>
                        <p>Saborea un plato saludable de pechuga de pollo al horno acompañada de brócoli, pimiento amarillo y calabacín, todo sazonado con aceite de oliva, ajo y tomillo. Una opción perfecta para una cena balanceada y nutritiva.</p>
                        <img src={pollo} alt="Pollo al Horno con Verduras" />
                    </article>
                </div>
            </div>
        </section>
    );
}

export default Noticias;
