import { useState } from "react";


const useApi = (apiFunc: any) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    // cannot await inside useeffect, therefore a seperate function
    setLoading(true);
    const response: any = await apiFunc();
    setLoading(false);

    if(!response.ok) return setError(true);

    setError(false);
    setData(response.data);
  }

  return { data, error, loading, request };
}

export default useApi;