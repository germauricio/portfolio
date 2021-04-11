import React from 'react';
import Projects from '../components/Projects';
import LaboralX from '../components/LaboralX';
import AboutMe from '../components/AboutMe';
import Skills from './Skills';

const App = () => {
    window.addEventListener("scroll", (event) => {
        var scroll = window.scrollY;
        var arrow = document.getElementById("scroll");
        if (scroll < 190) {
            arrow.style.borderLeft = "1px solid white";
            arrow.style.borderBottom = "1px solid white";
        } else {
            arrow.style.borderLeft = "1px solid black";
            arrow.style.borderBottom = "1px solid black"
        }
    });


    return(
        <div>
            <div className="welcome">
                <h1>Mauricio Pauluk</h1>
                <div className="role">
                    <p className="anim-typewriter line-1">Full Stack Web Developer</p>
                </div>
                <section className="scroll">
                    <a href="#skills"><span id="scroll"></span></a>
                </section>
            </div>
            <AboutMe />
            <Skills />
            <Projects />
        </div>
    );
}

export default App;
