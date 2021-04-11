import React from 'react';

const Skills = () => {

    
    return(
        <div id="skills">
            <div className="frontend-container container">
                <h1>Skills</h1>
                <div className="skills">
                    <div>
                        <img className="next" height="80px" src="./images/nextjs.png"></img>
                        <h4>Next Js</h4>
                    </div>
                    <div>
                        <img height="80px" src="./images/reactlogo.png"></img>
                        <h4>React</h4>
                    </div>
                    <div>
                        <img height="80px" src="./images/sasslogo.png"></img>
                        <h4>Sass</h4>
                    </div>
                    <div>
                        <img height="80px" src="./images/webpack.png"></img>
                        <h4>Webpack</h4>
                    </div>
                    <div>
                        <img height="80px" src="./images/bootstrap.png"></img>
                        <h4>Bootstrap</h4>
                    </div>
                </div>
            
            <div className="skills">
                <div>
                    <img height="80px" src="./images/node.png"></img>
                    <h4>Node</h4>
                </div>
                <div>
                    <img height="80px" src="./images/serverless.png"></img>
                    <h4>Serverless</h4>
                </div>
                <div>
                    <img height="80px" src="./images/laravel.png"></img>
                    <h4>Laravel</h4>
                </div>
                <div>
                    <img height="80px" src="./images/mysql.png"></img>
                    <h4>MySQL</h4>
                </div>
                <div>
                    <img height="80px" src="./images/mongodb.svg"></img>
                    <h4>MongoDB</h4>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;