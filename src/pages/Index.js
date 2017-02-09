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
  gotoShopCart = () => {
    const { navigator } = this.props
    navigator.push({
      title: '购物车',
      component: ShopCart
    })
  }

  shouldComponent

  render() {
    console.log('render')
    return (
      <View style={styles.root}>
        <Text style={styles.text}>这是首页</Text>
        <Button onPress={this.gotoShopCart} title="点这里跳转到购物车"></Button>
      </View>
    );
  }

  componentDidMount () {
    console.log('componentDidMount')
    headerStore.rightClick = () => {
      console.log('首页点击右键')
    }
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
