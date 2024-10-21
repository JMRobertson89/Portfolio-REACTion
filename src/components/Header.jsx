import NavBar from './NavBar';

function Header(props) {
    const { currentPage, handlePageChange } = props;

    return (
        <>
            <section>
                <header className='left'>
                    <div>
                        <a href="/">
                            <span className="first-name">Joshua</span>
                            <span className="last-name">Robertson</span>
                        </a>
                    </div>
                <div>
                    <NavBar currentPage={currentPage} handlePageChange={handlePageChange} >
                    </NavBar>
                </div>
                </header>
            </section>

            <section className='headerBack' >
                <h2 className='headerWel'>HELLO!</h2>
                <p className='PWel'>
                Hi there.
                </p>
            </section>
        </>
    );
};

export default Header;