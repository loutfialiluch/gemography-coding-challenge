import axios from "axios";
import moment from "moment";

// This function is an asychronous function and will get the most starred repositories in the last 30 days;
export const getMostStarredRepos = async (page) => {
  //Subtract one month from current date
  const date = new moment(new Date()).subtract(1, "months");
  const formattedDate = date.format("YYYY-MM-DD");
  const URL = `https://api.github.com/search/repositories?q=created:>${formattedDate}&sort=stars&order=desc&page=${page}`;
  try {
    const {
      data: { items },
    } = await axios.get(URL);
    return items;
  } catch (error) {
    throw error;
  }
};
