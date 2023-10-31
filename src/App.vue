<template>
  <ConfigProvider :theme="{ token }">
    <RouterView />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue'
import type { AliasToken } from 'ant-design-vue/es/theme/interface/alias'
import { reactive } from 'vue'

const token = reactive<AliasToken>({
  colorPrimary: '#2c9f45'
} as AliasToken)
</script>

<style lang="less"></style>
