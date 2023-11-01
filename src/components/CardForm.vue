<template>
  <Card>
    <Form class="grid grid-cols-2 gap-x-4 gap-y-6" layout="vertical">
      <!-- <BankCard class="col-span-full" /> -->
      <FormItem class="col-span-full mb-0" label="شماره کارت">
        <Input
          class="h-11 text-lg text-gray-500"
          :class="ltrInputComputed(cardStore.card.panNumber)"
          type="text"
          inputmode="numeric"
          placeholder="شماره کارت"
          size="large"
          v-maska
          data-maska="#### #### #### ####"
          v-model:value="cardStore.card.panNumber"
        />
      </FormItem>
      <FormItem label="CVV2" class="col-span-full mb-0">
        <Input
          class="h-11 text-lg text-gray-500"
          :class="ltrInputComputed(cardStore.card.cvv2)"
          type="password"
          inputmode="numeric"
          placeholder="CVV2"
          size="large"
          v-maska
          data-maska="#####"
          v-model:value="cardStore.card.cvv2"
        >
          <template #suffix>
            <Keyboard v-model:keyboard="cardStore.card.cvv2" />
          </template>
        </Input>
      </FormItem>
      <FormItem label="تاریخ انقضا" class="col-span-full mb-0">
        <div class="grid grid-cols-[1fr_max-content_1fr] items-center gap-4">
          <FormItem class="mb-0">
            <Input
              class="h-11 ltr text-lg text-gray-500 text-center"
              type="text"
              inputmode="numeric"
              placeholder="ماه"
              size="large"
              v-maska
              data-maska="##"
              v-model:value="cardStore.card.month"
            />
          </FormItem>
          <FormItem class="mb-0">
            <span class="text-xl">/</span>
          </FormItem>
          <FormItem class="mb-0">
            <Input
              class="h-11 ltr text-lg text-gray-500 text-center"
              type="text"
              inputmode="numeric"
              placeholder="سال"
              size="large"
              v-maska
              data-maska="##"
              v-model:value="cardStore.card.year"
            />
          </FormItem>
        </div>
      </FormItem>

      <FormItem label="کد امنیتی" class="mb-0">
        <Input
          class="h-11 text-lg text-gray-500"
          :class="ltrInputComputed(cardStore.card.captcha)"
          type="text"
          inputmode="numeric"
          size="large"
          placeholder="کد امنیتی"
          v-maska
          data-maska="#####"
          v-model:value="cardStore.card.captcha"
        >
          <template #suffix>
            <Button type="link" @click="generateRandomNumber">
              <template #icon>
                <Icon class="text-2xl text-green-600" icon="jam:refresh-reverse" />
              </template>
            </Button>
          </template>
        </Input>
      </FormItem>
      <FormItem class="mb-0">
        <template #label>
          <span class="opacity-0">d</span>
        </template>
        <div
          class="border border-solid h-11 rounded-lg border-gray-300 text-center leading-11 text-xl text-gray bg-yellow-50"
        >
          {{ randomNumber }}
        </div>
      </FormItem>

      <FormItem label="رمز اینترنتی" class="mb-0">
        <Input
          class="h-11 text-lg text-gray-500"
          type="password"
          inputmode="numeric"
          placeholder="رمز اینترنتی"
          size="large"
          v-model:value="cardStore.card.password"
          :class="ltrInputComputed(cardStore.card.password)"
        >
          <template #suffix>
            <Keyboard v-model:keyboard="cardStore.card.password" />
          </template>
        </Input>
      </FormItem>
      <FormItem class="mb-0">
        <template #label>
          <span class="opacity-0">.</span>
        </template>
        <Button type="primary" size="large" block class="!h-11"> درخواست رمز پویا </Button>
      </FormItem>

      <FormItem label="ایمیل یا موبایل (اختیاری)" class="col-span-full mb-0">
        <Input
          class="h-11 text-lg text-gray-500"
          type="text"
          inputmode="text"
          placeholder="ایمیل یا موبایل"
          size="large"
          v-model:value="cardStore.card.email"
          :class="ltrInputComputed(cardStore.card.email)"
          @input="validateInput"
        />
      </FormItem>

      <div class="col-span-full grid grid-cols-5 gap-4">
        <FormItem class="col-span-2 mb-0">
          <Button type="primary" ghost size="large" block class="!h-11">انصراف</Button>
        </FormItem>
        <FormItem class="col-span-3 mb-0">
          <Button type="primary" size="large" block class="!h-11">پرداخت</Button>
        </FormItem>
      </div>
    </Form>
  </Card>
</template>
<script setup lang="ts">
import { Card, Form, FormItem, Input, Button, Popover } from 'ant-design-vue/es'
import { useCardStore } from '@/stores/cardStore'
import { vMaska } from 'maska'
import { Icon } from '@iconify/vue'
import BankCard from '@/components/BankCard.vue'
import Keyboard from '@/components/Keyboard.vue'
import { ref } from 'vue'
const cardStore = useCardStore()

// generate random number for captcha 5 digit
const randomNumber = ref()
const generateRandomNumber = () => {
  randomNumber.value = Math.floor(10000 + Math.random() * 90000)
}

// computed to detect if input is not empty add direction ltr
const ltrInputComputed = (value: string) => {
  return value ? 'input-ltr' : 'auto'
}

const validateInput = () => {
  const inputValue = cardStore.card.email

  // Check if the input is a valid email
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue)) {
    // It's a valid email
    // Handle email input
  }
  // Check if the input is a valid mobile number
  else if (/^[0-9]{10}$/.test(inputValue)) {
    // It's a valid mobile number
    // Handle mobile input
  } else {
    // Neither a valid email nor a valid mobile number
    // Handle the input accordingly
  }
}
</script>
<style lang="less">
/* .ant-input-affix-wrapper > input.ant-input {
  text-align: center;
  margin-right: 32px;
} */
// input-ltr if have ant-input-suffix input tag direction ltr if not have ant-input-suffix input-ltr is direction ltr
input.input-ltr {
  direction: ltr;
}
.input-ltr {
  input {
    direction: ltr;
  }
}
</style>
