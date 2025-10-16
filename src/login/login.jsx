import { useState } from 'react';
import './login.css';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // 阻止页面刷新
    if (username === "admin" && password === "123456") {
      alert("登录成功！");
    } else {
      alert("用户名或密码错误！");
    }
  };
  return (
   <div className="login-container">
    <div className="login-box">
      <h1 className="login-title">登录</h1>
      <div onSubmit={handleLogin} className="login-form">
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
        
        <button type="submit">登录</button>
      </div>
    </div></div>

      
  );
}
export default Login;
