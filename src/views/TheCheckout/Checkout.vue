<template>
  <div class="h-screen flex justify-center items-center">
    <div class="container mx-auto flex gap-8">
      <div class="flex-1">
        <div class="text-center mb-2">سبد خرید</div>
        <div class="shadow p-4 bg-white rounded mb-4">
          <div class="flex justify-between" v-for="item in checkoutStore.products" :key="item._id">
            <div class="">{{ item.label }}</div>
            <div class="">{{ item.price }}</div>
          </div>
          <Divider />
          <div class="flex justify-between">
            <div class="sfd">مبلغ قابل پرداخت</div>
            <div class="">{{ checkoutStore.finalPrice }}</div>
          </div>
          <div class="flex justify-between mb-2">
            <Button type="primary" class="w-1/2 mx-auto" @click="goToPay">پرداخت</Button>
          </div>
        </div>
      </div>

      <div class="flex-1">
        <div class="text-center mb-4">روش پرداخت</div>
        <div class="">
          <RadioGroup v-model:value="paymentType" :options="banks" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Button, RadioGroup, Divider } from 'ant-design-vue/es'
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useCheckoutStore } from '@/stores/checkoutStore'

const paymentType = ref('')

const checkoutStore = useCheckoutStore()

const banks = reactive([
  {
    label: 'بانک ملت',
    value: 'melat'
  },
  {
    label: 'بانک کشاورزی',
    value: 'keshavarzi'
  }
])
const router = useRouter()
const goToPay = () => {
  router.push({ name: 'ThePayment' })
}
</script>
<style>
:where(.ant-radio-group) {
  @apply !grid gap-4;
}
</style>
@/stores/checkoutStore
