import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID deTyHKVg7wl7Zu6FrSZevryXB61JrwFgJBGBdsAOhB8"
  }
});
