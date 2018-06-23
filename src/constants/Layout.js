import { Dimensions } from 'react-native';

const dimensions = Dimensions.get('window');
const { width, height } = dimensions;

export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
