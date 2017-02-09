import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Index from './pages/Index'
import Header0 from './components/Header0'
import headerStore from './mobx/headerStore'

const INITIAL_ROUTE = {
  title: '首页',
  component: Index
}

export default class App extends Component {
  renderScene = (route, navigator) => {
    headerStore.set('title', route.title)
    const Comp = route.component
    return (
      <Comp navigator={navigator} route={route} />
    )
  }

  render() {
    return (
      <View style={styles.root}>
        <Header0 />
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
  }
});
