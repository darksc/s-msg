<template lang="pug">
  #app
    button(v-on:click="showBox") 弹出来
</template>

<script>
export default {
  name: 'app',
  mounted () {
    this.showBox()
  },
  methods: {
    showBox () {
      this.$message({
        message: '我去'
      })
    }
  }
}
</script>

<style lang="sass">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
</style>
