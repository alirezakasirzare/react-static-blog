import { Link } from 'react-router-dom';

function Default({ children }) {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              React blog
            </Link>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/salam">
                  route 1
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/salam">
                  route 1
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}

export default Default;
