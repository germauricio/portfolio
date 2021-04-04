import React from 'react';

const Projects = () => {
    return(
        <div className="container">
          <h1>Algunos proyectos</h1>
            <div className="box">
                <div>
                    <a href="https://www.eunoiamia.com" target="_blank">
                        <h3>Eunoia Mia</h3>
                        <img height="100px" src="./images/eunoiamialogo.png"></img>
                        <p>Página desarrollada para el emprendimiento de productos naturales <strong>Eunoia Mia</strong>. Implementa medios de pago, una interfaz sencilla y fácil de utilizar</p>
                    </a>
                </div>
                <div>
                    <a href="http://pokedexixpandit.netlify.app" target="_blank">
                        <h3>Pokedex</h3>
                        <img height="100px" src="./images/pokeball.png"></img>
                        <p>Una simple pokedex desarrollada con React para realizar busqueda de pokemones por nombre utilizando la PokéApi</p>
                    </a>
                </div>
                <div>
                    <a href="http://challenge-pauluk-mercadolibre.herokuapp.com" target="_blank">
                        <h3>Mercado Libre</h3>
                        <img height="100px" src="./images/mercadolibre.png"></img>
                        <p>Aplicación que simula la experiencia de pre-compra en la plataforma de e-commerce de Mercado Libre. Realizada con React, Express, Next y Sass</p>
                    </a>

                </div>
            </div>  
        </div>
    );
}

export default Projects;