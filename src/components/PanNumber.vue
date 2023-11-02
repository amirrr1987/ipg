<template>
  <FormItem
    class="mb-0 col-span-full"
    label="شماره کارت"
    name="panNumber"
    :rules="[{ required: true, message: '' }]"
  >
    <Input
      class="text-lg text-gray-500 h-11"
      :class="cardStore.card.panNumber ? 'input-ltr' : ''"
      type="text"
      inputmode="numeric"
      placeholder="شماره کارت"
      size="large"
      v-maska
      data-maska="#### #### #### ####"
      v-model:value="cardStore.card.panNumber"
      ref="panNumberInput"
      @input="checkLength(cardStore.card.panNumber, 19, $refs.cvv2Input)"
    >
      <template #suffix>
        <img
          v-if="cardStore.bank.img"
          class="h-7 rounded w-7"
          :src="`../images/logos/${cardStore.bank.img}.png`"
          alt=""
        />
        <Icon v-else icon="mingcute:bank-card-line" class="text-2xl h-7 w-7 text-primary" />
      </template>
    </Input>
  </FormItem>
</template>
<script setup lang="ts"></script>

<script setup lang="ts">
import { FormItem, Input } from 'ant-design-vue/es'
import { useCardStore } from '@/stores/cardStore'
import { vMaska } from 'maska'
import { onMounted, ref } from 'vue'




const cardStore = useCardStore()

// generate random number for captcha 5 digit
const randomNumber = ref<number>(0)
const generateRandomNumber = () => {
  randomNumber.value = Math.floor(10000 + Math.random() * 90000)
}
onMounted(() => generateRandomNumber())

const ltrInputComputed = (value: string) => {
  return value ? 'input-ltr' : 'auto'
}

const checkLength = (value: string, max: number, ref: any) => {
  if (value.length === max) {
    ref.focus()
  }
}
</script>
<style lang="less">
input.input-ltr {
  direction: ltr;
}
.input-ltr {
  input {
    direction: ltr;
  }
}
</style>
