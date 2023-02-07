import React from 'react';
import Work1 from '../images/Work-1.png';
import Work2 from '../images/Work-2.png';
import Work3 from '../images/Work-3.png';
import Work4 from '../images/Work-4.png';
import Work5 from '../images/Work-5.png';
import Work6 from '../images/Work-6.png';

function Projects() {
  return (
    <div><h1>- Projects -»</h1>
      <br></br>
    <a href ="https://github.com/ThaivyTran/code-refactor"><img src={Work1} alt="work1" /></a>
    <a href ="https://github.com/ThaivyTran/code-portfolio/"><img src={Work2} alt="work2" /></a>
    <a href ="https://github.com/ThaivyTran/code-password/"><img src={Work3} alt="work3" /></a>
    <a href ="https://github.com/ThaivyTran/code-quiz/"><img src={Work4} alt="work4" /></a>
    <a href ="https://github.com/ThaivyTran/code-agenda/"><img src={Work5} alt="work5" /></a>
    <a href ="https://github.com/ThaivyTran/code-weather/"><img src={Work6} alt="work6" /></a>
    </div>
    
  )
}

export default Projects