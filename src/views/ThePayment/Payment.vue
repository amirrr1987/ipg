<template>
  <!-- <div class="h-screen">
    <div class="bg-green-600 h-20">header</div>
    <div class="container mx-auto px-4">
      <div class="grid lg:grid-cols-[1fr_max-content] gap-8 p-8">
        <CardForm />
        <div class="p-8 flex flex-col gap-8">
          <BankCard />
          <Acceptor />
        </div>
      </div>
    </div>
  </div> -->
  <div class="lg:grid lg:grid-cols-3 gap-4">
    <CardForm class="col-span-2" />
    <!-- <Card> -->
    <div class="p-8 flex flex-col gap-8">
      <Acceptor />
      <BankCard />
    </div>
    <!-- </Card> -->
  </div>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import CardForm from '@/components/CardForm.vue'
import BankCard from '@/components/BankCard.vue'
import Acceptor from '@/components/Acceptor.vue'
import { Card } from 'ant-design-vue/es'
// const card = ref({
//   panNumber: '',
//   cvv2: '',
//   month: '',
//   year: '',
//   captcha: ''
// })

// const cvv2 = ref('3243')

// const cvv2Computed = computed({
//   set: (value) => {
//     const sanitizedValue = value.replace(/\D/g, '') // Remove non-numeric characters
//     cvv2.value = sanitizedValue
//   },
//   get: () => {
//     const cvv2Value = cvv2.value
//     if (cvv2Value.length > 4) {
//       return cvv2Value.substring(0, 4) // Limit to 4 digits
//     }
//     return cvv2Value.replace(/\d/g, '*') + '/**'
//   }
// })

// const updateCvv2 = (e) => {
//   card.value = e.target.value
// }
// const formatterHandler = (value: string) => {
//   if (value) {
//     // Assuming the input format is "MMYY" (e.g., "1212")
//     return value.replace(/(\d{2})(\d{2})/, '$1/$2')
//   }
//   return value
// }
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
