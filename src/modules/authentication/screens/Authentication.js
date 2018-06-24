// @flow
import React, { Component } from 'react';
import {
  Alert,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Expo, { Facebook } from 'expo';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { authenticate } from '../actions';
import MonoText from '../../../components/StyledText';

type Props = {
  actions: {
    authenticate: (accessToken: String) => mixed,
  },
};

class Authentication extends Component<Props> {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Button onPress={this.logIn} title="Sign in to Facebook" />
        </View>
      </ScrollView>
    );
  }

  logIn = async () => {
    const { actions } = this.props;

    try {
      const { type, token } = await Facebook.logInWithReadPermissionsAsync('153611638586266', {
        permissions: ['public_profile'],
      });
      switch (type) {
        case 'success': {
          actions.authenticate(token);
          break;
        }
        case 'cancel': {
          Alert.alert('Cancelled!', 'Login was cancelled!');
          break;
        }
        default: {
          Alert.alert('Oops!', 'Login failed!');
        }
      }
    } catch (e) {
      Alert.alert('Oops!', 'Login failed!');
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

function mapDispatchToProps(dispatch: *): Object {
  return {
    actions: bindActionCreators({ authenticate }, dispatch),
  };
}

export default connect(
  null,
  mapDispatchToProps,
)(Authentication);
