<template>
  <Card>
    <Form class="grid grid-cols-2 gap-x-4 gap-y-6">
      <BankCard class="col-span-full" />
      <FormItem class="col-span-full" label="شماره کارت">
        <Input
          class="h-11 ltr text-lg text-gray-500 text-center"
          type="text"
          inputmode="numeric"
          placeholder="شماره کارت"
          size="large"
          v-maska
          data-maska="#### #### #### ####"
          v-model:value="cardStore.card.panNumber"
        />
      </FormItem>
      <FormItem label="CVV2" class="col-span-full">
        <Input
          class="h-11 ltr text-lg text-gray-500 !text-center"
          type="password"
          inputmode="numeric"
          placeholder="CVV2"
          size="large"
          v-maska
          data-maska="#####"
          v-model:value="cardStore.card.cvv2"
        >
          <template #prefix>
            <Button type="link">
              <template #icon>
                <Icon class="text-2xl text-green-600" icon="solar:keyboard-bold" />
              </template>
            </Button>
          </template>
        </Input>
      </FormItem>
      <FormItem label="تاریخ انقضا" class="col-span-full">
        <div class="grid grid-cols-[1fr_max-content_1fr] items-center gap-4">
          <FormItem>
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
          <FormItem>
            <span class="text-xl">/</span>
          </FormItem>
          <FormItem>
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

      <FormItem label="کد امنیتی">
        <Input
          class="h-11 ltr text-lg text-gray-500 text-center"
          type="text"
          inputmode="numeric"
          size="large"
          v-maska
          data-maska="####"
          v-model:value="cardStore.card.captcha"
        >
          <template #prefix>
            <Button type="link">
              <template #icon>
                <Icon class="text-2xl text-green-600" icon="jam:refresh-reverse" />
              </template>
            </Button>
          </template>
        </Input>
      </FormItem>
      <FormItem>
        <template #label>
          <span class="opacity-0">d</span>
        </template>
        <img
          class="h-11 w-full object-cover rounded"
          src="data:image/JPEG;base64,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"
        />
      </FormItem>

      <FormItem label="رمز اینترنی">
        <Input
          class="h-11 ltr text-lg text-gray-500 text-center"
          type="password"
          inputmode="numeric"
          placeholder=""
          size="large"
          v-model:value="cardStore.card.password"
        >
          <template #prefix>
            <Button type="text">
              <template #icon>
                <Icon class="text-2xl text-green-600" icon="solar:keyboard-bold" />
              </template>
            </Button>
          </template>
        </Input>
      </FormItem>
      <FormItem>
        <template #label>
          <span class="opacity-0">d</span>
        </template>
        <Button type="primary" size="large" block class="!h-11"> درخواست رمز پویا </Button>
      </FormItem>

      <FormItem label="ایمیل یا موبایل (اختیاری)" class="col-span-full">
        <Input
          class="h-11 ltr text-lg text-gray-500 text-center"
          type="email"
          inputmode="email"
          placeholder="ایمیل یا موبایل"
          size="large"
          v-model:value="cardStore.card.email"
        />
      </FormItem>

      <div class="col-span-full grid grid-cols-5 gap-4">
        <FormItem class="col-span-3">
          <Button type="primary" size="large" block class="!h-11">پرداخت</Button>
        </FormItem>
        <FormItem class="col-span-2">
          <Button type="primary" ghost size="large" block class="!h-11">انصراف</Button>
        </FormItem>
      </div>
    </Form>
  </Card>
</template>
<script setup lang="ts">
import { Card, Form, FormItem, Input, Button } from 'ant-design-vue/es'
import { useCardStore } from '@/stores/cardStore'
import { vMaska } from 'maska'
import { Icon } from '@iconify/vue'
import BankCard from '@/components/BankCard.vue'
const cardStore = useCardStore()
</script>
<style>
@media (max-width: 575px) {
  .ant-form-item {
    margin-bottom: 0px;
  }
  .ant-input-affix-wrapper > input.ant-input {
    text-align: center;
    margin-right: 32px;
  }
}
</style>
