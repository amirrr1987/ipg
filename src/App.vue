<template>
  <ConfigProvider
    :theme="{
      token: {
        colorPrimary: '#00b96b'
      }
    }"
  >
    <RouterView />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { Button, ConfigProvider } from 'ant-design-vue'
</script>

<style lang="less"></style>
