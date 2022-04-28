import { useState } from "react";


const useApi = (apiFunc: any) => {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async (...args: any[]) => {
    // cannot await inside useeffect, therefore a seperate function
    setLoading(true);
    const response: any = await apiFunc(...args);
    setLoading(false);
    
    setError(!response.ok);
    setData(response.data); // we set the data if there is error or not, no harm in doing that

    return response;
  }

  return { data, error, loading, request };
}

export default useApi;