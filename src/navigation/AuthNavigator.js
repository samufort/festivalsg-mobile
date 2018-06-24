// @flow
import { createStackNavigator } from 'react-navigation';

import Authentication from '../modules/authentication/screens/Authentication';

export const AuthNavigator = createStackNavigator({
  Authentication: {
    screen: Authentication,
    navigationOptions: {
      title: 'Connexion',
    },
  },
});
