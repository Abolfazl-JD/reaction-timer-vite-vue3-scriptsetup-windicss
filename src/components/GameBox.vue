<script setup lang="ts">
import { ref } from "vue"

const emit = defineEmits<{
  (event: "finish-game", reactionTime: number): void
}>()

const showBoxGame = ref(false)
const delay = Math.random() * (5000 - 2000) + 2000

setTimeout(() => {
  showBoxGame.value = true
  calculateReactionTime()
}, delay)

const reactionTime = ref(0)
const timer = ref<number | undefined>(undefined)

const calculateReactionTime = () => {
  timer.value = setInterval(() => {
    reactionTime.value += 10
  }, 10)
}

const showResult = () => {
  clearInterval(timer.value)
  showBoxGame.value = false
  emit("finish-game", reactionTime.value)
}
</script>

<template>
  <div v-if="showBoxGame">
    <h2 class="text-green-600 dark:text-green-400">Now</h2>
    <div @click="showResult" class="bg-green-500 dark:bg-green-600"></div>
  </div>
  <div v-else>
    <h2 class="text-red-600 dark:text-red-400">waiting for green box ...</h2>
    <div @click="warnUser" class="bg-red-500 dark:bg-red-600"></div>
  </div>
</template>
