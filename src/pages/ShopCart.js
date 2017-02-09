import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

import Header from '../components/Header'
import ItemList from '../components/ItemList'
import Footer from '../components/Footer'
import headerStore from '../mobx/headerStore'

export default class ShopCart extends Component {
  constructor (props) {
    super(props)
  }
  componentWillMount () {
    headerStore.rightClick = () => {
      console.log('购物车点击右键')
    }
  }
  render() {
    const { navigator } = this.props
    return (
      <View style={styles.root}>
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
