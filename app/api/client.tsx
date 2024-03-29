import { create } from "apisauce";
import authStorage from "../auth/storage";
import cache from "../utility/cache";
import settings from "../config/settings";

// don't use localhost, bcz andriot won't able to see it
const apiClient = create({
  baseURL: settings.apiUrl,
});

apiClient.addAsyncRequestTransform( async (request) => {
  const authToken = await authStorage.getToken();
  if(!authToken) return;

  request.headers['Authorization'] = 'Bearer '+authToken;
});

const get = apiClient.get; // only ref, not calling

// now modify the original get function to have cache support
apiClient.get = async (url, params, axiosConfig): Promise<any> => {
  // call original get with original args
  const response = await get(url, params, axiosConfig);

  if(response.ok) {
    cache.store(url, response.data); // this will cache every get request, need to have a whitelist
    console.log("loading from server....");
    
    return response;
  }
  // this point means, req failed/no connection
  console.log("loading from cache...");
  
  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
}


export default apiClient;