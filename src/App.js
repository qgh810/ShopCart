import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Index from './pages/Index'

const INITIAL_ROUTE = {
  component: Index
}

export default class App extends Component {
  renderScene = (route, navigator) => {
    const Comp = route.component
    return (
      <Comp navigator={navigator} route={route} />
    )
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>
          这是App.js
        </Text>
        <Navigator
          initialRoute={INITIAL_ROUTE}
          renderScene={this.renderScene}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
