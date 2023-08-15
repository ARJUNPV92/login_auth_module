import apiClient from './apiClient'

const authService = {
  login: async (username, password) => {
    try {
      const response = await apiClient.post('/api/login', { username, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
