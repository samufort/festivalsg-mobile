// @flow
import React from 'react';
import { Text } from 'react-native';

type Props = {
  style: any,
};

function MonoText({ style }: Props) {
  return <Text style={[style, { fontFamily: 'space-mono' }]} />;
}

export default MonoText;
