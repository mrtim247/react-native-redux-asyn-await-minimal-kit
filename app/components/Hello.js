import React from 'react';
import {
  View,
  Text
} from 'react-native';

export class Hello extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Hello It's Tim </Text>
      </View>
    );
  }
}