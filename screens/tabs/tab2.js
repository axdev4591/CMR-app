import { Animated, Button, StyleSheet, Text, View } from 'react-native';
import React, {Component} from 'react';


export default class Tab2 extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text>
        Tab2
      </Text>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',

  }
});

