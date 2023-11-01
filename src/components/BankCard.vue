<template>
  <Card class="bg grid ">
    <div class="h-full grid grid-rows-3 w-full">
      <div class=""></div>
      <div class="mt-4 text-2xl ltr text-center">
        {{ cardStore.card.panNumber }}
      </div>
      <div class="flex justify-between self-end">
        <div class="">
          {{ cardStore.card.month }}
          <span v-if="cardStore.card.month">/</span>
          {{ cardStore.card.year }}
        </div>
        <div class="ltr" v-if="cardStore.card.cvv2">
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
</script>
<style lang="less">
.bg {
  background-image: v-bind('imgSrc');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  aspect-ratio: 5/3;
}
</style>
