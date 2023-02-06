import React from 'react';
import Img from '../images/about.png';

function About() {
  return (
    <section id="about-me" class="about-me">
    <h1>- About Me -»</h1>
    <img src={Img} alt="pic" height="100"/>
    <p><b>Name:</b> Thaivy Tran (She/her)</p>
    <p><b>Age:</b> 25 </p>
    <p><b>Likes:</b> Tech, Auto, Sneakers, Travel and Noodles </p>
    <p><b>Dislikes:</b> Early mornings, Pumping gas, stepping on Legos </p>

    <p>Hello, World! Welcome to my coding portfolio webpage! I am Thaivy (ta-vy) and here's an introduction. I graduated high school in 2015, after I enlisted into the National Guard Army for 6 years. My MOS was 88M (heavy equipment operator), to keep it short basically I operate heavy up-amored vehicles. In July 2021, I was honorably discharged and now I'm looking at different career paths. Thus, is why I am currently enrolled in uPenn Full Stack boot camp part-time to advance my career.</p>
    <p>On my days off I enjoy touching grass and exploring new destinations. It could be road trips, flying or by train, as long as we get to stop and explore our surroundings! When I'm not outside, I'm inside watching crime and business documentaries on YouTube or Netflix. Got any recommendations? Let me know!
    </p>
  </section>
  )
}

export default About