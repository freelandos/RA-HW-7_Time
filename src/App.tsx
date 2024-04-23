import { useState } from "react";
import { VideoList } from "./components/VideoList";
import { data } from "./data";
import "./App.css";

function App() {
  const [list] = useState(data);

  return <VideoList list={list} />
}

export default App;