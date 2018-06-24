const API_ENV = {
  production: 'https://festivalsg.herokuapp.com/api/',
  development: 'https://festivalsg.herokuapp.com/api/',
};

export const apiConfig = {
  url: process.env.APIHOST || API_ENV[process.env.NODE_ENV] || API_ENV.development,
  headers: {
    'X-Api-Key': '5393c1bb-a9e8-4806-a980-b7d9e5b05992',
  },
};
