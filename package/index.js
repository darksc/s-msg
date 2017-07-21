import Message from './message/'

const install = function (Vue, opts = {}) {
  /* istanbul ignore if */
  if (install.installed) return

  Vue.prototype.$message = Message
}

export default {
  install
}
