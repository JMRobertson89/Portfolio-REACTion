import NavBar from './NavBar';

function Header(props) {
    const { currentPage, handlePageChange } = props;

    return (
        <>
            <header>
                
                <div>
                    <NavBar currentPage={currentPage} handlePageChange={handlePageChange} >
                    </NavBar>
                </div>
                
                <div className='header-intro'>
                    <h2 className='header-title'>My Portfolio</h2>
                    <p>Now made with REACT!</p>
                </div>


            </header>

        </>
    );
};

export default Header;