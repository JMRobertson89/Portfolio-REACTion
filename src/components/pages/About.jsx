import Headshot from '../../assets/images/jrobertson-headshot2.jpg';
import HTML from '../../assets/images/html-logo.webp';
import CSS from '../../assets/images/css-logo.webp';
import JavaScript from '../../assets/images/javascript-logo.webp';
import Node from '../../assets/images/node-logo.webp';
import React from '../../assets/images/react-logo.webp';


function About() {
    return (
        <>
            <section className="hero-section">
                <div className="text">
                    <h2>Hi! I'm Josh</h2>
                    <p>I recently graduated from the UConn School of Engineering's Full-Stack Web Development Bootcamp, where I honed my skills in technologies such as HTML, CSS, JavaScript, Node.js, and React. With a background in Technology Sales and Client Management, I bring a unique blend of problem-solving, collaboration, and a customer-first mindset to my development projects.

                    During my professional career, I've excelled in leveraging technology to create solutions that meet both client and business needs. Now, I'm excited to apply my technical skills to solve complex software challenges and contribute to innovative projects.

                    Feel free to reach out if you’d like to discuss potential opportunities or collaborations. I’d love to connect!
                    </p>
                </div>
        
                <div className="headshot">
                    <img src={Headshot} alt="Joshua Robertson Headshot"></img>
                </div>
            
            </section>

            <section id="skills" className="skills-section">
                <h2>Skills</h2>
                <div className="text">
                    <p> Proficient in front-end development technologies such as HTML, CSS, JavaScript, and React, alongside back-end frameworks like NodeJS and Express.js. Experienced in working with SQL and NoSQL databases including PostgreSQL and MongoDB. Strong foundation in Object-Oriented Programming (OOP) and skilled in version control with Git. Additional expertise in implementing Search Engine Optimization (SEO) best practices. Comfortable working in both macOS and Windows environments.</p>
                </div>

                <div className="cells">
                    <div className="cell">
                        <img src={HTML} alt="HTML logo"></img>
                        <span>HTML</span>
                </div>

                <div className="cell">
                    <img src={CSS} alt="CSS logo"></img>
                    <span>CSS</span>
                </div>

                <div className="cell">
                    <img src={JavaScript} alt="Javascript logo"></img>
                    <span>Javascript</span>
                </div>

                <div className="cell">
                    <img src={Node} alt="Node.js logo"></img>
                    <span>Node.js</span>
                </div>

                <div className="cell">
                    <img src={React} alt="React Logo"></img>
                    <span>React</span>
                </div>
            </div>
        </section>
        
        </>
    );
};

export default About;