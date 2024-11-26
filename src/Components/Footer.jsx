function Footer() {
    return (
      <>
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
          <div className="col-md-4 d-flex align-items-center">
            <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <svg className="bi" width="30" height="24">
                <use xlinkHref="#bootstrap"></use>
              </svg>
            </a>
            <span className="text-muted">Let’s work together!</span>
          </div>
  
          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-5">
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://linkedin.com/in/raidah-gauri-548510333"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-linkedin"></i>
              </a>
            </li>
            <li className="ms-3">
              <a
                className="text-muted"
                href="https://github.com/raidah-gauri"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-github"></i>
              </a>
            </li>
          </ul>
        </footer>
      </>
    );
  }
  
  export default Footer;
  