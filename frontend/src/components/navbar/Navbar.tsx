// import styles from "./Navbar.module.css";

function Navbar () {
    return ( 
        <nav className={`navbar navbar-expand-lg navbar-light bg-black `} >
        <div className="container-fluid">
        
          {/* Logo - Left */}
          <a className="navbar-brand text-light" href="#">Logo</a>
        
          {/* Toggle for mobile */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        
          {/* Nav content */}
          <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
            
            {/* Center - EN */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
              </li>
            </ul>
        
            {/* Right - Home */}
            <ul className="navbar-nav">
              <li className="nav-item">
              </li>
            </ul>
        
          </div>
        </div>
        </nav>
     );
}

export default Navbar ;