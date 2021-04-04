import React from 'react';
import Projects from '../components/Projects';

const App = () => {
    return(
        <div>
            <div className="welcome">
                <h1>Mauricio Pauluk</h1>
                <div className="role">
                    <p className="anim-typewriter line-1">Full Stack Web Developer</p>
                </div>
            </div>
            
            <Projects />
        </div>
    );
}

export default App;