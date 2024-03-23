import axios from "axios"

const baseURL = "https://chat.mabet.com.sa/api/v2"

const ChatApi = axios.create({
  baseURL: baseURL,
})

export default ChatApi
