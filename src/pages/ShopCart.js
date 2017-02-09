import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Header from '../components/Header'
import ItemList from '../components/ItemList'
import Footer from '../components/Footer'

export default class ShopCart extends Component {

  render() {
    const { navigator } = this.props
    return (
      <View style={styles.root}>
        <Header navigator={navigator}/>
        <Text style={styles.text}>
          购物车页面
        </Text>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
