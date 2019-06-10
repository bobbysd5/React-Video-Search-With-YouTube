import axios from "axios";

const KEY = "AIzaSyBoxajhKQla_Pfk4lWJVoB-QccbUxm2A5o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResult: 5,
    key: KEY
  }
});
