import { useState, useEffect } from "react";
import "./App.css";
import { getMostStarredRepos } from "./api";
function App() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const loadMostStarredRepos = async () => {
      const items = await getMostStarredRepos(1);
      console.log(items);
      setRepos((prev) => [...prev, ...items]);
    };
    loadMostStarredRepos();
  }, []);

  return (
    <div className="container">
      <h1>App</h1>
    </div>
  );
}

export default App;
