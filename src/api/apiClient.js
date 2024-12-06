import { useAuth } from '../context/AuthContext';

const makeAuthenticatedRequest = async (url, options = {}) => {
  const { getToken } = useAuth();
  const token = getToken();
  
  const headers = {
    ...options.headers,
    'Authorization': `Bearer ${token}`,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  return response;
}; 