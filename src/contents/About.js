import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">About Me</h1>
                <div className="hr_line line2 glass"><div className="inner2"></div></div>
                <h2 className="abouthead">Abhishek Pai Angle</h2>
                <p>Just Another Developer</p>
                <br></br>
                <p className="p10">Abhishek here, Undergaduate Sophomore at IIT Bombay. Turning caffeine into code since past 2 years. My areas of interest are Deep Learning, Image Processing, Automation and Web Development but not limiting my domain to these. A lot of things have to be explored that I know that I don't know and that I don't know that I don't know.
                </p>
                <p>
                    Some of my activities at the institute include being Convener for Web and Coding Club which is the official programming club of the Institute. I am also part of the tech team Innovation Cell - IIT Bombay, working as Jr. Computer Vision Engineer for the project SeDriCa, India's first self driving car. You may check out my resume to know more about my work.
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
                <p className="p1">IIT Bombay, India</p>
                <p className="p1"><i class="fa fa-calendar i2"></i>Aug 2019 - 2023</p>
                <h4>High School</h4>
                <p className="p1">Mushtifund Aryaans Higher Secondary School, Goa</p>
                <p className="p1"><i class="fa fa-calendar i2"></i>May 2019</p>

                <h3 class="sk_head">Skills</h3>
                <div class="sk glass">React</div>
                <div class="sk s2 glass">Javascript</div>
                <div class="sk s3 glass">Python</div>
                <div class="sk s4 glass">Tensorflow</div>
                <div class="sk s5 glass">SQL</div>
                <div class="sk s6 glass">GraphQL</div>
            </div>
        )
    }
}

export default About
