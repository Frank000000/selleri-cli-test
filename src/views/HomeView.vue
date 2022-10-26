<script setup lang="ts">
import TheWelcome from '@/components/TheWelcome.vue'
import { useStore } from '@/store/index'
let store = useStore()
const add = () => {
  // store.$patch({
  //   count: store.count + 1,
  //   age:store.age + 2
  // })
  // 或者传递方法修改
  store.$patch(state => {
    state.count++;
    state.age++;
  })
}
</script>

<template>
  <main>
    <div style="display: flex;justify-content: space-between;margin: 30px 0;color: aquamarine;">
      <h3>count{{ store.count }}</h3>
      <h3>age{{ store.age }}</h3>
    </div>
    <div style="display: flex;justify-content: space-between;">
      <g-button type="success" @click="store.count++, store.age++">one</g-button>
      <g-button @click="add()">any</g-button>
      <g-button type="error" @click="store.piniaAdd()">action</g-button>
    </div>
    <TheWelcome />
  </main>
</template>
