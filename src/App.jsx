import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);
  const [messages, setMessages] = useState([]);

  const getRandomStyle = () => {
    const colors = ["red", "blue", "green", "orange", "purple", "black"];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.floor(Math.random() * 30) + 16; // 字体16-45px
    const top = Math.floor(Math.random() * 80);
    const left = Math.floor(Math.random() * 80);
    const duration = (Math.random() * 3 + 2).toFixed(1); // 2~5秒浮动周期
    return {
      color,
      fontSize: `${size}px`,
      position: "absolute",
      top: `${top}%`,
      left: `${left}%`,
      animation: `floatText ${duration}s ease-in-out infinite alternate`,
    };
  };

  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount % 10 === 0) {
      const msg = newCount === 10 ? "你点了十次" : "你又点了十次";
      setMessages([...messages, { text: msg, style: getRandomStyle() }]);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
        backgroundColor: "white", // 白色背景
      }}
    >
      {/* 居中按钮 */}
      <button
        onClick={handleClick}
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          padding: "12px 24px",
          fontSize: "18px",
          cursor: "pointer",
          backgroundColor: "#333", // 按钮深色，白底下清晰
          color: "white",
          border: "none",
          borderRadius: "6px",
        }}
      >
        点我
      </button>

      {/* 随机文本 */}
      {messages.map((msg, index) => (
        <p key={index} style={msg.style}>
          {msg.text}
        </p>
      ))}

      {/* 动画样式 */}
      <style>
        {`
          @keyframes floatText {
            0% { transform: translateY(0); }
            100% { transform: translateY(-30px); }
          }
        `}
      </style>
    </div>
  );
}

export default function MyApp() {
  return (
    <div style={{ height: "100vh", width: "100vw", backgroundColor: "white" }}>
      <h1 style={{ textAlign: "center", margin: "20px 0", color: "black" }}>
        欢迎来到我的应用
      </h1>
      <MyButton />
    </div>
  );
}