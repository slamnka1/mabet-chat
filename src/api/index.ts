import axios from "axios"

const baseURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8080/https://chat.mabet.com.sa/api"
    : "https://chat.mabet.com.sa/api"

const ChatApi = axios.create({
  baseURL: baseURL,
})

export default ChatApi
