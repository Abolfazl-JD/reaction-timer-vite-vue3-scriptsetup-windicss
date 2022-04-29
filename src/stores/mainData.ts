import { defineStore } from "pinia"

export const gameData = defineStore({
  id: "game-data",
  state: () => ({
    gameResult: 0,
    rank: "",
  }),
  actions: {},
})
