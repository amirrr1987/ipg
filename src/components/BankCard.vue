<template>
  <Card class="bg flex items-center justify-center">
    <!-- <div class="">{{ props.name }}</div>
    <div class="">{{ props.panNumber }}</div> -->
    <div class="text-2xl">
    {{ cardStore.card.panNumber }}
    </div>
  </Card>
</template>
<script setup lang="ts">
import { useCardStore } from '@/stores/cardStore'
import { Card } from 'ant-design-vue/es'
import { computed } from 'vue';
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
  width: 400px;
  height: auto;
  aspect-ratio: 3/2;
}
</style>
