import { Link, NavLink } from 'react-router-dom';

function Header() {
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
      text: 'Albums',
      path: '/albums',
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
    <header className="mb-3">
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React blog
          </Link>
          {/* navigation links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {navRoutes.map((route, index) => {
              return (
                <li className="nav-item" key={index}>
                  <NavLink className="nav-link" to={route.path}>
                    {route.text}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
