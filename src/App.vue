<template lang="pug">
  #app
    button(v-on:click="showMsg('操作成功', 'success')") success提示
    button(v-on:click="showMsg('操作警告', 'warning')") warning提示
    button(v-on:click="showMsg('操作失败', 'error')") error提示
    button(v-on:click="showBox") 确认框
</template>

<script>
export default {
  name: 'app',
  mounted () {
  },
  methods: {
    showMsg (message, type) {
      this.$message({
        message: message,
        type: type
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
