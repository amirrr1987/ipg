<template>
  <main>
    <section class="py-4">
        <div class="container mx-auto px-4 lg:w-300">
            <RouterView />
        </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
