import { computed, ref, type ComputedRef } from 'vue'
import { defineStore } from 'pinia'
import { forEach } from 'lodash'
import type { IProduct } from '@/models'

export const useCheckoutStore = defineStore('Checkout', () => {
  
  const products = ref<IProduct[]>([
    {
      _id: 1,
      label: 'کالای 1',
      price: 100,
      count: 2
    },
    {
      _id: 2,
      label: 'کالای 2',
      price: 40,
      count: 7
    },
    {
      _id: 3,
      label: 'کالای 3',
      price: 10,
      count: 1
    },
    {
      _id: 4,
      label: 'کالای 4',
      price: 120,
      count: 4
    }
  ])

  const finalPrice: ComputedRef<number> = computed((): number => {
    let total: number = 0
    forEach(products.value, (item: IProduct) => {
      total += item.price * item.count
    })
    return total
  })

  return { products, finalPrice }
})
