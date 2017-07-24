<template lang="pug">
  transition(name="s-message-fade")
    .s-message-wrap(v-show="visible")
      .s-message-content
        .s-message-icon(v-bind:class="imgSrc")
        .s-message-info {{message}}
</template>
<script>
  let types = {
    success: 'success',
    warning: 'warning',
    error: 'error'
  }
  export default {
    data () {
      return {
        visible: false,
        type: 'success',
        message: '警告你不能酱紫！',
        duration: 3000,
        closed: false
      }
    },
    mounted () {
      this.startTimer()
    },
    computed: {
      imgSrc () {
        if (types.hasOwnProperty(this.type)) {
          return `s-message-${ types[this.type] }`
        } else {
          return `s-message-${ types['success'] }`
        }
      }
    },
    watch: {
      closed(newVal) {
        if (newVal) {
          this.visible = false
          this.$el.addEventListener('transitionend', this.destroyElement)
        }
      }
    },
    methods: {
      destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement)
        this.$destroy(true)
        this.$el.parentNode.removeChild(this.$el)
      },
      close () {
        this.closed = true
      },
      startTimer() {
        if (this.duration > 0) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close()
            }
          }, this.duration)
        }
      }
    }
  }
</script>
<style lang="sass">
  .s-message-wrap
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    width: 424px
    height: 244px
    background: url('../../static/image/msg_bg.png')
    text-align: center
    .s-message-content
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)
      .s-message-icon
        display: inline-block
        width: 50px
        height: 50px
      .s-message-success
        background: url('../../static/image/msg_success.png')
      .s-message-error
        background: url('../../static/image/msg_error.png')
      .s-message-warning
        background: url('../../static/image/msg_warning.png')
      .s-message-info
        margin-top: 28px
        font: 18px "微软雅黑"
        color: #96bde0

  .s-message-fade-enter-active, .s-message-fade-leave-active
    transition: opacity .5s
  .s-message-fade-enter, .s-message-fade-leave-to, .s-message-fade-leave-active
    opacity: 0
</style>
