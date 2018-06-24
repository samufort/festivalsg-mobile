let store;

export default {
  init(configureStore) {
    store = configureStore();
  },
  set(newStore) {
    store = newStore;
  },
  get() {
    return store;
  },
};
