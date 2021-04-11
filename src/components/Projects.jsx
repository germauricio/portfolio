import React, {useEffect, useState} from 'react';
import getContributions from '../services/githubService';
import Contributions from '../components/Contributions';

const Projects = () => {
    const [contributions, setContributions] = useState(false);
    
    useEffect(async () => {
        const data = await getContributions('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', 'germauricio');
        setContributions(data);
    }, []);

    return(
        <div className="container">
          <h1>Some projects</h1>
            <div className="projects">
                <div>
                    <a href="https://www.eunoiamia.com" target="_blank">
                        <h3>Eunoia Mia</h3>
                        <img height="100px" src="./images/eunoiamialogo.png"></img>
                        <p>Page developed for the natural products entrepreneurship <strong>Eunoia Mia</strong>. Implements payment methods and a simple user interface</p>
                    </a>
                </div>
                <div>
                    <a href="http://pokedexixpandit.netlify.app" target="_blank">
                        <h3>Pokedex</h3>
                        <img height="100px" src="./images/pokeball.png"></img>
                        <p>A pokedex designed with React for searching pokemons by name using PokéApi</p>
                    </a>
                </div>
                <div>
                    <a href="http://challenge-pauluk-mercadolibre.herokuapp.com" target="_blank">
                        <h3>Mercado Libre</h3>
                        <img height="100px" src="./images/mercadolibre.png"></img>
                        <p>App that simulates the pre-buy experience in the e-commerce platform of Mercado Libre. Builded with NextJS, Sass and Express</p>
                    </a>

                </div>
            </div>
            {contributions ? (
                <div>
                    <h2>GitHub contributions</h2>
                    <Contributions contributions={contributions} />
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
}

export default Projects;
