<template>
      <span>{{ timer }}</span>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const timer = ref('10:0')

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

  timer.value = minutes + ':' + seconds
}

// write timer 10 minutes to zero

setInterval(time, 1000)
</script>
