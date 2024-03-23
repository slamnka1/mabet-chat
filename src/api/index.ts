import axios from "axios"

const baseURL = "https://chat.mabet.com.sa/api"

const ChatApi = axios.create({
  baseURL: baseURL,
})

export default ChatApi
