



function Navbar(props) {
    return (
        <>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-primary">
                <a className="navbar-brand" href="/">My Bookings</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto" style={{marginRight:300}}>
                        
                        {
                            props.menus ? props.menus.map(function (value) {
                                return <li key={value.name} className="nav-item active"><a href={value.url} className="nav-link">{value.name}</a></li>
                            })
                                : null
                        }

                    </ul>
                </div>
            </nav>
        </>
    )



}
export default Navbar;


