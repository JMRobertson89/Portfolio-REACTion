function Footer() {
    return (
        <footer>
            <div className="right">
                <a href="https://github.com/JMRobertson89" target="_blank">  
                    <i className="fa-brands fa-github"></i>
                    <span>GitGub</span>
                </a>
                <a href="https://www.linkedin.com/in/jrobertson-io/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
                <a href="./Assets/files/Joshua Robertson Resume.pdf" target="_blank">  
                    <i className="fa-solid fa-file"></i>
                    <span>Resume</span>
                </a>
                <a href="mailto:jrobertson.io">
                    <i className="fa-solid fa-envelope"></i>
                    <span>Email</span>
                </a>
            </div>
        </footer>
    );
};

export default Footer;