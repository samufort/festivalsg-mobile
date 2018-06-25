import React, { Component } from 'react';
import {
  Item, Icon, Input, View,
} from 'native-base';

type Props = {
  update: () => mixed;
  changeFocus: () => mixed;
}

type State = {
  inputRef: any,
  value: Text,
  isCorrect: boolean,
}

export default class Email extends Component<Props, State> {
  constructor() {
    super();
    this.state = {
      inputRef: null,
      value: '',
      isCorrect: 0,
    };
  }

  checkIfIsCorrect = () => {
    const { update } = this.props;
    this.setState(prevState => ({ isCorrect: prevState.value !== '' }));
    update();
  };

  clearInput = () => {
    this.state.inputRef._root.setNativeProps({ text: '' }); // eslint-disable-line
    this.setState({ isCorrect: 0, value: '' });
  };

  updateText = (value) => {
    this.setState(prevState => ({ value: value }));
  };

  render() {
    const { changeFocus } = this.props;
    const { isCorrect } = this.state;
    return (
      <View>
        <Icon
          name="md-mail"
          style={{
            color: 'blue', fontSize: 12,
          }}
        />
        <Input
          blurOnSubmit={false}
          returnKeyType="next"
          ref={(ref) => { this.setState(prevState => ({ inputRef: ref })); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Courriel universitaire"
          onSubmitEditing={changeFocus}
          onChangeText={this.updateText}
          onEndEditing={this.checkIfIsCorrect}
        />
      </View>
    );
  }
}
