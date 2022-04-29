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
  <div
    v-if="showBoxGame"
    @click="showResult"
    class="w-8/12 xs:w-4/12 md:w-3/12 lg:w-2/12 h-40 cursor-pointer rounded-md bg-green-500 dark:bg-green-600 relative pointer top-28 text-white text-2xl flex justify-center items-center mx-auto"
  >
    Click me
  </div>
  <h2
    v-show="!timer"
    class="text-center text-green-600 dark:text-green-400 font-bold text-xl mt-28"
  >
    waiting for green box ...
  </h2>
</template>
