import React, { Component } from 'react';
import project1 from '../img/project1.png';
import project2 from '../img/project2.png';
import project3 from '../img/project3.png';
import project4 from '../img/project4.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Projects</h1>
            <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>
            <div class="port_out port1 glass"><a href="https://drive.google.com/drive/folders/1wTkf9lydWdtbvhunMsn-tRUhUtOuc0dS?usp=sharing"><img src={project1} className="po1"></img></a></div>
            <div class="port_out port2 glass"><a href="https://github.com/abhipaiangle/pi-chat"><img src={project2} className="po1"></img></a></div>
            <div class="port_out port3 glass"><a href="https://drive.google.com/file/d/1gyxtpCyqA0SwtM21XP5tKIZj962aJbXx/view"><img src={project3} className="po1"></img></a></div>
            <div class="port_out port4 glass"><a href="https://www.umiciitb.com/competitions/SeDriCa"><img src={project4} className="po1"></img></a></div>
            </div>
            )
        }
    }
    
export default Portfolio
    
