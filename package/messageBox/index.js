import Vue from 'vue'
import MessageVue from './message'

let MessageConstructor = Vue.extend(MessageVue)

let currentMsg, instance

const MessageBox = (message, title, options) => {
  options = options || {}
  options.title = title
  options.message = message
  instance = new MessageConstructor({
    data: options
  })
  instance.callback = defaultCallback
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  return new Promise((resolve, reject) => {
    currentMsg = resolve
  })
}

const defaultCallback = action => {
  currentMsg(action)
}

export default MessageBox
