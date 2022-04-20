import { create } from "apisauce";

// don't use localhost, bcz andriot won't able to see it
const apiClient = create({
  baseURL: 'http://192.168.8.101:3000'
});

export default apiClient;