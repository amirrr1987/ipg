<template>
  <div class="grid lg:grid-cols-4 gap-y-8 gap-x-4">
    <div class="lg:col-start-1 lg:col-end-2">
      <Acceptor class="shadow " />

    </div>
    <div class="lg:col-start-2 lg:col-end-4">
      <CardForm class="shadow " />
    </div>

    <div class="lg:col-start-4 lg:col-end-5 flex flex-col gap-y-8">
      <BankCard class="hidden shadow lg:block" />
       <Collapse
      v-model:activeKey="activeKey"
      expandIconPosition="end"
      class="shadow bg-white lg:col-start-2 lg:col-span-2"
      accordion
    >
      <CollapsePanel key="1">
        <template #header>
          <div class="flex items-center gap-x-2">
            <Icon icon="mdi:password-outline" class="text-primary text-xl" />
            <span class="text-primary">راهنمای استفاده از رمز پویا</span>
          </div>
        </template>
        <ul>
          <li class="leading-8">
            رمزپویا، رمز یک بار مصرفی است که به جای رمز دوم کارت استفاده میشود
          </li>
          <li class="leading-8">
            براساس دستورالعمل بانک صادرکننده کارت خود، نسبت به فعال سازی رمز پویا اقدام نمایید
          </li>
          <li class="leading-8">
            رمز پویا را براساس روش اعلامی از طرف بانک صادر کننده کارت، به یکی از روش های زیر دریافت
            کنید
          </li>
        </ul>
        <Divider />
        <ol>
          <li class="leading-8">
            دریافت از طریق برنامه کاربردی بانک، اینترنت بانک و یا موبایل بانک
          </li>
          <li class="leading-8">دریافت از طریق کد USSD بانک صادرکننده کارت شما</li>
          <li class="leading-8">دریافت از طریق زدن دکمه "رمزپویا" در درگاه پرداخت اینترنتی</li>
        </ol>
        <Divider />
        <p class="leading-7">
          پس از دریافت رمز به یکی از روش های فوق، رمز پویای دریافت شده را در محل تعیین شده برای "رمز
          اینترنتی" وارد نمایید و سپس مابقی اطلاعات را تکمیل نمایید
        </p>
      </CollapsePanel>
      <CollapsePanel key="2">
        <template #header>
          <div class="flex items-center gap-x-2">
            <Icon icon="tabler:wallet" class="text-primary text-xl" />
            <span class="text-primary">راهنمای پرداخت</span>
          </div>
        </template>

        <ul>
          <li class="leading-8">
            مشتری گرامی شما با پروتکل امن (ssl) به درگاه پرداخت بانک کشاورزی که با آدرس
            https://www.bki.ir شروع می شود متصل شده اید
          </li>
          <li class="leading-8">
            خواهشمند است جهت جلوگیری از سوء استفاده های اینترنتی، آدرس مرورگر وب خود را با آدرس
            مذکور مقایسه نمایید
          </li>
          <li class="leading-8">
            لطفاً از صحت نام فروشنده و مبلغ نمایش داده شده، اطمینان حاصل فرمایید. برای جلوگیری از
            افشای رمز کارت خود حتی المقدور از صفحه کلید مجازی استفاده فرمایید
          </li>
        </ul>
      </CollapsePanel>
    </Collapse>
    </div>


  </div>
</template>
<script setup lang="ts">
import CardForm from '@/components/CardForm.vue'
import BankCard from '@/components/BankCard.vue'
import Acceptor from '@/components/Acceptor.vue'
import { Card, Collapse, CollapsePanel, Divider, Table } from 'ant-design-vue/es'
import { reactive, ref } from 'vue'
import { Icon } from '@iconify/vue'

const activeKey = ref(['2'])
</script>
<style lang="less">
:where(.css-dev-only-do-not-override-1t7lv8i).ant-collapse
  > .ant-collapse-item
  > .ant-collapse-header
  .ant-collapse-arrow
  svg {
  transition: transform 0.3s;
  transform: rotate(175deg);
  @apply text-primary;
}
</style>
