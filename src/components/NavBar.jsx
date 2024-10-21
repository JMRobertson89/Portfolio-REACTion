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
                        <a href="./Assets/files/Joshua Robertson Resume.pdf" target="_blank">  
                            <i class="fa-solid fa-file"></i>
                            <span>Resume</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;