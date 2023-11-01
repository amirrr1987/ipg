<template>
  <Popover title="صفحه کلید امن" trigger="click">
    <template #content>
      <div class="grid grid-cols-3 gap-2">
        <template v-for="item in random" :key="item">
          <Button type="default" @click="pushNumber(item)">
            {{ item }}
          </Button>
        </template>
        <Button type="text" @click="clean">
          <Icon class="text-2xl text-green-600" icon="tabler:eraser" />
        </Button>
        <Button type="text" @click="backSpace">
          <Icon class="text-2xl text-green-600" icon="ic:baseline-arrow-back" />
        </Button>
      </div>
    </template>
    <Button type="text">
      <template #icon>
        <Icon class="text-2xl text-green-600" icon="solar:keyboard-bold" />
      </template>
    </Button>
  </Popover>
</template>
<script setup lang="ts">
import { Button, Popover } from 'ant-design-vue/es'
import { Icon } from '@iconify/vue'
import { computed } from 'vue'

// props

interface Props {
  keyboard: string
}
const props = withDefaults(defineProps<Props>(), {
  keyboard: ''
})

const emits = defineEmits(['update:keyboard'])

// virtual keyboard for password width random sort 0-9
const random = computed(() => {
  const arr = []
  for (let i = 0; i < 10; i++) {
    arr.push(i)
  }
  return arr.sort(() => Math.random() - 0.5)
})

// push number to  props.keyboard
const pushNumber = (item: number) => {
  emits('update:keyboard', props.keyboard + item)
}

// backspace
const backSpace = () => {
  emits('update:keyboard', props.keyboard.slice(0, -1))
}

// clean
const clean = () => {
  emits('update:keyboard', '')
}
</script>
