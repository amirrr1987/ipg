<template>
  <main>
    <section class="py-8">
        <div class="container mx-auto px-4">
            <RouterView />
        </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
