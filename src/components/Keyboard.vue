<template>
  <Popover
    title="صفحه کلید امن"
    trigger="click"
    :open="isActive"
    @open-change="openChange"
  >
    <template #content>
      <div class="grid grid-cols-3 gap-2">
        <Button v-for="item in random" :key="item" type="default" @click="pushNumber(item)">
          {{ item }}
        </Button>
        <Button type="text" @click="clean">
          <Icon class="text-2xl text-primary" icon="tabler:eraser" />
        </Button>
        <Button type="text" @click="backSpace">
          <Icon class="text-2xl text-primary" icon="icon-park-outline:delete-two" />
        </Button>
      </div>
    </template>
    <Button type="text">
      <template #icon>
        <Icon class="text-2xl text-primary" icon="solar:keyboard-bold" />
      </template>
    </Button>
  </Popover>
</template>
<script setup lang="ts">
import { Button, Popover } from 'ant-design-vue/es'
import { Icon } from '@iconify/vue'
import { computed, ref, onMounted } from 'vue'

// props

interface Props {
  keyboard: string
  max?: number
}
const props = withDefaults(defineProps<Props>(), {
  keyboard: '',
  max: 0
})

const emits = defineEmits(['update:keyboard', 'next'])

// virtual keyboard for password with random sort 0-9
const random = ref<number[]>([])

const generateRandom = () => {
  const arr = Array.from({ length: 10 }, (_, i) => i)
  random.value = shuffleArray(arr)
}

const shuffleArray = (arr: any[]) => {
  const shuffled = [...arr]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = temp
  }
  return shuffled
}

const isActive = ref<boolean>(false)

const openChange = (e: boolean) => {
  if (e) {
    generateRandom()
  }
  isActive.value = e
}

// push number to props.keyboard
const pushNumber = (item: number) => {
  if (props.max > props.keyboard.length) {
    emits('update:keyboard', props.keyboard + item)
  } else {
    emits('next')
    isActive.value = false
  }
}

// backspace
const backSpace = () => {
  emits('update:keyboard', props.keyboard.slice(0, -1))
}

// clean
const clean = () => {
  emits('update:keyboard', '')
}

onMounted(() => {
  generateRandom()
})
</script>

<style lang="less" scoped>
.ant-btn {
  line-height: 26px;
}
</style>
