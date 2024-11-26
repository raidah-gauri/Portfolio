function Navbar() {
    return (
      <>
      <div>
      <nav className="navbar navbar-expand-sm px-5 custom-navbar ">
          <div className="container-fluid">
            <p className="logo " style={{fontSize:"27px",fontWeight:"700"}}>Logo.</p>
  
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
  
              {/* Collapsible navbar items */}
              <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav mx-auto mb-2">
                      <li className="nav-item">
                          <a className="nav-link active custom-nav-link" href="#home">Home</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link active custom-nav-link" href="#projects">Projects</a>
                      </li>
                      <li className="nav-item">
                          <a className="nav-link active custom-nav-link" href="#skills">Skills</a>
                      </li>
        
                  </ul>
  
                  {/* Search button */}
                  <div className="navbar-btn">
                  <button 
    className="btn custom-btn" 
    onClick={() => window.open("https://linkedin.com/in/raidah-gauri-548510333", "_blank")}
>
    Contact Me
</button>
                  </div>
              </div>
          </div>
      </nav>
      </div>
      </>
    );
  }
  
  export default Navbar;
  
  