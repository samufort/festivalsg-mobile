import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styled from 'styled-components';

const StyledTouchable = styled.TouchableOpacity`
    width: 165px;
    height:35px;  
    border-radius: 4px;
    background: ${props => props.background};
    margin:5px;
    justifyContent: center;
`;

const Title = styled.Text`
  text-align: center;
  color: ${props => props.color};
`;

type Props = {
  backgroundColor: string,
  text: string,
  textColor: string,
  handler: any,
}

export default class StyledButton extends React.Component {
  props: Props;

  render() {
    const {
      backgroundColor, text, textColor, handler,
    } = this.props;

    return (
      <StyledTouchable onPress={handler} background={backgroundColor}>
        <Title color={textColor}>
          {text}
        </Title>
      </StyledTouchable>
    );
  }
}
