<template>
  <Card class="shadow relative rounded-t-xl">
    <Tag
      class="bg-gray-400 text-white px-10 py-1 w-full -mx-10 rounded-t-xl text-center text-base font-medium my-tag"
      >اطلاعات پذیرنده</Tag
    >

    <Icon
      class="hidden lg:block lg:my-8 lg:h-40 lg:mx-auto lg:text-9xl lg:text-gray-200"
      icon="icon-park-outline:shopping"
    />

    <div class="mb-2 mt-4">
      <div class="mb-2 flex items-center gap-x-1">
        <Icon class="text-2xl text-primary" icon="tabler:building-store" />
        <div class="text-lg font-normal">نام پذیرنده :</div>
      </div>
      <div class="text-xl font-medium ltr break-words">
        {{ acceptorStore.acceptorName }}
      </div>
    </div>

    <div class="mb-2">
      <div class="mb-2 flex items-center gap-x-1">
        <Icon class="text-2xl text-primary" icon="tabler:file-invoice" />
        <span class="text-lg font-normal">شماره پذیرنده:</span>
      </div>
      <div class="text-base font-medium ltr break-words">{{ acceptorStore.acceptorId }}</div>
    </div>

    <div class="mb-2">
      <div class="mb-2 flex items-center gap-x-1">
        <Icon class="text-2xl text-primary" icon="tabler:file-invoice" />
        <span class="text-lg font-normal">شماره ترمینال:</span>
      </div>
      <div class="text-base font-medium ltr break-words">{{ acceptorStore.acceptorTerminal }}</div>
    </div>

    <div class="mb-2">
      <div class="mb-2 flex items-center gap-x-1">
        <Icon class="text-2xl text-primary" icon="icon-park-outline:link-one" />
        <span class="text-lg font-normal">سایت پذیرنده:</span>
      </div>
      <div class="text-base font-medium ltr break-words">{{ acceptorStore.acceptorUrl }}</div>
    </div>

    <Divider />

    <div class="mb-2">
      <div class="mb-2 flex items-center gap-x-1">
        <Icon class="text-2xl text-primary" icon="tabler:wallet" />
        <div class="text-lg font-normal">مبلغ: <span class="text-sm">(ریال)</span></div>
      </div>
      <div class="text-2xl font-bold ltr text-primary break-words">
        {{ acceptorStore.acceptorPrice.toLocaleString() }}
      </div>
    </div>
  </Card>
</template>
<script setup lang="ts">
import { useAcceptorStore } from '@/stores/acceptorStore'
import { Card, Divider, Tag } from 'ant-design-vue/es'
import { Icon } from '@iconify/vue'
const acceptorStore = useAcceptorStore()
</script>
<style lang="less">
.my-tag {
  position: absolute;
  transform: translate(-16px, -23px);
}
</style>
