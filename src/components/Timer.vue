<template>
  <span>{{ timer }}</span>
</template>
<script setup lang="ts">
import { ref, createVNode } from 'vue'
import { Modal } from 'ant-design-vue/es'

const timer = ref('10:00')
const limitTime = ref(60)
const tempTime = ref('03:00')
const time = () => {
  let minutes: string | number = parseInt(timer.value.split(':')[0])
  let seconds: string | number = parseInt(timer.value.split(':')[1])

  if (seconds > 0) {
    seconds--
  } else {
    minutes--
    seconds = 59
  }

  if (minutes < 10) {
    minutes = '0' + minutes
  }

  if (seconds < 10) {
    seconds = '0' + seconds
  }
  const current = Number(seconds) + Number(minutes) * 60
  console.log('🚀 ~ file: Timer.vue:29 ~ time ~ current:', current)
  if (current === limitTime.value) {
    Modal.info({
      title: 'زمان',
      content: 'آیا به زمان بیشتری احتیاج دارید؟',
      okText: 'بله',
      centered: true,
      okButtonProps: {
        block: true
      },
      onOk() {
        timer.value = tempTime.value
      }
    })
  }
  timer.value = minutes + ':' + seconds
}

// write timer 10 minutes to zero

setInterval(time, 1000)
</script>
