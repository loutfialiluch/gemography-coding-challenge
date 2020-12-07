import { useState, useEffect } from "react";
import "./App.css";
import { getMostStarredRepos } from "./api";

import RepositoryDetails from "./components/RepositoryDetails/RepositoryDetails";

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
      <RepositoryDetails />
      <RepositoryDetails />
      <RepositoryDetails />
      <RepositoryDetails />
    </div>
  );
}

export default App;
