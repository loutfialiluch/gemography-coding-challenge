import { useState, useEffect } from "react";
import "./App.css";
import { getMostStarredRepos } from "./api";

import RepositoryDetails from "./components/RepositoryDetails/RepositoryDetails";
import Loading from "./components/LoadingComponent/Loading";

function App() {
  const [page, setPage] = useState(1);
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
        setIsLoading(true);
        throw error;
      }
    };
    loadMostStarredRepos();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [page]);

  const handleScroll = () => {
    window.onscroll = () => {
      // Checks that the page has scrolled to the bottom
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
      {repos.map((repository) => (
        <RepositoryDetails key={repository.id} repository={repository} />
      ))}
      {isloading && <Loading />}
    </div>
  );
}

export default App;
