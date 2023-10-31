import { computed, ref, type ComputedRef } from 'vue'
import { defineStore } from 'pinia'
import { validatePanCard } from '@/utils'
export const useCardStore = defineStore('Card', () => {
  const card = ref({
    panNumber: '',
    cvv2: '',
    month: '',
    year: '',
    captcha: ''
  })
  const bank = ref('')

  return {
    card,
    bank,
  }
})
