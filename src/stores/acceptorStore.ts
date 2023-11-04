import { computed } from 'vue'
import { defineStore } from 'pinia'

import { useRoute } from 'vue-router'

export const useAcceptorStore = defineStore('Acceptor', () => {
  const route = useRoute()

  const acceptorName = computed(() => {
    return route.query.name ?? '-'
  })
  const acceptorId = computed(() => {
    return route.query.id ?? '-'
  })
  const acceptorTerminal = computed(() => {
    return route.query.terminal ?? '-'
  })
  const acceptorPrice = computed(() => {
    return Number(route.query.price ?? 0) 
  })
  const acceptorUrl = computed(() => {
    return route.query.url ?? '-'
  })
 

  return {
    acceptorName,
    acceptorId,
    acceptorTerminal,
    acceptorPrice,
    acceptorUrl
  }
})
