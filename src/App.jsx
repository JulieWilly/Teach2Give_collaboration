import { useState } from "react";
import React from "react";
import Blog from "./pages/Blogs/Blog";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <><Blog/></>;
}

export default App;
