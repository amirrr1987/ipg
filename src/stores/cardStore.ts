import { computed, ref, type ComputedRef } from 'vue'
import { defineStore } from 'pinia'
import { validatePanCard } from '@/utils'
export const useCardStore = defineStore('Card', () => {
  const card = ref({
    panNumber: '',
    cvv2: '',
    month: '',
    year: '',
    captcha: '',
    password: '',
    email: ''
  })
  const bank = computed(() => {
    return card.value.panNumber ? validatePanCard(card.value.panNumber) : ''
  })

  return {
    card,
    bank
  }
})
