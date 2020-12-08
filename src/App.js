import { useState, useEffect } from "react";
import "./App.css";
import { getMostStarredRepos } from "./api";

import RepositoryDetails from "./components/RepositoryDetails/RepositoryDetails";
import Loading from "./components/LoadingComponent/Loading";

function App() {
  const [page, setPage] = useState(1);
  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(true);
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    const loadMostStarredRepos = async () => {
      try {
        setIsLoading(true);
        const items = await getMostStarredRepos(page);
        setRepos((prev) => [...prev, ...items]);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError("Data not found !");
        throw error;
      }
    };
    loadMostStarredRepos();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  const handleScroll = () => {
    window.onscroll = () => {
      // If the condition is satisfied then the scroll has reached the bottom of the page
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        setPage((prev) => prev + 1);
      }
    };
  };

  return (
    <div className="container">
      {repos.length > 0 ? (
        repos.map((repository) => (
          <RepositoryDetails key={repository.id} repository={repository} />
        ))
      ) : (
        <h2 className="error-msg">{error}</h2>
      )}
      {isloading && <Loading />}
    </div>
  );
}

export default App;
