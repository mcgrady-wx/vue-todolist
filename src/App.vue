<template>
  <div id="app">
    <input type="text" v-model="msg" @keyup="add($event)"/>
    <br/>
    <hr/>
    <h2>未完成项</h2>
    <ul>
      <li v-for="(item, index) in lists" v-if="!item.checked">
        <input type="checkbox" v-model="item.checked" @change="saveList()" >{{item.title}}-----
        <button @click="removeadd(index)">删除</button>
      </li>
    </ul>
    <br/>
    <hr/>
    <h2>未完成项</h2>
    <ul>
      <li v-for="(item, index) in lists" v-if="item.checked">
        <input type="checkbox" v-model="item.checked" disabled>{{item.title}}-----
        <button @click="removeadd(index)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
// 调用Storage方法
import Storage from "./model/Storage.js"
//console.log(Storage.set)
export default {
  name: 'app',
  data () {
    return {
      msg: '',
      lists:[]
    }
  },
  methods: {
    add(e){
      if(e.keyCode==13){
        this.lists.push({
        title:this.msg,
        checked:false
      })
      this.msg=""
      Storage.set("list",this.lists)
      }
      
    },
    removeadd(index){
      this.lists.splice(index,1)
      Storage.set("list",this.lists)
    },
    saveList(){
      Storage.set("list",this.lists)
    }
  },
  mounted() {
    let list=Storage.get("list")
    if (list) {
      this.lists=list
    }
  },
}
</script>

<style lang="scss">

</style>
