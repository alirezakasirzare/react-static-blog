import { Link } from 'react-router-dom';

function Default({ children }) {
  // navigation routes
  const navRoutes = [
    {
      text: 'Home',
      path: '/',
    },
    {
      text: 'Users',
      path: '/users',
    },
    {
      text: 'About us',
      path: '/about-us',
    },
    {
      text: 'Connect us',
      path: '/connect-us',
    },
  ];

  return (
    <>
      <header className="mb-3">
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              React blog
            </Link>
            {/* navigation links */}
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navRoutes.map((route) => {
                return (
                  <li className="nav-item">
                    <Link className="nav-link" to={route.path}>
                      {route.text}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
      <main className="container">{children}</main>
    </>
  );
}

export default Default;
