import { useEffect, useState } from "react";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com";

export function useGetUsers<T>(endpoint: string) {
  const [data, setData] = useState<T>();
  const [isPending, setIsPending] = useState(true);
  const [erorr, setError] = useState<null | string>(null);

  const getUsers = async (endpoint: string) => {
    setIsPending(true);
    try {
      const response = await axios.get(`${URL}${endpoint}`);
      setData(response.data);
      setIsPending(false);

    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error";
      setError(errorMessage);
      setIsPending(false);
    }
  };
  useEffect(() => {
    getUsers(endpoint);
  }, [endpoint]);
  return { data, isPending, erorr };
}
