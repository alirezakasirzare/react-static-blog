import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Users from './views/user/Users';
import AboutUs from './views/AboutUs';
import ConnectUs from './views/ConnectUs';
import User from './views/user/User';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/connect-us" element={<ConnectUs />} />
      {/* users */}
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<User />} />
      {/* albums */}
      <Route path="/albums" element={<Users />} />
      <Route path="/albums/:id" element={<User />} />
    </Routes>
  );
}

export default App;
