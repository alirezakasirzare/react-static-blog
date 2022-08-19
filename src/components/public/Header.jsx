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
      <nav className="navbar navbar-expand-sm bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            React blog
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mobile-navbar"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* navigation links */}
          <div class="collapse navbar-collapse" id="mobile-navbar">
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
        </div>
      </nav>
    </header>
  );
}

export default Header;
