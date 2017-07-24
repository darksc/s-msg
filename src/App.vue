<template lang="pug">
  #app
    button(v-on:click="showMsg") 弹MSG
    button(v-on:click="showBox") 弹BOX
</template>

<script>
export default {
  name: 'app',
  mounted () {
  },
  methods: {
    showMsg () {
      this.$message({
        message: '我去',
        type: 'warning'
      })
    },
    showBox () {
      this.$confirm('你要干什么啊？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(res => {
        console.log(res)
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
