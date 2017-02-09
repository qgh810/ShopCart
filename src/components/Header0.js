/**
 * header模块
 * 作者 邱国辉
 */
import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { observer } from 'mobx-react/native'
import headerStore from '../mobx/headerStore'

export default class header extends Component {
  constructor(props) {
    super(props)
    // 初始化默认状态
    this.state = {
      showBackBtn: true,
      showRightBtn: true,
      backgroundColor: '#333238',
      title: '标题',
      backText: '返回',
      titleColor: '#fff',
      backTextColor: 'blue',
      icon: 'navicon',
      iconColor: '#fff'
    }

    // this.state = Object.assign({}, this.state, this.props)
    // 读取props的属性
    for (let attr in props) {
      this.state[attr] = props[attr]
    }
  }
  /**
   * 监听返回按钮
   * @return {[type]} [description]
   */
  onBackPress = () => {
    // console.log('后退事件触发')
    this.props.onBack && this.props.onBack()
  }

  /**
   * 监听菜单按钮
   * @return {[type]} [description]
   */
  onRightPress = () => {
    // console.log('菜单按钮触发')
    // this.props.onRight && this.props.onRight()
    headerStore.rightClick()
  }
  render() {
    // 获取设备宽度
    var {height, width} = Dimensions.get('window')
    return (
      <View
        style={[styles.headerBox, {width: width, backgroundColor: this.state.backgroundColor}]}>
        {
          (() => {
            if (this.state.showBackBtn) {
              return <TouchableOpacity
                style={styles.headerBack}
                onPress={this.onBackPress}>
                <Text style={[styles.BackText, {color: this.state.backTextColor}]}>
                  <Icon name="angle-left" style={[styles.BackText, {fontSize: 19}]} /> {this.state.backText}</Text>
                </TouchableOpacity>
              } else {
                return <TouchableOpacity style={styles.headerBack} />
              }
          })()
        }
        <Title />
        {/* <Text style={[styles.headerTitle, {color: this.state.titleColor}]}>{headerStore.title}</Text> */}
        {
          (() => {
            if (this.state.showRightBtn) {
              return <TouchableOpacity style={styles.headerMenu} onPress={this.onRightPress}>
                <Text style={styles.menuText}>
                  <Icon name={this.state.icon} style={[styles.menuText, {color: this.state.iconColor}]}/>
                </Text>
              </TouchableOpacity>
            } else {
              return <TouchableOpacity style={styles.headerMenu} />
            }
          })()
        }
        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

@observer
class Title extends Component {
  render() {
    return (
      <Text style={[styles.headerTitle]}>{headerStore.title}</Text>
    )
  }
}

const styles = StyleSheet.create({
  headerBox: {
    height: 60,
    paddingTop: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
  headerBack: {
    flex: 1,
    paddingLeft: 10,
    height: 40,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  headerMenu: {
    flex: 1,
    paddingRight: 10,
    height: 40,
    overflow: 'hidden',
  },
  BackText: {
    lineHeight: 45,
    textAlign: 'left',
    color: 'blue',
    fontSize: 15,
  },
  menuText: {
    fontSize: 23,
    lineHeight: 40,
    textAlign: 'right',
  },
  headerTitle: {
    flex: 5,
    height: 40,
    lineHeight: 40,
    textAlign: 'center',
    fontSize: 18,
    overflow: 'hidden',
    fontWeight: 'bold',
    color: '#fff',
  }
})
