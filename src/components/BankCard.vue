<template>
  <Card class="bg grid">
    <div class="h-full grid grid-rows-3 w-full">
      <div class=""></div>
      <div class="mt-4 text-2xl ltr text-center">
        {{ formattedCardNumber(cardStore.card.panNumber) }}
      </div>
      <div class="flex justify-between self-end">
        <div class="">
          {{ cardStore.card.month ?? '--' }}
          <span>/</span>
          {{ cardStore.card.year ?? '--' }}
        </div>
        <div class="ltr">
          CVV2:
          <template v-for="_item in cardStore.card.cvv2" :key="_item"> * </template>
        </div>
      </div>
    </div>
  </Card>
</template>
<script setup lang="ts">
import { useCardStore } from '@/stores/cardStore'
import { Card } from 'ant-design-vue/es'
import { computed } from 'vue'
const cardStore = useCardStore()

const imgSrc = computed(() => {
  return `url('../images/cards/${cardStore.bank.img}.svg')`
})
let lines = [
  '-',
  '-',
  '-',
  '-',
  ' ',
  '-',
  '-',
  '-',
  '-',
  ' ',
  '-',
  '-',
  '-',
  '-',
  ' ',
  '-',
  '-',
  '-',
  '-'
]
const formattedCardNumber = (valueInput: string) => {
  if (valueInput) {
    const cardDigits = valueInput.split('')
    const length = cardDigits.length

    for (let i = 0; i < 19; i++) {
      if (i % 5 === 4) {
        // اگر فاصله است، فاصله را اضافه کنید
        lines[i] = ' '
      } else if (i < length) {
        // اگر عدد دیگری وجود دارد، آن عدد را قرار دهید
        lines[i] = cardDigits[i]
      } else {
        // در غیر اینصورت، خط فاصله قرار دهید
        lines[i] = '-'
      }
    }
  } else {
    // اگر شماره کارت خالی باشد، تمام خطوط را با '-' پر کنید
    for (let i = 0; i < 19; i++) {
      lines[i] = '-'
    }
  }

  return lines.join('')
}
</script>
<style lang="less">
.bg {
  background-image: v-bind('imgSrc') !important;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  aspect-ratio: 5/3;
}
</style>
