import React from "react";
import ReactDOM from "react-dom/client"; // import 수정
import App from "./App";

// createRoot 메서드를 사용하여 root element 생성
const root = ReactDOM.createRoot(document.getElementById("root"));

// render 함수를 사용하여 App 컴포넌트 렌더링
root.render(<App />);
