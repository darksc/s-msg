<template lang="pug">
  transition(name="s-message-fade")
    .s-messageBox-model(v-show="visible")
      .s-messageBox-wrap(v-show="visible")
        .s-messageBox-title
          span {{title}}
        .s-messageBox-content {{message}}
        .s-messageBox-button-wrap
          span(v-on:click="handleAction('cancel')") {{cancelButtonText}}
          span(v-on:click="handleAction('confirm')") {{confirmButtonText}}
        .s-messageBox-close
          span(v-on:click="handleAction('cancel')")
            <svg class="icon" width="200px" height="200.00px" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M606.831832 513.186012l283.924491-283.930631c26.14445-26.137287 26.14445-68.511373 0.007163-94.64866-26.131147-26.131147-68.49807-26.131147-94.64866 0l-283.926538 283.932678-283.926538-283.932678c-26.137287-26.131147-68.518536-26.131147-94.64866 0-26.137287 26.137287-26.137287 68.511373 0 94.64866l283.932678 283.929608L133.611044 797.122783c-26.137287 26.131147-26.137287 68.50421 0 94.64252 26.131147 26.137287 68.511373 26.137287 94.64866 0L512.189312 607.829556l283.937794 283.934724c26.123984 26.137287 68.50421 26.137287 94.635357 0 26.137287-26.137287 26.131147-68.511373 0-94.64252L606.831832 513.186012z" /></svg>
</template>
<script>
  export default {
    data () {
      return {
        visible: false,
        type: 'success',
        title: '提示',
        message: '警告啊',
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        duration: 3000,
        closed: false,
        callback: null
      }
    },
    mounted () {
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
      handleAction (action) {
        this.action = action
        this.callback(this.action, this)
        this.close()
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
  .s-messageBox-model
    position: absolute
    width: 100%
    height: 100%
    top: 0
    left: 0
    background: rgba(0, 0, 0, .5)
  .s-messageBox-wrap
    position: absolute
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    width: 521px
    height: 315px
    background: url('../../static/image/msgBox_bg.png') center bottom no-repeat
    text-align: center
    .s-messageBox-title
      font: 22px "微软雅黑"
      font-weight: bold
      margin-top: -10px
      color: #00a2e5
      span
        display: inline-block
        letter-spacing: 20px
        margin-left: 20px
    .s-messageBox-content
      margin-top: 90px
      font: 18px "微软雅黑"
      color: #96bde0
    .s-messageBox-button-wrap
      margin-top: 50px
      span
        display: inline-block
        background: none
        font: 14px "微软雅黑"
        color: #09a2e6
        border: 1px solid #00a1e9
        border-radius: 10px
        padding: 5px 20px
        transition: .3s
        margin: 0 20px
        &:hover
          cursor: pointer
          background: rgba(0, 162, 230, .5)
          border-color: #00a1e9
          color: #fff
    .s-messageBox-close
      position: absolute
      bottom: 0
      width: 100%
      height: 35px
      text-align: center
      span
        margin-bottom: -25px
        display: inline-block
        height: 48px
        width: 48px
        border: 1px solid #00a1e9
        border-radius: 50%
        background: rgba(0, 23, 61, .88)
        &:hover
          cursor: pointer
          box-shadow: 0 0 10px 0 #20becf
          svg
            transform: rotate(180deg)
        svg
          margin-top: 15px
          width: 20px
          height: 20px
          transition: .8s
          path
            fill: #00a1e9
        &:hover
          cursor: pointer


  .s-message-fade-enter-active, .s-message-fade-leave-active
    transition: opacity .5s
  .s-message-fade-enter, .s-message-fade-leave-to, .s-message-fade-leave-active
    opacity: 0
</style>
