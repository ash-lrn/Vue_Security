<template>
    <button
      class="block text-left text-sm w-full px-2 py-1 text-gray-300 hover:text-white hover:bg-gray-800 rounded"
    >
      {{ label }}
    </button>
  </template>
  
  <script setup>
  const props = defineProps({
    label: String,
  })
  </script>
  