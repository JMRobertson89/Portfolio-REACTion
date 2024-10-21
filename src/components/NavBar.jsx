import Resume from '../assets/images/files/Joshua Robertson Resume.pdf';

function NavBar({ currentPage, handlePageChange}) {
    return(
        <>
            <nav>
                <div className='left'>
                    <a href="/">
                        <span className="first-name">Joshua</span>
                        <span className="last-name">Robertson</span>
                    </a>
                </div>

                <div className='right'>
                            <a href="#about"
                            onClick={() => handlePageChange('About')}
                            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                            >About</a>
                            <a href="#projects"
                            onClick={() => handlePageChange('Projects')}
                            className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                            >Projects</a>
                            <a href="#contact"
                            onClick={() => handlePageChange('Contact')}
                            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                            >Contact</a>
                            <a href={Resume} target="_blank">  
                                <span>Resume</span>
                            </a>
                </div>
            </nav>
        </>
    );
};

export default NavBar;