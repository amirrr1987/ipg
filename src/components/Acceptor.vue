<template>
  <Card class="shadow">
    <img class="mb-8 h-40 mx-auto block" :src="acceptorStore.imgComputed" alt="" />
    <div class="text-xl mb-6 flex justify-between">
      <div class="">نام پذیرنده :</div>
      <div class="font-medium">{{ acceptorStore.nameComputed }}</div>
    </div>
    <div class="text-xl mb-4 flex justify-between">
      <div class="">
        مبلغ:
        <span class="text-sm">(ریال)</span>
      </div>
      <div class="font-medium">{{ acceptorStore.priceComputed.toLocaleString() }}</div>
    </div>
    <Divider />
    <div class="text-xl mb-4 flex justify-between">
      <div class="">شماره فاکتور:</div>
      <div class="font-medium">{{ acceptorStore.invoiceComputed }}</div>
    </div>
    <div class="text-xl mb-4 flex justify-between">
      <div class="">سایت پذیرنده:</div>
      <div class="font-medium ltr">{{ acceptorStore.urlComputed }}</div>
    </div>
  </Card>
</template>
<script setup lang="ts">
import { useAcceptorStore } from '@/stores/acceptorStore'
import { Card, Divider } from 'ant-design-vue/es'

const acceptorStore = useAcceptorStore()
</script>
