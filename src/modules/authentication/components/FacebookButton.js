import React, { Component } from 'react';
import { Button, Text, Icon } from 'native-base';
import { Alert } from 'react-native';
import { Facebook } from 'expo';

type Props = {
  logIn: (accessToken: String) => mixed;
}

export default class FacebookButton extends Component<Props> {
  onFacebookButtonClick = async () => {
    const { logIn } = this.props;

    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync('153611638586266', {
        permissions: ['public_profile'],
      });
      switch (type) {
        case 'success': {
          await logIn(token);
          break;
        }
        case 'cancel': { break; }
        default: {
          Alert.alert('Oops!', 'Il y a eu une erreur lors de votre connexion à Facebook');
        }
      }
    } catch (e) {
      Alert.alert('Oops!', 'Il y a eu une erreur lors de votre connexion à Facebook');
    }
  };

  render() {
    return (
      <Button
        onPress={this.onFacebookButtonClick}
        iconLeft
        bordered
        activeOpacity={0.5}
        style={{ borderColor: 'pink' }}
      >
        <Icon style={{ fontSize: 14, color: 'yellow' }} name="logo-facebook" />
        <Text
          uppercase={false}
          style={{
            fontSize: 12, fontWeight: '500', color: 'purple',
          }}
        >
          Facebook
        </Text>
      </Button>
    );
  }
}
