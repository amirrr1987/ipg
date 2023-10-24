<template>
  <div class="h-screen">
    <div class="container mx-auto px-4">
      <div class="">header</div>
      <div class="">
        <div class="shadow bg-light">
          <img src="https://bki.ir/Portals/0/Logo.jpg?ver=crHoWoas07c1yaoMuPXuYQ%3d%3d" alt="" />
          <div class="">پرداخت آنلاین بانک کشاورزی</div>
        </div>
        <div class="">
          <Form layout="vertical">
            <FormItem label="شماره کارت">
              <Input />
            </FormItem>
            <FormItem label="شماره شناسایی ">
              <Input />
            </FormItem>
            <FormItem label="تاریخ انقضای کارت">
              <Input />
            </FormItem>
            <FormItem label="کد امنیتی">
              <Input />
            </FormItem>
            <FormItem label="رمز امنیتی">
              <Input />
            </FormItem>
            <FormItem label="ایمیل یا شماره تلفن همراه">
              <Input />
            </FormItem>
            <FormItem>
              <Button type="primary">پرداخت</Button>
              <Button>انصراف</Button>
            </FormItem>
          </Form>
        </div>
      </div>
      <div class="">footer</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Form, FormItem, Input, Button } from 'ant-design-vue/es'
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
