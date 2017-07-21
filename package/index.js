import Message from './message/'
import MessageBox from './messageBox/'

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return

  Vue.prototype.$message = Message
  Vue.prototype.$confirm = MessageBox
}

export default {
  install
}
