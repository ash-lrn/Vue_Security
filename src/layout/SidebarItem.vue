<script setup>
  import { ref } from 'vue'
  import { RouterLink } from 'vue-router'
  const props = defineProps({
    icon: String,
    label: String,
    link: String,
  })
  
  const open = ref(false)
  const toggle = () => {
    open.value = !open.value
  }
</script>
  
<template>
    <RouterLink :to="link" class="flex items-center gap-3 text-gray-700 py-2 px-3 rounded-lg hover:bg-gray-100 transition">
        <i :class="icon"></i>
        <span class="">{{ label }}</span>
    </RouterLink>
</template>
