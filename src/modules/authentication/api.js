import api from '../../commonAPI';

class AuthenticationAPI {
  async authenticateWithFacebook(params: Object) {
    const data = { ...params };

    return await api.post('authentication/facebook/', data, null);
  }
}

export default new AuthenticationAPI();
