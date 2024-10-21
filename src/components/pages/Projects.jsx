import WeatherDashboard from '../../assets/images/Weather Dashboard.webp';
import TripPlanner from '../../assets/images/Trip-Planner.png';

function Projects() {
    return (
        <>
            <section id="projects" className="projects-header">
                <h2>Projects</h2>
                <p>Select the project name to view the GitHub repository</p>
            </section>

            <section className="projects-section">

                <div className="project" id="project-1">
                    <a href="https://github.com/JMRobertson89/Social-Network-API" target="_blank">
                        <h3>Social Network API</h3>
                    </a>
                    <p>Social network API created using Node.js and Express.js, using NoSQL database.</p>
                    <div className="image-container">
                        <iframe width="600" height="400" src="https://www.youtube.com/embed/7nFSZ9iiGTU?si=pa1IblXxzadSW2x3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>


                <div className="project" id="project-2">
                    <a href="https://github.com/natale565/Trip-Planner" target="_blank">  
                    <h3>TripCraft</h3></a>
                    <p>Collaborative application built with Node.js and Express.js, using SQL database. Project is deployed on Render.</p>
                    <div className="image-container">
                        <a href="https://trip-planner-b5zi.onrender.com/">
                        <img src={TripPlanner} alt=""></img>
                        </a>
                    </div>
                </div>


                <div className="project" id="project-3">
                    <a href="https://github.com/JMRobertson89/Weather-Dashboard" target="_blank">  
                    <h3>Weather Dashboard</h3></a>
                    <p>Dashboard that displays current weather, as well as a 5-day forecast, for a city searched by the user.</p>
                    <div className="image-container">
                        <a href="https://jmrobertson89.github.io/Weather-Dashboard/"></a>
                        <img src={WeatherDashboard} alt=""></img>
                    </div>
                </div>


                <div className="project" id="project-4">
                    <a href="https://github.com/JMRobertson89/Employee-Tracker" target="_blank">  
                        <h3>Employee Tracker</h3>
                    </a>
                    <p>Command-line application to manage an employee database, using Node.js, Inquirer, and PostgreSQL.</p>
                    <div className="image-container">
                        <iframe width="600" height="400" src="https://www.youtube.com/embed/Wh7yypVWQlQ?si=U08lfuLNG_XoqyUk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
            </section>
        
        </>
    );
};

export default Projects;