import React from 'react';
import {
  Alert,
  AsyncStorage,
  Button,
  StyleSheet,
  View,
} from 'react-native';
import { Constants, Facebook } from 'expo';

export default class AuthScreen extends React.Component {
  static navigationOptions = {
    title: 'Connexion',
  };

  render() {
    return (
      <View>
        <Button title="Créer un compte" onPress={this.displaySignUpForm} />
        <Button
          title="Login with Facebook"
          onPress={this._handleFacebookLogin}
        />
      </View>
    );
  }

  displaySignUpForm = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
  };

  loginWithFacebook = () => {

  }

  _handleFacebookLogin = async () => {
    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync('153611638586266', { 
        permissions: ['public_profile'] 
      });

      console.log(type);
      console.log(token);

      switch (type) {
        case 'success': {
          const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          console.log(response);
          const profile = await response.json();
          console.log(profile);
          Alert.alert(
            'Logged in!',
            `Hi ${profile.name}!`,
          );
          break;
        }
        case 'cancel': {
          Alert.alert(
            'Cancelled!',
            'Login was cancelled!',
          );
          break;
        }
        default: {
          Alert.alert(
            'Oops!',
            'Login failed!',
          );
        }
      }
    } catch (e) {
      Alert.alert(
        'Oops!',
        'Login failed!',
      );
    }
  };
}