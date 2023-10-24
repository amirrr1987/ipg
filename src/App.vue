<template>
  <ConfigProvider
    :theme="{
      token: {
        colorPrimary: '#00b96b',
      }
    }"
  >
    <Button type="primary">asd</Button>
  </ConfigProvider>
</template>

<script setup lang="ts">
import { Button, ConfigProvider } from 'ant-design-vue'
</script>

<style lang="less">


</style>
