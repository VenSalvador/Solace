import { Platform } from "react-native";
import Constants from "expo-constants";

const PORT = 5000;
// 👇 Replace with your machine’s LAN IP (check with `ipconfig` on Windows or `ifconfig` on Mac)
const LAN_IP = "192.168.1.21";
const baseURL = "http://192.168.1.21:5000";


// iOS Simulator → localhost works
if (Platform.OS === "iOS") {
  baseURL = `http://localhost:${PORT}`;
}

// Android Emulator → needs 10.0.2.2
else if (Platform.OS === "Android") {
  baseURL = `http://10.0.2.2:${PORT}`;
}

// If running inside Expo Go (real device), use LAN IP
if (Constants.appOwnership === "expo") {
  baseURL = `http://${LAN_IP}:${PORT}`;
}

export default baseURL;
