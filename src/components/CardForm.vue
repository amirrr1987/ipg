<template>
  <Card>
    <Form layout="vertical" @submit="submitForm" ref="formRef" :model="cardStore.card">
      <FormItem
        label="شماره کارت"
        name="panNumber"
        :rules="[
          {
            required: true,
            message: ''
          },
          {
            validator: validatePanNumber,
            trigger: 'blur',
            message: 'شماره کارت معتبر نیست'
          }
        ]"
      >
        <Input
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

      <FormItem
        label="CVV2"
        name="cvv2"
        :rules="[{ required: true, message: 'این فیلد اجباری است' }]"
      >
        <Input
          :class="cardStore.card.cvv2 ? 'input-ltr' : ''"
          type="password"
          inputmode="numeric"
          placeholder="شماره شناسایی دوم"
          size="large"
          v-maska
          data-maska="#####"
          v-model:value="cardStore.card.cvv2"
          ref="cvv2Input"
          @input="checkLength(cardStore.card.cvv2, 5, $refs.MonthInput)"
        >
          <template #suffix>
            <Keyboard
              v-model:keyboard="cardStore.card.cvv2"
              :max="5"
              @next="checkLength(cardStore.card.cvv2, 5, $refs.MonthInput)"
            />
          </template>
        </Input>
      </FormItem>

      <div class="grid grid-cols-2 gap-x-4">
        <FormItem
          label="تاریخ انقضا"
          class=""
          name="month"
          :rules="[{ required: true, message: 'ماه به درستی وارد شود', pattern: monthRegExp }]"
        >
          <Input
            class="ltr text-lg text-gray-500 text-center h-11"
            type="text"
            inputmode="numeric"
            placeholder="ماه"
            size="large"
            v-maska
            data-maska="##"
            v-model:value="cardStore.card.month"
            ref="MonthInput"
            @input="checkLength(cardStore.card.month, 2, $refs.yearInput)"
          />
        </FormItem>

        <FormItem
          class="mt-8"
          name="year"
          :rules="[{ required: true, message: '', pattern: yearRegExp }]"
        >
          <Input
            class="ltr text-lg text-gray-500 text-center h-11"
            type="text"
            inputmode="numeric"
            placeholder="سال"
            size="large"
            v-maska
            data-maska="##"
            v-model:value="cardStore.card.year"
            ref="yearInput"
            @input="checkLength(cardStore.card.year, 2, $refs.captchaInput)"
          />
        </FormItem>
      </div>

      <div class="grid grid-cols-2 gap-x-4">
        <FormItem
          label="کد امنیتی"
          class=""
          name="captcha"
          :rules="[{ required: true, message: '', validator: validateCaptcha }]"
        >
          <Input
            :class="cardStore.card.captcha ? 'input-ltr' : ''"
            type="text"
            inputmode="numeric"
            size="large"
            placeholder="کد امنیتی"
            v-maska
            data-maska="#####"
            v-model:value="cardStore.card.captcha"
            ref="captchaInput"
            @input="checkLength(cardStore.card.captcha, 5, $refs.passwordInput)"
          >
            <template #suffix>
              <Button
                type="link"
                @click="
                  () => (
                    (cardStore.card.captcha = ''),
                    generateRandomNumber(),
                    $refs.captchaInput.focus()
                  )
                "
              >
                <template #icon>
                  <Icon class="text-2xl text-primary" icon="jam:refresh-reverse" />
                </template>
              </Button>
            </template>
          </Input>
        </FormItem>
        <div
          class="border border-solid rounded-lg border-gray-300 text-center leading-11 text-xl text-gray bg-yellow-50 mt-8 h-12"
        >
          {{ randomNumber }}
        </div>
      </div>

      <div class="grid grid-cols-2 gap-x-4">
        <FormItem
          label="رمز اینترنتی"
          class=""
          name="password"
          :rules="[{ required: true, message: '' }]"
        >
          <Input
            type="password"
            inputmode="numeric"
            placeholder="رمز اینترنتی"
            size="large"
            v-model:value="cardStore.card.password"
            :class="cardStore.card.password ? 'input-ltr' : ''"
            ref="passwordInput"
          >
            <template #suffix>
              <Keyboard
                v-model:keyboard="cardStore.card.password"
                :max="20"
                @next="checkLength(cardStore.card.password, 20, $refs.emailInput)"
              />
            </template>
          </Input>
        </FormItem>
        <Button type="primary" size="large" block class="mt-8" @click="generatePassword">
          درخواست رمز پویا
        </Button>
      </div>

      <FormItem label="" class="col-span-2" :rules="[{ required: false, message: '' }]">
        <Checkbox v-model:checked="checked">آیا مایل به دریافت رسید هستید؟</Checkbox>
      </FormItem>

      <div class="grid grid-cols-2 gap-x-4">
        <FormItem
          label="ایمیل (اختیاری)"
          class=""
          name="email"
          :rules="[
            {
              required: Boolean(cardStore.card.email),
              message: 'ایمیل به طور صحیح وارد شود',
              pattern: emailRegExp
            }
          ]"
          v-if="checked"
        >
          <Input
            class="text-lg text-gray-500 h-11 ltr"
            type="email"
            inputmode="email"
            placeholder="example@example.com"
            size="large"
            v-model:value="cardStore.card.email"
            ref="mobileInput"
          />
        </FormItem>

        <FormItem
          label="موبایل (اختیاری)"
          class=""
          name="mobile"
          :rules="[
            {
              required: Boolean(cardStore.card.mobile),
              message: 'شماره همراه به طور صحیح وارد شود',
              pattern: mobileRegExp
            }
          ]"
          v-if="checked"
        >
          <Input
            class="text-lg text-gray-500 h-11 ltr"
            type="tel"
            inputmode="tel"
            placeholder="09128888888"
            size="large"
            v-model:value="cardStore.card.mobile"
            ref="mobileInput"
            v-maska
            data-maska="###########"
          />
        </FormItem>
      </div>

      <div class="grid grid-cols-2 gap-x-4 mt-12">
        <Button type="primary" ghost size="large" block @click="cancelHandler">انصراف</Button>
        <Button type="primary" size="large" block @click="callSubmit">پرداخت</Button>
      </div>
    </Form>
  </Card>
</template>
<script setup lang="ts">
import { Card, Form, FormItem, Input, Button, Checkbox } from 'ant-design-vue/es'
import { useCardStore } from '@/stores/cardStore'
import { vMaska } from 'maska'
import { Icon } from '@iconify/vue'
import Keyboard from '@/components/Keyboard.vue'
import { onMounted, ref } from 'vue'
import { useAcceptorStore } from '@/stores/acceptorStore'
import router from '@/router'
import { emailRegExp, mobileRegExp, monthRegExp } from '@/utils/regex'
import { validateCreditCardNumber } from '../utils'
const cardStore = useCardStore()

const randomNumber = ref<number>(0)
const generateRandomNumber = () => {
  randomNumber.value = Math.floor(10000 + Math.random() * 90000)
}
onMounted(() => generateRandomNumber())

const checked = ref<boolean>(false)

const validateCaptcha = (rule: any, value: any, callback: any) => {
  if (Number(value) === Number(randomNumber.value)) {
    callback()
    return true
  } else {
    callback(new Error())
    return false
  }
}
const checkLength = (value: string, max: number, ref: any) => {
  if (value.length === max) {
    ref.focus()
  }
}

const validatePanNumber = (rule, value, callback) => {
  if (validateCreditCardNumber(value)) {
    callback()
  } else {
    callback(new Error('شماره کارت معتبر نیست'))
  }
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
const validateEmailOrMobile = (_rule: any, value: string) => {
  if (value) {
    // Check if the input is a valid email
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
      // It's a valid email
      // Handle email input
    }
    // Check if the input is a valid mobile number
    else if (/^[0-9]{10}$/.test(value)) {
      // It's a valid mobile number
      // Handle mobile input
    } else {
      // Neither a valid email nor a valid mobile number
      // Handle the input accordingly
    }
  }
}
const emailOrMobile = [
  {
    required: false,
    message: 'لطفا یک ایمیل یا شماره موبایل معتبر وارد کنید',
    validator: validateEmailOrMobile
  }
]

const password = ref('')

// generate random password bettwen 8 to 16 digit
const generatePassword = () => {
  password.value = Math.random().toString(36).slice(-8)
}
const acceptorStore = useAcceptorStore()
const formRef = ref()
const submitForm = () => {
  formRef.value
    .validate()
    .then(() => {
      if (Number(acceptorStore.priceComputed) > 200_000_000) {
        alert(453)
      }
      window.location.href = `${acceptorStore.urlComputed}`
    })
    .catch((error: any) => {
      console.log('error', error)
    })
}
const callSubmit = () => {
  submitForm()
}

const cancelHandler = () => {
  router.go(-1)
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
