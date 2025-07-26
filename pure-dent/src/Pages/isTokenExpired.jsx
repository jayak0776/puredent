import { jwtDecode } from "jwt-decode"; // Correct import

// Function to check if the token is expired
const isTokenExpired = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    const expirationTime = decodedToken.exp * 1000; // Convert to milliseconds
    const currentTime = Date.now();

    // Check if the token expiration time is before the current time
    return expirationTime < currentTime;
  } catch (error) {
    // If the token is invalid (e.g., cannot be decoded), consider it expired
    return true;
  }
};

export default isTokenExpired;
