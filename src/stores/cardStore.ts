import { computed, ref, type ComputedRef } from 'vue'
import { defineStore } from 'pinia'
import { validatePanCard } from '@/utils'
export interface ICard {
  panNumber: string
  cvv2: string
  month: string
  year: string
  captcha: string
  password: string
  email: string
}
export const useCardStore = defineStore('Card', () => {
  const card = ref<ICard>({} as ICard)
  const bank = computed(() => {
    return card.value.panNumber ? validatePanCard(card.value.panNumber) : ''
  })

  return {
    card,
    bank
  }
})
