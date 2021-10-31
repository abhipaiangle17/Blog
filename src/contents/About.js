import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>
                <div className="hr_line line2 glass">
                    <div className="inner2"> </div>
                </div>
                <h2 className="abouthead">Abhishek Pai Angle</h2>
                <p>Just Another Developer</p>
                <br></br>
                <p className="p10">I am Abhishek, a pre-final year undergraduate at IIT Bombay.</p>
                
                <p>
                I have keen interest in Artificial Intelligence and Software Development and have worked on several projects in the domain. I get fascinated by breakthroughs in technology and how they are changing the world at an enormous rate.</p>
                <p>
                I am an avid learner and take interest in exploring new areas and building solutions to make this world a better place using technology, one byte at a time 😄.
                </p>
                <div className="Edu">
                    <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
                </div>
                <h3>Education</h3>
                <div className="vr_line glass">
                    <div className="vr_inner inn1"></div>
                    <div className="vr_inner inn2"></div>
                </div>
                <h4>B.Tech in MEMS with Minor in CSE</h4>
                <p className="p1">Indian Institute of Technology Bombay, India</p>
                <p className="p1"><i class="fa fa-calendar i2"></i>Aug 2019 - 2023</p>
                <h4>High School</h4>
                <p className="p1">Mushtifund Aryaans Higher Secondary School, Goa</p>
                <p className="p1"><i class="fa fa-calendar i2"></i>May 2019</p>

                <h3 class="sk_head">Skills</h3>
                <div class="sk glass">React</div>
                <div class="sk s2 glass">Javascript</div>
                <div class="sk s3 glass">Python</div>
                <div class="sk s4 glass">Tensorflow</div>
                <div class="sk s5 glass">GraphQL</div>
                <div class="sk s6 glass">AWS</div>
            </div>
        )
    }
}

export default About
