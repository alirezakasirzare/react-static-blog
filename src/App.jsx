import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import AboutUs from './views/AboutUs';
import ConnectUs from './views/ConnectUs';
import Users from './views/user/Users';
import User from './views/user/User';
import Albums from './views/albums/Albums';
import Album from './views/albums/Album';
import Posts from './views/Posts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/connect-us" element={<ConnectUs />} />
      <Route path="/posts" element={<Posts />} />
      {/* users */}
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<User />} />
      {/* albums */}
      <Route path="/albums" element={<Albums />} />
      <Route path="/albums/:id" element={<Album />} />
    </Routes>
  );
}

export default App;
