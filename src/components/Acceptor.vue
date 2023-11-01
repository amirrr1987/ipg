<template>
  <Card class="shadow">
    <img class="mb-8 h-40 mx-auto block" :src="imgComputed" alt="" />
    <div class="text-xl mb-6 flex justify-between">
      <div class="">نام پذیرنده :</div>
      <div class="font-medium">{{ nameComputed }}</div>
    </div>
    <div class="text-xl mb-4 flex justify-between">
      <div class="">
        مبلغ:
         <span class="text-sm">(ریال)</span>
      </div>
      <div class="font-medium">{{ priceComputed?.toLocaleString(3) }}</div>
    </div>
    <Divider />
    <div class="text-xl mb-4 flex justify-between">
      <div class="">شماره فاکتور:</div>
      <div class="font-medium">{{ invoiceComputed }}</div>
    </div>
    <div class="text-xl mb-4 flex justify-between">
      <div class="">سایت پذیرنده:</div>
      <div class="font-medium ltr">{{ urlComputed }}</div>
    </div>
  </Card>
</template>
<script setup lang="ts">
import { Card, Divider } from 'ant-design-vue/es'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()

const acceptor = ref({
  name: '',
  price: '',
  invoice: '',
  url: '',
  img: ''
})

const nameComputed = computed(() => {
  return route.query.name
})
const invoiceComputed = computed(() => {
  return route.query.invoice
})
const priceComputed = computed(() => {
  return route.query.price
})
const urlComputed = computed(() => {
  return route.query.url
})
const imgComputed = computed(() => {
  return route.query.img
})
</script>
