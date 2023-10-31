<template>
  <ConfigProvider :theme="{ token }">
    <TheHeader />
    <TheMain />
    <TheFooter />
  </ConfigProvider>
</template>

<script setup lang="ts">
import { ConfigProvider } from 'ant-design-vue'
import type { AliasToken } from 'ant-design-vue/es/theme/interface/alias'
import { reactive } from 'vue'

import TheHeader from '@/layouts/TheHeader.vue'
import TheMain from '@/layouts/TheMain.vue'
import TheFooter from '@/layouts/TheFooter.vue'

const token = reactive<AliasToken>({
  colorPrimary: '#2c9f45'
} as AliasToken)
</script>

<style lang="less"></style>
