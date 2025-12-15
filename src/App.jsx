
import Login from './login/login.jsx';
import Home from './home/home.jsx';
import { Routes, Route } from 'react-router-dom';


const App = () => {
  

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>

  );
}

export default App
