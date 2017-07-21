import Vue from 'vue'
import MessageVue from './message'

let MessageConstructor = Vue.extend(MessageVue)

let instance

let Message = (options) => {
  options = options || {}
  instance = new MessageConstructor({
    data: options
  })
  instance.vm = instance.$mount()
  document.body.appendChild(instance.vm.$el)
  instance.vm.visible = true
  instance.dom = instance.vm.$el
  return instance.vm
}

export default Message
