import axios from "axios"
import {
  CONNECTOR_YFTE_CONNECTOR_USERNAME,
  CONNECTOR_YFTE_CONNECTOR_PASSWORD
} from "react-native-dotenv"
const yfteconnector = axios.create({
  baseURL: "https://crowdbotics.com",
  auth: {
    username: CONNECTOR_YFTE_CONNECTOR_USERNAME,
    password: CONNECTOR_YFTE_CONNECTOR_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
