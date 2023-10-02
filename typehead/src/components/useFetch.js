import { useEffect, useState } from "react";
import debounce from "lodash/debounce";
import axios from "axios";
const useFetch = (query) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = debounce(async (query) => {
    const API_ENDPOINT = `https://algochurn-server.onrender.com/practice/countries`;
    try {
      setIsLoading(true);
      const { data } = await axios(`${API_ENDPOINT}/${query}`);
      setData(data.countries.splice(0,5));
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
      setError(error.message);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }, 400);

  useEffect(() => {
    if (query.length === 0) {
      setData(null);
      setError(null);
      return;
    }
    fetchData(query);
  }, [query]);

  return [data, setData, error, isLoading];
};

export default useFetch;
