import React from 'react';
import '../styles/App.css';
import Work1 from '../images/Work-1.png';
import Work2 from '../images/Work-2.png';
import Work3 from '../images/Work-3.png';
import Work4 from '../images/Work-4.png';
import Work5 from '../images/Work-5.png';
import Work6 from '../images/Work-6.png';

function Projects() {
  return (
    <div className="container mt-5">
      <h1 className="mb-3">- Projects -</h1>
      <br></br>
      <div className="mb-3">
        <h3>Portfolio</h3><img src={Work2} alt="work2" />
        <a href ="https://github.com/ThaivyTran/code-portfolio/" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://thaivytran.github.io/code-portfolio/" target="_blank"><i class="fa-solid fa-globe"></i></a>
        <h3>Password</h3><img src={Work3} alt="work3" />
        <a href ="https://github.com/ThaivyTran/code-password/" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://thaivytran.github.io/code-password/" target="_blank"><i class="fa-solid fa-globe"></i></a>
        <h3>Quiz App</h3><img src={Work4} alt="work4" />
        <a href ="https://github.com/ThaivyTran/code-quiz/" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://thaivytran.github.io/code-quiz/" target="_blank"><i class="fa-solid fa-globe"></i></a>
        <h3>Agenda</h3><img src={Work5} alt="work5" />
        <a href ="https://github.com/ThaivyTran/code-agenda/" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://thaivytran.github.io/code-agenda/" target="_blank"><i class="fa-solid fa-globe"></i></a>
        <h3>Weather</h3><img src={Work6} alt="work6" />
        <a href ="https://github.com/ThaivyTran/code-weather/" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://thaivytran.github.io/code-weather/" target="_blank"><i class="fa-solid fa-globe"></i></a>
        <h3>Taco Truck</h3><img src={Work1} alt="work1" />
        <a href ="https://github.com/ThaivyTran/project-1" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://thaivytran.github.io/project-1/" target="_blank"><i class="fa-solid fa-globe"></i></a>
      </div>
      <br></br>
    </div>
  )
}

export default Projects