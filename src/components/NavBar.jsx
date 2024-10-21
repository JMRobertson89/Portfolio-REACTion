function NavBar({ currentPage, handlePageChange}) {
    return(
        <>
            <nav>
                <ul>
                    <li>
                        <a href="#about"
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >About</a>
                    </li>
                    <li>
                        <a href="#projects"
                        onClick={() => handlePageChange('Projects')}
                        className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
                        >Projects</a>
                    </li>
                    <li>
                        <a href="#contact"
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >Contact</a>
                    </li>
                    <li>
                        <a href="#resume"
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >Resume</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar