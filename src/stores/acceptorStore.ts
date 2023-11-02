import { computed } from 'vue'
import { defineStore } from 'pinia'

import { useRoute } from 'vue-router'

export const useAcceptorStore = defineStore('Acceptor', () => {
  const route = useRoute()

  const nameComputed = computed(() => {
    return route.query.name ?? '-'
  })
  const invoiceComputed = computed(() => {
    return route.query.invoice ?? '-'
  })
  const priceComputed = computed(() => {
    return Number(route.query.price ?? 0) 
  })
  const urlComputed = computed(() => {
    return route.query.url ?? '-'
  })
  const imgComputed = computed(() => {
    return route.query.img 
  })

  return {
    nameComputed,
    invoiceComputed,
    priceComputed,
    urlComputed,
    imgComputed
  }
})
