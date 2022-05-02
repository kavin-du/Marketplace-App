import apiClient from "./client";

// listing id for thread of conversation
const send = (message:any, listingId:any) => 
  apiClient.post('/messages', {
    message,
    listingId,
  });


export default {
  send,
};