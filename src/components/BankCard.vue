<template>
  <Card class="bg grid">
    <div class="h-full grid grid-rows-3 w-full">
      <div class="">s</div>
      <div class="text-2xl">
        {{ cardStore.card.panNumber }}
      </div>
      <div class="flex justify-between self-end">
        <div class="">
          {{ cardStore.card.month }}
          /
          {{ cardStore.card.year }}
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
