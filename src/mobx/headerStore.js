import { observable, action } from 'mobx'

const headerStore = observable(
  {
    title: '默认',
    showBackBtn: true,
    showRightBtn: true,
    backgroundColor: '#333238',
    backText: '返回',
    titleColor: '#fff',
    backTextColor: 'blue',
    icon: 'navicon',
    iconColor: '#fff'
  }
)

headerStore.setTitle = function (title) {
  setTimeout(() => {
    this.title = title
  }, 0)
}

headerStore.rightClick = function () {}


export default headerStore
