import { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isSwapped,setIsSwapped] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault(); // 阻止页面刷新
    if (username === "admin" && password === "123456") {
      
      navigate('/home');
    } else {
      alert("用户名或密码错误！");
    }
  };
  return (
   <div className="login-container">
    <div className="login-box">
      <div className={`login ${isSwapped ? 'swapped' : ''}`}>
        <h1 className="login-title">登录</h1>
      <form onSubmit={handleLogin} className="login-form">
        <div className="input-wrap">
          <input
          type="text"
          placeholder="用户名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <i className="fa-solid fa-user"></i>
        </div>
        
        <div className='input-wrap'>
          <input
          type="password"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <i className="fa-solid fa-lock"></i>
        
        </div>
        <div className='rem'>
          <p className='rema'>
            <input type="checkbox" />
            记住我
          </p>
          <p className='remb'>
            <a>忘记密码?</a>
          </p>
        </div>
       <div className='but'>
          <button type="submit">login</button>
          <button className='aa' onClick={(e) => { e.preventDefault(); setIsSwapped(!isSwapped); 
}}>注册</button>
        </div>
        
        
      </form>
      </div>
      
      <div className={`register ${isSwapped ? 'swapped' : ''}`}>
        <h1 className="login-title">注册</h1>
        <form onSubmit={handleLogin} className="login-form">
        <div className="input-wrap">
          <input
          type="text"
          placeholder="用户名"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <i className="fa-solid fa-user"></i>
        </div>
        
        <div className='input-wrap'>
          <input
          type="password"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <i className="fa-solid fa-lock"></i>
        
        
        </div>
          <div className='input-wrap'>
          <input
          type="password"
          placeholder="确认密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <i className="fa-solid fa-lock"></i>
        
        
        </div>

        <div className='but'>
          <button className='aa' onClick={(e) => { e.preventDefault(); setIsSwapped(!isSwapped); 
}}>已注册，返回登录</button>
        </div>
        
        
        
      </form>
      </div>
    </div>
    
    </div>
    

      
  );
}
export default Login;
