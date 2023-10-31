<template>
  <div class="h-screen">
    <div class="bg-green-600 h-20">header</div>
    <div class="container mx-auto px-4 w-320">
      <div class="grid grid-cols-[1fr_max-content] gap-8 p-8">
        <CardForm />
        <div class="p-8 flex flex-col gap-8">
          <BankCard />
          <Card>
            <div class="">
              <div class="">نام پذیرنده :</div>
            </div>
            <div class="">
              <div class="">مبلغ:</div>
            </div>
            <Divider />
            <div class="">
              <div class="">شماره فاکتور:</div>
            </div>
            <div class="">
              <div class="">سایت پذیرنده:</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
    <div class="bg-green-700 py-12">
      <div class="container mx-auto px-4 w-1/2 text-center">
        <img src="../../assets/images/logo.png" alt="" />
        <div class="">شرکت پرداخت الکترونیک سامان (سهامی عام)</div>
        <div class="">2023-2024</div>
        <div class="">تمامی حقوق این نرم‌افزار متعلق به سِپ (پرداخت الکترونیک سامان) می‌باشد.</div>
        <div class="">مرکز شبانه روزی ارتباط با مشتریان: 021-84080</div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {Card, Divider} from 'ant-design-vue/es'
import { computed, ref } from 'vue'
import CardForm from '@/components/CardForm.vue'
import BankCard from '@/components/BankCard.vue';
const card = ref({
  panNumber: '',
  cvv2: '',
  month: '',
  year: '',
  captcha: ''
})

const cvv2 = ref('3243')

const cvv2Computed = computed({
  set: (value) => {
    const sanitizedValue = value.replace(/\D/g, '') // Remove non-numeric characters
    cvv2.value = sanitizedValue
  },
  get: () => {
    const cvv2Value = cvv2.value
    if (cvv2Value.length > 4) {
      return cvv2Value.substring(0, 4) // Limit to 4 digits
    }
    return cvv2Value.replace(/\d/g, '*') + '/**'
  }
})

const updateCvv2 = (e) => {
  card.value = e.target.value
}
const formatterHandler = (value: string) => {
  if (value) {
    // Assuming the input format is "MMYY" (e.g., "1212")
    return value.replace(/(\d{2})(\d{2})/, '$1/$2')
  }
  return value
}
</script>
<style lang="less">
:where(.ant-form-row) {
  // @apply !grid gap-4;
  // grid-template-columns: 100px 1fr;
  // :where(.ant-form-item-label) {
  //   @apply !text-right;
  // }
}
</style>
