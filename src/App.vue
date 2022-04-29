<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core"
import { ref } from "vue"
// components
import GuideModal from "./components/GuideModal.vue"
import GameBox from "./components/GameBox.vue"

const isDark = useDark()
const toggleThemeMode = useToggle(isDark)

const guidebook = ref(true)
const hideModal = () => {
  guidebook.value = false
}

const gameResult = ref(0)
const rank = ref("")

const showResult = (reactionTime: number) => {
  gameResult.value = reactionTime
  if (gameResult.value < 250) rank.value = "you're very fast "
  else if (gameResult.value < 350) rank.value = "you're a bit fast "
  else if (gameResult.value < 500) rank.value = "you're slow "
  else rank.value = "you're super lazy "
}
</script>

<template>
  <header>
    <nav class="w-full bg-blue-500 py-2 px-4">
      <div class="flex justify-between items-center">
        <h1 class="text-white font-bold text-3xl">𝑅𝑒𝒶𝒸𝓉𝒾𝑜𝓃 𝓉𝒾𝓂𝑒𝓇</h1>
        <div class="theme-switcher sm:pr-5" @click="toggleThemeMode()">
          <transition mode="out-in" name="theme-switch">
            <svg
              v-if="isDark"
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-yellow-400 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-yellow-200 cursor-pointer"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
              />
            </svg>
          </transition>
        </div>
      </div>
    </nav>
  </header>

  <main>
    <transition name="modal" v-if="guidebook">
      <GuideModal @hide-guideBook="hideModal" />
    </transition>
    <GameBox v-if="!guidebook && !gameResult" @finish-game="showResult" />

    <div v-if="gameResult" class="w-full text-center relative top-28">
      <button @click="gameResult = 0" class="game-btn tracking-1px">
        Play again
      </button>
      <p class="mt-5 dark:text-white">Reaction time - {{ gameResult }}</p>
      <h4 class="text-2xl font-bold text-green-500 mt-7">{{ rank }}</h4>
    </div>
  </main>
</template>

<style>
@import "./assets/base.css";

.theme-switch-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.theme-switch-enter-active,
.theme-switch-leave-active {
  transition: all 0.3s ease;
}

.theme-switch-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.modal-enter-from {
  opacity: 0;
  transform: translateY(-100px);
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-leave-to {
  opacity: 0;
  transform: translateY(100px);
}
</style>
