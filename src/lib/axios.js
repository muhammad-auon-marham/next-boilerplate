import axios from 'axios';

import { CONFIG } from 'src/global-config';

// ----------------------------------------------------------------------

/**
 * `CONFIG.serverUrl` is empty by default, so requests go to relative `/api/...` URLs on the same origin
 * (Launchpad routes `/api` to the backend). Set it only when the API lives on another origin.
 *
 * The access token is attached by `setSession()` in `src/auth/context/jwt/utils.js` after sign-in.
 */
const axiosInstance = axios.create({
  baseURL: CONFIG.serverUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  (response) => {
    // The backend wraps every response as `{ success, message, data }`: hand callers the `data` payload
    const body = response.data;
    if (body && typeof body === 'object' && 'success' in body && 'data' in body) {
      response.data = body.data;
    }
    return response;
  },
  (error) => {
    const rawMessage = error?.response?.data?.message || error?.message || 'Something went wrong!';
    // Validation errors arrive as an array of messages
    const message = Array.isArray(rawMessage) ? rawMessage.join(', ') : rawMessage;
    console.error('Axios error:', message);
    return Promise.reject(new Error(message));
  }
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
  try {
    const [url, config] = Array.isArray(args) ? args : [args, {}];

    const res = await axiosInstance.get(url, config);

    return res.data;
  } catch (error) {
    console.error('Fetcher failed:', error);
    throw error;
  }
};

// ----------------------------------------------------------------------

export const endpoints = {
  auth: {
    me: '/api/v1/auth/me',
    signIn: '/api/v1/auth/login',
    signUp: '/api/v1/auth/register',
  },
};
