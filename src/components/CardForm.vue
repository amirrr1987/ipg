<template>
  <Card class="shadow relative rounded-t-xl">
    <Tag
      class="bg-gray-400 text-white px-10 py-1 w-full -mx-10 rounded-t-xl text-center text-base font-medium my-tag-card"
    >
      اطلاعات کارت
      <Timer class="absolute left-4" />
    </Tag>

    <Form class="mt-8" layout="vertical" @submit="submitForm" ref="formRef" :model="cardStore.card">
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
            trigger: 'change',
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
          <template #prefix>
            <Button
              v-if="cardStore.card.panNumber"
              size="small"
              type="text"
              shape="circle"
              class="flex justify-center items-center"
              @click="() => (cardStore.card.panNumber = '')"
            >
              <template #icon>
                <Icon icon="tabler:x" class="text-base" />
              </template>
            </Button>
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
          <template #prefix>
            <Button
              v-if="cardStore.card.cvv2"
              size="small"
              type="text"
              class="flex justify-center items-center"
              shape="circle"
              @click="() => (cardStore.card.cvv2 = '')"
            >
              <template #icon>
                <Icon icon="tabler:x" class="text-base" />
              </template>
            </Button>
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
            class="ltr text-lg text-gray-500 text-center h-11 input-clean-center"
            type="text"
            inputmode="numeric"
            placeholder="ماه"
            size="large"
            v-maska
            data-maska="##"
            v-model:value="cardStore.card.month"
            ref="MonthInput"
            @input="checkLength(cardStore.card.month, 2, $refs.yearInput)"
          >
            <template #suffix>
              <Button
                v-if="cardStore.card.month"
                size="small"
                type="text"
                class="flex justify-center items-center"
                shape="circle"
                @click="() => (cardStore.card.month = '')"
              >
                <template #icon>
                  <Icon icon="tabler:x" class="text-base" />
                </template>
              </Button>
            </template>
          </Input>
        </FormItem>

        <FormItem
          class="mt-8"
          name="year"
          :rules="[{ required: true, message: 'سال به درستی وارد شود', validator: validateYear }]"
        >
          <Input
            class="ltr text-lg text-gray-500 text-center h-11 input-clean-center"
            type="text"
            inputmode="numeric"
            placeholder="سال"
            size="large"
            v-maska
            data-maska="##"
            v-model:value="cardStore.card.year"
            ref="yearInput"
            @input="checkLength(cardStore.card.year, 2, $refs.captchaInput)"
          >
            <template #suffix>
              <Button
                v-if="cardStore.card.year"
                size="small"
                type="text"
                class="flex justify-center items-center"
                shape="circle"
                @click="() => (cardStore.card.year = '')"
              >
                <template #icon>
                  <Icon icon="tabler:x" class="text-base" />
                </template>
              </Button>
            </template>
          </Input>
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
            <template #prefix>
              <Button
                v-if="cardStore.card.captcha"
                size="small"
                type="text"
                shape="circle"
                class="flex justify-center items-center"
                @click="() => (cardStore.card.captcha = '')"
              >
                <template #icon>
                  <Icon icon="tabler:x" class="text-base" />
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
            <template #prefix>
              <Button
                v-if="cardStore.card.password"
                size="small"
                type="text"
                shape="circle"
                class="flex justify-center items-center"
                @click="() => (cardStore.card.password = '')"
              >
                <template #icon>
                  <Icon icon="tabler:x" class="text-base" />
                </template>
              </Button>
            </template>
          </Input>
        </FormItem>
        <Button
          type="primary"
          size="large"
          block
          class="mt-8 !h-11"
          @click="openNotification"
          :disabled="disabled"
        >
          درخواست رمز پویا
        </Button>
      </div>

      <FormItem label="" class="col-span-2" :rules="[{ required: false, message: '' }]">
        <Checkbox v-model:checked="checked">آیا مایل به دریافت رسید هستید؟</Checkbox>
      </FormItem>

      <div class="grid lg:grid-cols-2 gap-x-4">
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
          >
            <template #suffix>
              <Button
                v-if="cardStore.card.email"
                size="small"
                type="text"
                shape="circle"
                class="flex justify-center items-center"
                @click="() => (cardStore.card.email = '')"
              >
                <template #icon>
                  <Icon icon="tabler:x" class="text-base" />
                </template>
              </Button>
            </template>
          </Input>
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
          >
            <template #suffix>
              <Button
                v-if="cardStore.card.mobile"
                size="small"
                type="text"
                shape="circle"
                class="flex justify-center items-center"
                @click="() => (cardStore.card.mobile = '')"
              >
                <template #icon>
                  <Icon icon="tabler:x" class="text-base" />
                </template>
              </Button>
            </template>
          </Input>
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
import {
  Card,
  Form,
  FormItem,
  Input,
  Button,
  Checkbox,
  notification,
  Modal,
  Tag
} from 'ant-design-vue/es'
import { useCardStore } from '@/stores/cardStore'
import { vMaska } from 'maska'
import { Icon } from '@iconify/vue'
import Keyboard from '@/components/Keyboard.vue'
import { onMounted, ref, h } from 'vue'
import { useAcceptorStore } from '@/stores/acceptorStore'
import router from '@/router'
import { emailRegExp, mobileRegExp, monthRegExp } from '@/utils/regex'
import { validateCreditCardNumber } from '../utils'
import { useClipboard } from '@vueuse/core'
import dayjs from 'dayjs'
import Timer from '@/components/Timer.vue'
const password = ref('')

const { copy } = useClipboard({ password })

// dayjs.calendar('jalali')
const info = () => {
  Modal.success({
    title: 'رمز پویا',
    content: h('div', { class: 'text-center text-xl' }, [h('p', password.value)]),
    okButtonProps: {
      block: true
    },
    okText() {
      return 'کپی کردن'
    },
    onOk() {
      copy(password.value)
      disabled.value = false
    }
  })
}
const disabled = ref<boolean>(false)
notification.config({
  placement: 'topRight',
  rtl: true
})
const openNotification = () => {
  disabled.value = true
  generatePassword()

  notification.info({
    message: `درخواست درمز پویا`,
    description: 'رمز پویا تا دقایقی دیگر به شماره همراه شما ارسال میشود'
  })
  setTimeout(() => info(), 4000)
}

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
const validateYear = (rule, value, callback) => {
  const currentYear = dayjs()
  console.log('🚀 ~ file: CardForm.vue:338 ~ validateYear ~ currentYear:', currentYear)
  const minYear = currentYear - 4
  const maxYear = currentYear + 4

  // چک کردن اعتبار سال
  if (/^\d{2}$/.test(value)) {
    const inputYear = parseInt(value)
    if (inputYear >= minYear && inputYear <= maxYear) {
      callback() // سال معتبر است
    } else {
      callback('سال باید بین 4 سال قبل از سال جاری و 4 سال بعد از آن باشد')
    }
  } else {
    callback('سال باید به صورت دو رقمی مثل 1403 باشد')
  }
}

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
.my-tag-card {
  position: absolute;
  transform: translate(-16px, -23px);
}
.input-clean-center {
  input {
    text-align: center;

    // transform: translateX(10px);
  }
  span.ant-input-suffix {
    position: absolute;
    right: 10px;
  }
}
</style>
