import api from '../../commonAPI';

class BaccalaureatesAPI {
  async fetchBaccalaureates() {
    return await api.get('baccalaureate');
  }
}

export default new BaccalaureatesAPI();
