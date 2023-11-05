import { computed, ref, type ComputedRef } from 'vue'
import { defineStore } from 'pinia'
import { findPanCard } from '@/utils'
export interface ICard {
  panNumber: string
  cvv2: string
  month: string
  year: string
  captcha: string
  password: string
  email: string
  mobile: string
}
export const useCardStore = defineStore('Card', () => {
  const card = ref<ICard>({} as ICard)
  const bank: ComputedRef = computed(() => {
    return card.value.panNumber ? findPanCard(card.value.panNumber) : ''
  })

  return {
    card,
    bank
  }
})
