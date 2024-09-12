const MOCK_API_DELAY = 2000;

const mockService = {
  postData: async payload => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (payload) {
          resolve({
            success: true,
            message: 'Data successfully received',
            payload,
          });
        } else {
          reject({
            success: false,
            error: 'Invalid data',
          });
        }
      }, MOCK_API_DELAY);
    });
  },
};

export default mockService;
