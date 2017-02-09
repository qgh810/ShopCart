import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
} from 'react-native'

import ShopCart from './ShopCart'
import headerStore from '../mobx/headerStore'


export default class Index extends Component {
  constructor (props) {
    super(props)
  }

  setHeaderStore = () => {
    headerStore.set('showLeftBtn', false)
    headerStore.set('showRightBtn', true)
    headerStore.set('backgroundColor', '#333238')
    headerStore.rightClick = this.rightClick
  }

  rightClick = () => {
    console.log('首页点击右键')
  }

  gotoShopCart = () => {
    const { navigator } = this.props
    navigator.push({
      title: '购物车',
      component: ShopCart
    })
  }

  render() {
    this.setHeaderStore()
    return (
      <View style={styles.root}>
        <Text style={styles.text}>这是首页</Text>
        <Button onPress={this.gotoShopCart} title="点这里跳转到购物车"></Button>
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
