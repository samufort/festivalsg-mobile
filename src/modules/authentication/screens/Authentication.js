// @flow
import React, { Component } from 'react';
import {
  Alert,
  Button,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import {
  Form, Text, Item, Input, Icon, Picker, ListItem, CheckBox, Body,
} from 'native-base';
import * as Animatable from 'react-native-animatable';
import MonoText from '../../../components/StyledText';
import { authenticate } from '../actions';
import { fetchBaccalaureates } from '../../baccalaureates/actions';
import FacebookButton from '../components/FacebookButton';
import Baccalaureate from '../../baccalaureates/baccalaureate';

type Props = {
  baccalaureates: Array<Baccalaureate>,
  actions: {
    authenticate: (accessToken: String) => mixed,
    fetchBaccalaureates: () => mixed,
  },
};

type State = {
  inputs: any,
  selectedBaccalaureate: any,
  allowMails: boolean,
}

class Authentication extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputs: [],
      selectedBaccalaureate: 0,
      allowMails: false,
    };
  }

  componentDidMount() {
    const { actions } = this.props;
    actions.fetchBaccalaureates();
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { inputs, selectedBaccalaureate, allowMails } = this.state;
    const { baccalaureates } = this.props;

    return (
      <Animatable.View
        animation="fadeInRight"
        delay={1200}
        duration={700}
        style={{
          zIndex: 1, position: 'absolute', flex: 1, backgroundColor: 'transparent', width: '90%',
        }}
      >
        <Form style={{ marginRight: 3, alignSelf: 'center' }}>
          <Item style={{
            marginTop: 25,
            width: '100%',
            height: 34,
            borderBottomColor: 'blue',
          }}
          >
            <Icon name="md-person" style={{ color: 'blue', fontSize: 12 }} />
            <Input
              blurOnSubmit={false}
              returnKeyType="next"
              autoCapitalize="none"
              keyboardType="default"
              placeholder="Prénom"
            />
          </Item>
          <Item style={{
            marginTop: 25,
            width: '100%',
            height: 34,
            borderBottomColor: 'blue',
          }}
          >
            <Icon name="md-person" style={{ color: 'blue', fontSize: 12 }} />
            <Input
              blurOnSubmit={false}
              returnKeyType="next"
              autoCapitalize="none"
              keyboardType="default"
              placeholder="Nom de famille"
            />
          </Item>
          <Item style={{
            marginTop: 25,
            width: '100%',
            height: 34,
            borderBottomColor: 'blue',
          }}
          >
            <Icon name="md-mail" style={{ color: 'blue', fontSize: 12 }} />
            <Input
              blurOnSubmit={false}
              returnKeyType="next"
              autoCapitalize="none"
              keyboardType="email-address"
              placeholder="Courriel universitaire"
            />
          </Item>
          <Item style={{
            marginTop: 25,
            height: 34,
            borderBottomColor: 'blue',
          }}
          >
            <Icon name="md-school" style={{ color: 'blue', fontSize: 12 }} />
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Baccalauréat"
              placeholderIconColor="#007aff"
              selectedValue={selectedBaccalaureate}
              onValueChange={value => this.changeSelectedBaccalaureate(value)}
            >
              { baccalaureates
                && baccalaureates.map(bac => <Picker.Item key={bac.id} label={bac.name} value={bac.id} />)
              }
            </Picker>
          </Item>
          <Item style={{
            marginTop: 25,
            height: 34,
            borderBottomColor: 'blue',
          }}
          >
            <CheckBox onPress={this.changeAllowMails} checked={allowMails} />
            <Body>
              <Text>Toto</Text>
            </Body>
          </Item>
        </Form>
        <View style={{ marginTop: 15 }}>
          <FacebookButton logIn={this.logIn} />
        </View>
      </Animatable.View>
      // <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      //   <View style={styles.welcomeContainer}>
      //     <Button onPress={this.logIn} title="Sign in to Facebook" />
      //   </View>
      // </ScrollView>
    );
  }

  logIn = async (accessToken: String) => {
    const { actions } = this.props;
    actions.authenticate(accessToken);
  };

  changeAllowMails = () => {
    const { allowMails } = this.state;
    this.setState({ allowMails: !allowMails });
  }

  changeSelectedBaccalaureate = (value: Number) => {
    this.setState({ selectedBaccalaureate: value });
  }

  changeInputFocus = index => () => {
    if (index === 0) {
      this.state.inputs[index+1].state.inputRef._root.focus(); // eslint-disable-line
    }
  };

  updateCanLoginState = () => {
    const { inputs } = this.state;
    let canLogin = true;
    inputs.forEach((child) => {
      if (child.state.isCorrect !== 1) {
        canLogin = false;
      }
    });
  };

  clearAllInputs = () => {
    const { inputs } = this.state;
    inputs.forEach((child) => {
      child.clearInput();
    });
  };

  forgotPassword = () => {
    console.warn('Forgot password clicked'); // eslint-disable-line
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

function mapStateToProps(state) {
  return {
    baccalaureates: state.baccalaureate.baccalaureates,
  };
}

function mapDispatchToProps(dispatch: *): Object {
  return {
    actions: bindActionCreators({ authenticate, fetchBaccalaureates }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication);
